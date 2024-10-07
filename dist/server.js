"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Serve static files from the "public" directory
app.use(express_1.default.static(__dirname + '/public'));
// Set up basic routes
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
// Additional routes
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/public/contact.html'));
// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
