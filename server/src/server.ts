import dns from "node:dns/promises";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;

dotenv.config();

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
