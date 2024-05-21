"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    try {
        (0, mongoose_1.connect)("mongodb+srv://URLSHORTNER:OE7KQlfoIk6L2Fhn@cluster0.0sh1ubd.mongodb.net/URLSHORTNERUI", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(function () {
            console.log("database connected......");
        });
    }
    catch (error) {
        console.log("database error");
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=conf.js.map