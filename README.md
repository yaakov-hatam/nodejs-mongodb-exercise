# Website statistics index

## install
You should write the `install.js` file file. this file have an array with domains. you should insert to db every domain the a collection that have the name of the domain extension (e.g. `co.il` collection for `xyz.co.il`).
every document will have a properties: `extension: string`, `domain: string`, `hasStats: boolean` and `stats: object` that sets to `null`.

## REST api
write a REST api that have a controller of domainStats with `get` and `post` methods. 

`get/:id` will bring the `stats` object of the domain. if the stats is empty you should crawl the domain main page and bring the properties: `platform` and `isAlive`. `isAlive` indicates if the domain is in the air (use `dns` for checking it) and `platform` brong the platform of the website. the options of platform can be `none`, `wordpress`, `other`. `none` is for empty website, `other` is for platforms other then `wordpress`.

`get` will result same as `get/:id`, will bring all the domain that have `hasStats==true` stats object. there's paging option if the request containt the querystring `?page=1&size=10`

`post` method will insert a fresh document to databse same like the install proccess.

## Tips
- consider write a module that inserting a signle domain to the database so you can reuse the code in the `install.js` file and your controller.
