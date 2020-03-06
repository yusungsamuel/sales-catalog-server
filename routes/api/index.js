const router = require("express").Router();
const hmRoute = require("./h&m")
const uniqloRoute = require("./uniqlo")
const zaraRoute = require("./zara")
const topmanRoute = require("./topman")


router.use("/h&m", hmRoute)
router.use("/topman", topmanRoute)
router.use("/uniqlo", uniqloRoute)
router.use("/zara", zaraRoute)

module.exports = router;