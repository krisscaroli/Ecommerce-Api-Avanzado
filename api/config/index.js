import dotenv from "dotenv";

dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.URI || "mongodb://127.0.0.1/ecomerce",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
