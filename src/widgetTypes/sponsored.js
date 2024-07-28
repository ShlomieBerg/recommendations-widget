(function() {
    var widgetsApi = window.widgetsApi || (window.widgetsApi = {});

    widgetsApi.renderSponsoredWidget = function(item, callback) {
        if (item.thumbnail.length && item.name && item.branding) {
            var img = new Image();
            img.src = item.thumbnail[0].url;
      
            img.onload = function() {
              var widget = document.createElement('div');
              widget.className = 'widget';
      
              var anchor = document.createElement('a');
              anchor.href = item.url;
              anchor.target = '_blank';
      
              var thumbnail = document.createElement('div');
              thumbnail.className = 'widget-thumbnail';
              thumbnail.style.backgroundImage = 'url(' + item.thumbnail[0].url + ')';
      
              var branding = document.createElement('div');
              branding.textContent = item.branding;
              branding.className = 'widget-branding';
      
              var name = document.createElement('div');
              name.textContent = item.name;
              name.className = 'widget-name';
      
              anchor.appendChild(thumbnail);
              anchor.appendChild(branding);
              anchor.appendChild(name);
      
              widget.appendChild(anchor);
              callback(widget);
            };
      
            img.onerror = function() {
              console.error('Image failed to load: ' + item.thumbnail[0].url);
              callback(null);
            };
          } else {
            callback(null);
          }
    };
})();