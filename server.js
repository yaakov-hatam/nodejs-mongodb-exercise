const http = require('http');


function getWebsiteSource(url, callback) {
    var options = {
        host: url,
        port: 80,
        path: '/'
    };

    http.get(options, function (res) {
        res.setEncoding("utf8");
        let content = '';
        res.on("data", function (chunk) {
            content += chunk;
        });

        res.on("end", function () {
            callback(null, content);
        });
    }).on('error', function (e) {
        callback(e.message);
    });
}


getWebsiteSource('www.colibri-design.net', function (err, source) {
    console.log(err ? err : source)
});
