//const http = require("http");
const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
   console.log(
      `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
   );

   req.appName = "GoNode Módulo 1";

   return next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
   const nome = req.query.nome;

   // express tem send, json, etc.
   return res.send(`Good morning, ${nome}. Welcome to ${req.appName}`);
});

app.get("/login/:nome", (req, res) => {
   const nome = req.params.nome;

   // express tem send, json, etc.
   return res.json({
      nome: req.params.nome
   });
});

app.listen(3000);
// http = cria um servidor http
// express = tem mais recursos para trabalhar com rotas e criar um servidor

/*
http
   .createServer((req, res) => {
      console.log(req);
      return res.end("Hello World");
   })
   .listen(3000);
*/
