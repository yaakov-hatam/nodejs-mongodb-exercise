const http = require('http');
const domainRepo = require('./DomainRepository');
const dns = require('dns');

function getWebsiteSource(url) {
    return new Promise((resolve, reject) => {
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
                resolve(content);
            });
        }).on('error', function (e) {
            reject(e.message);
        });
    })

}

// controllers
// function get('domain:/id', function(req, res) {})

function get(domain) {
    domainRepo.getOne(domain).then(res => {
        if (res.hasStats) {
            console.log(res);
        } else {
            console.log('no data');
            dns.resolve4(domain, (err, data) => {
                if (err) {
                    res.isAlive = false;
                } else {
                    console.log(err);
                    res.isAlive = true;
                    getWebsiteSource(domain).then(data => {
                        res.hasStats = true;
                        if (data.toLowerCase().indexOf('wordpress') > -1) {
                            res.stats = {
                                platform: 'wordpress'
                            }
                        } else {
                            res.stats = {
                                platform: 'other'
                            }
                        }
                        console.log(res);
                        domainRepo.update(domain, res).then(res => {
                            console.log('update success')
                        });

                    });
                }
            })
        }
    })
}

get('ckmisrael.co.il');