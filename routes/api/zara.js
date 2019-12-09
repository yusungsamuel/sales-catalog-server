const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.route("/")
    .get(
        function (req, res) {
            axios.get("https://www.zara.com/us/en/man-special-prices-l806.html").then(function (response) {

                const $ = cheerio.load(response.data);
                let result = []

                $("li._product").each(function (i, element) {
                    let item = {}
                    
                    //item name
                    item.name = $(element).find("div.product-info").children(".product-info-item-name").text()

                    //regular price
                    // item.regprice = $(element).find("span.product-standard-price").text()

                    //sales price
                    // item.salesprice = $(element).find("span.product-sales-price").text()

                    //link
                    item.link = $(element).find("a.item").attr("href")

                    //image
                    item.image = $(element).find("a.item").children("div.product-grid-xmedia").children("img.product-media").attr("src")
                    
                    result.push(item)

                })
                console.log("Success")
                res.json(result)
            })
        }
    )

module.exports = router;