require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const port = Number(process.env.PORT) || 8080;
const mongoUri = process.env.MONGODB_URI;
const requireDb = process.env.REQUIRE_DB === "true";

async function startServer() {
  if (!mongoUri) {
    if (requireDb) {
      console.error(
        "Missing MONGODB_URI. Add it to your environment variables.",
      );
      process.exit(1);
    }
    console.warn(
      "MONGODB_URI is missing. Starting API without database connection.",
    );
  } else {
    try {
      await mongoose.connect(mongoUri);
      console.log("Database connection successful");
    } catch (error) {
      if (requireDb) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
      }
      console.warn(
        `MongoDB unavailable (${error.message}). Starting API without database connection.`,
      );
    }
  }

  app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
  });
}

startServer();
