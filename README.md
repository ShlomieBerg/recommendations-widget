# Recommendations Widget
### Usage:

To use the Recommendations Widgets, please include the following code snippets in your HTML file.
In addtion add the dist/bundle.js folder in your root folder.


```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- API Configuration -->
  <script>
    window.widgetsConfig = {
        publisherId: 'publisher-id',
        appType: 'app-type',
        apiKey: 'api-key',
        appName: 'app-name',
        recCount: '-recommendation-count',
        sourceType: 'source-type',
        sourceId: 'source-id',
        sourceUrl: 'source-url',
        userSession: 'user-session'
    };
  </script>
</head>
```

```html
<body>
    <div id="feed-container" class="feed-container">
    </div>
    <script src="dist/bundle.js" defer></script>
</body>
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/ShlomieBerg/recommendations-widget.git
```

Go to the project directory

```bash
  cd recommendations-widget
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Browser to `http://localhost:3000`


### Running Tests
Run 
```bash
npm run test
```