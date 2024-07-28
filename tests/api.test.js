require('../src/api.js');

describe('api', () => {
    describe('buildUrl', () => {
        beforeEach(() => {
            window.widgetsConfig = {
                publisherId: '123',
                apiKey: 'abc',
                appType: 'web',
                appName: 'testApp',
                recCount: 10,
                sourceType: 'video',
                sourceId: '456',
                sourceUrl: 'http://example.com',
                userSession: 'session123'
            };
        });

        afterEach(() => {
            delete window.widgetsConfig;
        });

        it('should build the correct URL with user input', () => {
            const expectedUrl = 'https://api.taboola.com//1.2/json/feed/recommendations.get?' +
                'publisher%20id=123&app.apikey=abc&app.type=web&app.name=testApp&rec.count=10&source.type=video&source.id=456&source.url=http%3A%2F%2Fexample.com&user.session=session123';
            expect(window.widgetsApi.buildUrl()).toBe(expectedUrl);
        });

        it('should use default values', () => {
            delete window.widgetsConfig;
            const expectedUrl = 'https://api.taboola.com//1.2/json/feed/recommendations.get?publisher%20id=feed&app.apikey=143ca6bf153893c690249736df6a383615bb9e92&app.type=desktop&app.name=msn-casualgames-sudoku-us&rec.count=12&source.type=text&source.id=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fmicrosoft-sudoku%2F9wzdncrfhv60&source.url=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fmicrosoft-sudoku%2F9wzdncrfhv60&user.session=init';
            expect(window.widgetsApi.buildUrl()).toBe(expectedUrl);
        });
    });

    describe('fetchData', () => {
        let originalXMLHttpRequest;
        let mockXHR;

        beforeEach(() => {
            originalXMLHttpRequest = window.XMLHttpRequest;

            mockXHR = {
                open: jest.fn(),
                send: jest.fn(),
                setRequestHeader: jest.fn(),
                readyState: 4,
                status: 0,
                responseText: '',
                onreadystatechange: null
            };
            window.XMLHttpRequest = jest.fn(() => mockXHR);
        });

        afterEach(() => {
            window.XMLHttpRequest = originalXMLHttpRequest;
        });

        const triggerReadyStateChange = () => {
            if (mockXHR.onreadystatechange) {
                mockXHR.onreadystatechange();
            }
        };

        it('should call the callback with parsed data on successful response', done => {
            const testUrl = 'http://example.com/api';
            const responseData = { list: [{ id: 1, origin: 'organic' }] };

            window.widgetsApi.fetchData(testUrl, (data) => {
                expect(data).toEqual(responseData);
                done();
            });

            mockXHR.status = 200;
            mockXHR.responseText = JSON.stringify(responseData);

            triggerReadyStateChange();
        });

        it('should log an error on failed response', done => {
            const testUrl = 'http://example.com/api';
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

            window.widgetsApi.fetchData(testUrl, () => { });

            mockXHR.status = 500;

            triggerReadyStateChange();

            setTimeout(() => {
                expect(consoleSpy).toHaveBeenCalledWith('API request failed');
                consoleSpy.mockRestore();
                done();
            }, 0);
        });

        it('should log an error on JSON parse failure', done => {
            const testUrl = 'http://example.com/api';
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

            window.widgetsApi.fetchData(testUrl, () => { });

            mockXHR.status = 200;
            mockXHR.responseText = 'invalid json';

            triggerReadyStateChange();

            setTimeout(() => {
                expect(consoleSpy).toHaveBeenCalledWith('Failed to parse response');
                consoleSpy.mockRestore();
                done();
            }, 0);
        });
    });
});
