const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.route("/")
    .get(
        function (req, res) {
            axios.get("https://us.topman.com/en/tmus/category/sale-6820155/view-all-sale-5961594?currentPage=8").then(function (response) {

                const $ = cheerio.load(response.data);
                let result = []

                $("div.Product").each(function (i, element) {
                    let item = {}

                    item.name = $(element).find("header.Product-name").text();
                    
                    item.brand = "TOPMAN"

                    //regular price
                    item.regprice = $(element).find("span.HistoricalPrice-old").children("span.Price").text()

                    //sales price
                    item.salesprice = $(element).find("span.HistoricalPrice-promotion").children("span.Price").text()

                    //link
                    item.link = $(element).find("a.Product-link").attr("href")

                    //image
                    item.image = $(element).find("img.ProductImages-image").attr("src")
                    
                    result.push(item)

                })
                console.log("Success")
                res.json(result)
            })
        }
    )

module.exports = router;