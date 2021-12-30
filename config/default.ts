export default {
  port: process.env.PORT || 1337,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.cvuzm.mongodb.net/main?retryWrites=true&w=majority`,
  token_secret: process.env.ACCESS_TOKEN_SECRET || "anysecrethere"
};
