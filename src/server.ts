import express, { Request, Response } from 'express';

const app: express.Application = express();
const port: number = 3000;

// Serve static files from the "public" directory inside "src"
app.use(express.static(__dirname + '/public'));

// Set up basic routes
app.get('/', (req: Request, res: Response) => res.sendFile(__dirname + '/public/index.html'));

// Additional routes
app.get('/about', (req: Request, res: Response) => res.sendFile(__dirname + '/public/about.html'));
app.get('/contact', (req: Request, res: Response) => res.sendFile(__dirname + '/public/contact.html'));

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));