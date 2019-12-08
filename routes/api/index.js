const router = require("express").Router();
const uniqloRoute = require("./uniqlo")

router.use("/uniqlo", uniqloRoute)


module.exports = router;