"use strict";

const Koa = require('koa');
const hap = require('koa-hap');
const koaStatic = require('koa-static');

const app = new Koa();

app.use(
  hap("./api", {
    basePath: "/api",
    extension: ".js",
    delayLoad: false
  })
);

app.use(koaStatic('node_modules/koa-hap-client/dist', {}));
app.use(koaStatic('www', {
  defer: true
}));

module.exports = app.listen(3000);

console.log("server is running on http://localhost:3000");
