const mongoose = require("mongoose");

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI");
  }

  if (!cached.promise) {
    mongoose.set("strictQuery", true);
    cached.promise = mongoose
      .connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
      .then((connection) => connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectToDatabase;
