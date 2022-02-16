module.exports = {
    HOST: "localhost",
    USER: "dalarno1",
    PASSWORD: "Dalarno2022!",
    DB: "user",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };