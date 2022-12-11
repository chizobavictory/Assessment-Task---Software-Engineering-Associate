"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const database_config_1 = __importDefault(require("./config/database.config"));
database_config_1.default.sync()
    .then(() => {
    console.log("Database connected successfully");
})
    .catch((err) => {
    console.log(err);
});
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use("/", userRoute_1.default);
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
exports.default = app;
