const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.route("/")
    .get(
        async function (req, res) {
            let response = await axios.get("https://www.zara.com/us/en/man-special-prices-l806.html")

            const $ = cheerio.load(response.data);
            let result = []

            $("li._product").each(function (i, element) {
                let item = {}

                //item name
                item.name = $(element).find("div.product-info").children(".product-info-item-name").text()

                if (item.name.length > 1) {
                    //regular price
                    // item.regprice = $(element).find("span.product-standard-price").text()

                    //sales price
                    // item.salesprice = $(element).find("span.product-sales-price").text()

                    //link
                    item.link = $(element).find("a.item").attr("href")

                    result.push(item)
                }


            });
            let promise = []
            result.forEach((r) => {
                promise.push(axios.get(r.link))
            })
            let resources = await Promise.all(promise)
            resources.forEach((resource, i) => {
                let $$ = cheerio.load(resource.data)
                console.log($$("a._seoImg").attr("href"))
                result[i].image = $$("a._seoImg").attr("href")
            })

            console.log("Success")
            res.json(result)

        }
    )

module.exports = router;