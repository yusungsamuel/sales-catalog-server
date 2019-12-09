const router = require("express").Router();
const uniqloRoute = require("./uniqlo")
const zaraRoute = require("./zara")

router.use("/uniqlo", uniqloRoute)
router.use("/zara", zaraRoute)

module.exports = router;