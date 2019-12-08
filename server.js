const express = require("express");


const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));


//scrape request
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
// app.get("/uniqlo", function(req, res){
//     axios.get("https://www.uniqlo.com/us/en/men/sale").then(function(response){
        
//         const $ = cheerio.load(response.data);
//         let result = []

//         $("div.product-tile-info").each(function(i, element){
//             let item = {}

//             item.name = $(element).find("div.product-name").text().replace(/(\r\n|\n|\r)/gm,"");
            
//             //regular price
//             item.regprice = $(element).find("span.product-standard-price").text()

//             //sales price
//             item.salesprice = $(element).find("span.product-sales-price").text()

//             //link
//             item.link = $(element).find("div.product-image").children("a").attr("href")

//             //image
//             item.image = $(element).find("div.product-image").children("a").children("img").attr("src")
//             // result.link = $(element).find(".title").children().attr("href");
//             // result.description = $(element).find("div.text").text();
//             // result.image = $(element).children("a").find(".image").attr("src");
//             result.push(item)
        
//         })
//         console.log("Success")
//         res.json(result)
//     })
// })

const routes = require("./routes");
app.use(routes);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });