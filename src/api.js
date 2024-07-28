(function() {
    var widgetsApi = window.widgetsApi || (window.widgetsApi = {});

    var QUERY_PARAMS_MAPPING = {
        publisherId: { paramName: 'publisher id', default: 'feed'},
        apiKey: { paramName: 'app.apikey', default: '143ca6bf153893c690249736df6a383615bb9e92'},
        appType: { paramName: 'app.type', default: 'desktop'},
        appName: { paramName: 'app.name', default: 'msn-casualgames-sudoku-us'},
        recCount: { paramName: 'rec.count', default: '12'},
        sourceType: { paramName: 'source.type', default: 'text'},
        sourceId: { paramName: 'source.id', default: 'https://www.microsoft.com/en-us/p/microsoft-sudoku/9wzdncrfhv60',},
        sourceUrl: { paramName: 'source.url', default: 'https://www.microsoft.com/en-us/p/microsoft-sudoku/9wzdncrfhv60',},
        userSession: { paramName: 'user.session', default: 'init'},
    };
    
    widgetsApi.buildUrl = function() {
        var baseUrl = 'https://api.taboola.com//1.2/json/feed/recommendations.get';
        var params = window.widgetsConfig || {};
    
        var queryString = [];
        for (var key in QUERY_PARAMS_MAPPING) {;
            var paramValue = params[key] || QUERY_PARAMS_MAPPING[key]['default']
            queryString.push(encodeURIComponent(QUERY_PARAMS_MAPPING[key]['paramName']) + '=' + encodeURIComponent(paramValue));
        }
        return baseUrl + '?' + queryString.join('&')
    }
    
    widgetsApi.fetchData = function(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    cb(data);
                } catch (e) {
                  console.error('Failed to parse response');
                }
            } else {
                console.error('API request failed');
            }
        };
    
        xhr.send();
    };
})();