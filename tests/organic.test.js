require('../src/widgetTypes/organic.js');

describe('renderOrganicWidget', () => {
    let originalImage;

    beforeEach(() => {
        originalImage = global.Image;
        global.Image = class {
            constructor() {
                this.onload = null;
                this.onerror = null;
            }
            set src(value) {
                if (value === 'http://example.com/image.jpg') {
                    setTimeout(() => this.onload && this.onload(), 0);
                } else if (value === 'http://example.com/badimage.jpg') {
                    setTimeout(() => this.onerror && this.onerror(), 0);
                }
            }
        };
        consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        global.Image = originalImage;
    });

    it('should create a widget when thumbnail and name are present', done => {
        const item = {
            thumbnail: [{ url: 'http://example.com/image.jpg' }],
            name: 'Test Item',
            url: 'http://example.com/'
        };

        window.widgetsApi.renderOrganicWidget(item, (widget) => {
            expect(widget).not.toBeNull();
            expect(widget.className).toBe('widget');
            const anchor = widget.querySelector('a');
            expect(anchor.href).toBe(item.url);
            expect(anchor.target).toBe('_self');
            const thumbnail = widget.querySelector('.widget-thumbnail');
            expect(thumbnail.style.backgroundImage).toBe('url(http://example.com/image.jpg)');
            const name = widget.querySelector('.widget-name');
            expect(name.textContent).toBe(item.name);
            done();
        });
    });

    it('should call callback with null if thumbnail is missing', done => {
        const item = {
            thumbnail: [],
            name: 'Test Item',
            url: 'http://example.com'
        };

        window.widgetsApi.renderOrganicWidget(item, (widget) => {
            expect(widget).toBeNull();
            done();
        });
    });

    it('should call callback with null if name is missing', done => {
        const item = {
            thumbnail: [{ url: 'http://example.com/image.jpg' }],
            name: '',
            url: 'http://example.com'
        };

        window.widgetsApi.renderOrganicWidget(item, (widget) => {
            expect(widget).toBeNull();
            done();
        });
    });

    it('should call callback with null if image fails to load', done => {
        const item = {
            thumbnail: [{ url: 'http://example.com/badimage.jpg' }],
            name: 'Test Item',
            url: 'http://example.com'
        };

        window.widgetsApi.renderOrganicWidget(item, (widget) => {
            expect(widget).toBeNull();
            done();
        });
    });
});
