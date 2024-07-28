  require('./styles.css'); 
  require('./api.js');
  require('./widgetTypes/organic.js');
  require('./widgetTypes/sponsored.js');

  (function(){
    var widgetsApi = window.widgetsApi || (window.widgetsApi = {});

    document.addEventListener('DOMContentLoaded', function() {
      var feedContainer = document.getElementById('feed-container');
    
      function renderOnHtml(widgets) {
        var fragment = document.createDocumentFragment();
        var header = document.createElement('div');
        header.className = 'feed-title'
        header.textContent = 'Taboola feed'
      
        var container = document.createElement('div');
        container.className = "widget-container";
      
        container.appendChild(widgets);
        fragment.appendChild(header);
        fragment.appendChild(container);
      
        feedContainer.appendChild(fragment);
      }
      
      function renderWidgets(data) {
        if (!data || !data.list || !data.list.length) {
          console.error('No data received');
          return;
        }
      
        var fragment = document.createDocumentFragment();
        var itemsProcessed = 0;
        var containsWidget = false;
        var totalItems = data.list.length;
      
        for(var i = 0; i < data.list.length; i++) {
          var item = data.list[i];
          var widget;
          switch (item.origin) {
            case 'organic':
              widget = widgetsApi.renderOrganicWidget(item, onDone);
              break;
            case 'sponsored':
              widget = widgetsApi.renderSponsoredWidget(item, onDone);
              break;
            default:
              console.warn('Item type: ' + item.type + ' is not supported');
              onDone(null);
          }
        };
      
        function onDone(widget) {
          if (widget) {
            fragment.appendChild(widget);
            containsWidget = true;
          }
        
          itemsProcessed++;
          if (itemsProcessed === totalItems && containsWidget) {
            renderOnHtml(fragment);
          }
        }
        
      
      }

      var fullUrl = widgetsApi.buildUrl();
      widgetsApi.fetchData(fullUrl, renderWidgets);
    });
  })()