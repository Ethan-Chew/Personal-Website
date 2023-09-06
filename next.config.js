import("dotenv").then((o)=> o.config({path: __dirname + '/.env.local'}))

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY
  }
}