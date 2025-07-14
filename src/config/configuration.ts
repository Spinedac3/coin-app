export default () => ({
    port: parseInt(process.env.PORT || '4000', 10),
    jwtSecret: process.env.JWT_SECRET,
    database: {
      url: process.env.DATABASE_URL,
    },
  });
  