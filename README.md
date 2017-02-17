## How to play with this code?

Run using a local webserver. For example, in Mac:

```
python -m SimpleHTTPServer 8080
```

The file news_mock.json is for testing only. If you want to use a external REST service change this line in /js/app.js

```
var root = 'https://your_rest_service_url';
```

And change the result data with your object response.
