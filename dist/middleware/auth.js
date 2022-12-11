"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const base_64_1 = __importDefault(require("base-64"));
function auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization || "";
        // console.log(authHeader);
        const [username, password] = base_64_1.default.decode(authHeader.split(" ")[1]).split(":");
        if (username === "test" && password === "pass1234") {
            next();
        }
    }
    catch (err) {
        res.set("WWW-Authenticate", 'Basic realm="user"');
        res.status(401).send("Authentication required");
    }
}
exports.auth = auth;
