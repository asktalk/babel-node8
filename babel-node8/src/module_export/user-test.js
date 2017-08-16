/**
 * Created by keep on 2017/8/13.
 */

var user = require("./user")

var config  = user.config


console.log("aaaaaaaaaaaaaaaa")
console.log("aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbb")
console.log("config", config.logger.appName)

config.logger.test("ccccc")