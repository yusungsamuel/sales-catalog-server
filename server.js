const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));


//scrape request
app.get("/uniqlo", function(req, res){
    axios.get("https://www.uniqlo.com/us/en/men/sale").then(function(response){
        
        const $ = cheerio.load(response.data);
        let result = {}

        $("div.product-tile-info").each(function(i, element){
            let item = {}

            item.name = $(element).find("div.product-name").text().replace(/(\r\n|\n|\r)/gm,"");
            // item.name = item.name

            // result.link = $(element).find(".title").children().attr("href");
            // result.description = $(element).find("div.text").text();
            // result.image = $(element).children("a").find(".image").attr("src");
            result[i] = item
        
        })
        res.json(result)
    })
})


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });