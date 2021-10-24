import("dotenv").then((o)=> o.config({path: __dirname + '/.env.local'}))

module.exports = {
  reactStrictMode: true,
  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY
  }
}