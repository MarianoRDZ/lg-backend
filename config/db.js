const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar con Mongo:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
