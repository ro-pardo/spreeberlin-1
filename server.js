const express = require("express");
const app = express();
exports.app = app;
const server = require("http").Server(app);

const compression = require("compression");
const path = require("path");

// const mariadb = require("mariadb");

const axios = require("axios");

const crawler = require("./crawler");

const sensors = require("./sensors.json");

app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

const MODE = "development";


let connData = {};
if (MODE == "production") {
    connData = {
        host: "localhost",
        user: "spreeadmin",
        password: "bSl2@j28",
        database: "jk6787681093_",
    };
} else if (MODE == "development")
    connData = {
        host: "localhost",
        user: "root",
        password: "",
        database: "water",
    };

app.use((req, res, next) => {
    console.log("req.url", req.url);
    next();
});

app.get("/api/sensors", (req, res) => {
    //console.log("api data route Thingspeak", req.query);
    //console.log("user key", sensors.api_user_key);
    axios
        .get(
            `https://api.thingspeak.com/channels.json?api_key=${sensors.api_user_key}`
        )
        .then((response) => {
            //console.log("DATA from Thingspeak, Channel List", response.data);

            const result = { data: response.data, mp_token: sensors.mp_token };
            res.json(result);
        })
        .catch((err) => {
            console.log("api error thingspeak", err);
        });
});

app.get("/api/wasserportal", (req, res) => {
    console.log("api wasserportal", req.query);

    crawler.crawlData().then((result) => {
        console.log("crawler result", result);
        res.json(result);
    });
});
app.get("/api/sensordata", (req, res) => {
    //console.log("api data route", req.query);
    //console.log("api data route val_idx", req.query.id, req.query.val_idx);
    // //https://api.thingspeak.com/channels/9/fields/1.json?results=2
    axios
        .get(
            `https://api.thingspeak.com/channels/${req.query.id}/fields/${
                req.query.val_idx
            }.json?api_key=${sensors.sensors[req.query.id]}`
        )
        .then((response) => {
            //console.log("Sensordata from Thingspeak", response.data);
            res.json(response.data);
        })
        .catch((err) => {
            console.log("API Error Thingspeak latest", err);
        });
});

app.get("/api/sensordata/latest", (req, res) => {
    //console.log("api data route Thingspeak latest", req.query.id);

    axios
        .get(
            `https://api.thingspeak.com/channels/${
                req.query.id
            }/feeds/last.json?api_key=${sensors.sensors[req.query.id]}`
        )
        .then((response) => {
            //console.log("DATA from Server Modal JS Mount", response.data);
            res.json(response.data);
        })
        .catch((err) => {
            console.log("API Error Thingspeak latest", err);
        });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

server.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
