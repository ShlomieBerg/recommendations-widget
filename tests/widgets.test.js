// widgets.test.js

require('../src/api.js');
require('../src/widgetTypes/organic.js');
require('../src/widgetTypes/sponsored.js');

describe('widgets', () => {
    let widgetsApi;
    let buildUrlMock;
    let fetchDataMock;
    let renderOrganicWidgetMock;
    let renderSponsoredWidgetMock;
    let consoleErrorMock;
    let consoleWarnMock;

    beforeAll(() => {
        widgetsApi = window.widgetsApi;
        buildUrlMock = jest.spyOn(widgetsApi, 'buildUrl').mockReturnValue('http://example.com/api');
        fetchDataMock = jest.spyOn(widgetsApi, 'fetchData').mockImplementation((url, cb) => {
            cb({
                list: [
                    { origin: 'organic', thumbnail: [{ url: 'http://example.com/image.jpg' }], name: 'Test Item', url: 'http://example.com' },
                    { origin: 'sponsored', thumbnail: [{ url: 'http://example.com/image.jpg' }], name: 'Test Item', branding: 'Test Brand', url: 'http://example.com' }
                ]
            });
        });
        renderOrganicWidgetMock = jest.spyOn(widgetsApi, 'renderOrganicWidget').mockImplementation((item, cb) => {
            const widget = document.createElement('div');
            widget.className = 'organic-widget';
            cb(widget);
        });
        renderSponsoredWidgetMock = jest.spyOn(widgetsApi, 'renderSponsoredWidget').mockImplementation((item, cb) => {
            const widget = document.createElement('div');
            widget.className = 'sponsored-widget';
            cb(widget);
        });
        consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
        consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterAll(() => {
        buildUrlMock.mockRestore();
        fetchDataMock.mockRestore();
        renderOrganicWidgetMock.mockRestore();
        renderSponsoredWidgetMock.mockRestore();
        consoleErrorMock.mockRestore();
        consoleWarnMock.mockRestore();
    });

    beforeEach(() => {
        document.body.innerHTML = '<div id="feed-container"></div>';
    });

    
    const loadWidgets = () => {
        require('../src/widgets.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));
    };

    it('should add DOMContentLoaded event listener', () => {
        const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
        require('../src/widgets.js');
        expect(addEventListenerSpy).toHaveBeenCalledWith('DOMContentLoaded', expect.any(Function));
        addEventListenerSpy.mockRestore();
    });

    it('should render widgets correctly on DOMContentLoaded', () => {
        loadWidgets();

        const feedContainer = document.getElementById('feed-container');
        expect(feedContainer.querySelector('.feed-title')).not.toBeNull();
        expect(feedContainer.querySelector('.widget-container')).not.toBeNull();
        expect(feedContainer.querySelector('.organic-widget')).not.toBeNull();
        expect(feedContainer.querySelector('.sponsored-widget')).not.toBeNull();
    });

    it('should handle no data scenario', () => {
        fetchDataMock.mockImplementationOnce((url, cb) => {
            cb({ list: [] });
        });

        loadWidgets();
        expect(consoleErrorMock).toHaveBeenCalledWith('No data received');
    });

    it('should handle unsupported item types', () => {
        fetchDataMock.mockImplementationOnce((url, cb) => {
            cb({
                list: [
                    { origin: 'unsupported', thumbnail: [{ url: 'http://example.com/image.jpg' }], name: 'Test Item', url: 'http://example.com' }
                ]
            });
        });

        loadWidgets();
        expect(consoleWarnMock).toHaveBeenCalledWith('Item type: undefined is not supported');
    });
});
