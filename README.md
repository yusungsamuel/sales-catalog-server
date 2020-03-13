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

### Response Example for Uniqlo
``` [
{
"name": "MEN OVERSIZED ANORAK PARKA",
"brand": "UNIQLO",
"regprice": "$49.90",
"salesprice": "$39.90",
"link": "https://www.uniqlo.com/us/en/men-oversized-anorak-parka-425078.html?dwvar_425078_color=COL32&cgid=men-sale",
"image": "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/425078/item/goods_32_425078.jpg?width=380"
},
{
"name": "MEN U HUNTING JACKET",
"brand": "UNIQLO",
"regprice": "$79.90",
"salesprice": "$69.90",
"link": "https://www.uniqlo.com/us/en/men-u-hunting-jacket-426039.html?dwvar_426039_color=COL37&cgid=men-sale",
"image": "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/426039/item/goods_37_426039.jpg?width=380"
},
{
"name": "MEN U DRY TOUCH SUMMER CREW  NECK LONG-SLEEVE SWEATER",
"brand": "UNIQLO",
"regprice": "$49.90",
"salesprice": "$39.90",
"link": "https://www.uniqlo.com/us/en/men-u-dry-touch-summer-crew--neck-long-sleeve-sweater-426186.html?dwvar_426186_color=COL74&cgid=men-sale",
"image": "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/426186/item/goods_74_426186.jpg?width=380"
}, ...
 ```

## Technologies Used
- Javascript
- Node.js
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client
- [Express](https://www.npmjs.com/package/express) - Routing framework
- [cheerio](https://www.npmjs.com/package/cheerio)- Markup parser and manipulator

## Author
Samuel Yu - https://github.com/yusungsamuel
