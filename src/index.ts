import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Node Server</title>
      </head>
      <body>
        <h1>Welcome 🙌</h1>
        <p>This is a full HTML page served from Express.</p>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>TypeScript</li>
        </ul>
      </body>
    </html>
  `);
});





app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


