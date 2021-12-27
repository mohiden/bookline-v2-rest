export default {
  port: process.env.PORT || 1337,
  dbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/bookline-rest",
  token_secret: process.env.ACCESS_TOKEN_SECRET || "anysecrethere",
};
