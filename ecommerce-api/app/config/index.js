const config = {
  database: {
    // connection: process.env.DATABASE_URL,
    connection: 'postgres://postgres:aaaa@127.0.0.1:5432/ecommerce',
  },
  api: {
    host: "0.0.0.0",
    port: 3000,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: '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',
    fromEmail: 'hoangtrung.huster@gmail.com',
  },
  webClient: {
    url: "http://localhost:3000",
  },
};

module.exports = config;
