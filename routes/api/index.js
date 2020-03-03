const router = require("express").Router();
const hmRoute = require("./h&m")
const uniqloRoute = require("./uniqlo")
const zaraRoute = require("./zara")

router.use("/h&m", hmRoute)
router.use("/uniqlo", uniqloRoute)
router.use("/zara", zaraRoute)

module.exports = router;