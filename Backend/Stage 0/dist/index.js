"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({
        email: "mohrimuakpo@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/SamMuaks2/HNG-internship/tree/main/Backend/Stage%200"
    });
});
app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
