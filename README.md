# Sales Catalog API
Sales Catalog API allows user to obtain on sale items information from different fashion brands. Currently, the API is being hosted on HEROKU.

## Objective
This API was built to provide the necessary information for the full-stack application, [Sales Catalog](https://sales-catalog.herokuapp.com/).

## REST API
### Getting information for a specific brand
` GET/thing/ ` 

base URL 

    http://enigmatic-tundra-66827.herokuapp.com/api/
Append the brand name you want to obtain information for at the end of the url 

Currently, there is only 4 end points:
- H&M
- TOPMAN
- UNIQLO
- ZARA 

## Technologies Used
- Javascript
- Node.js
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client
- [Express](https://www.npmjs.com/package/express) - Routing framework
- [cheerio](https://www.npmjs.com/package/cheerio)- Markup parser and manipulator

## Author
Samuel Yu - https://github.com/yusungsamuel
