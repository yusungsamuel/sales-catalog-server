const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.route("/")
    .get(
        function (req, res) {
            axios.get("https://www2.hm.com/en_us/sale/men/view-all.html?sort=stock&image-size=small&image=stillLife&offset=0&page-size=75").then(function (response) {

                const $ = cheerio.load(response.data);
                let result = []

                $("li.product-item").each(function (i, element) {
                    let item = {}

                    item.name = $(element).find("h3.item-heading").children().text();
                    
                    item.brand = "H&M"

                    //regular price
                    item.regprice = $(element).find("span.regular").text()

                    //sales price
                    item.salesprice = $(element).find("span.sale").text()

                    //link
                    item.link = $(element).find("a.link").attr("href")

                    //image
                    item.image = $(element).find("img.item-image").attr("src")
                    
                    result.push(item)

                })
                console.log("Success")
                res.json(result)
            })
        }
    )

module.exports = router;