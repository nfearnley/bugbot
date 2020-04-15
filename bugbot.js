"use strict";

process.on("unhandledRejection", (err, promise) => {
    console.error("== Node detected an unhandled rejection! ==");
    console.error(err ? err.stack : promise);
});

const Eris = require("eris");

var token = require("./token.json");
var bot = Eris(token);

bot.on("ready", async function() {
    console.log("EVENT: ready");
    console.log("__Guilds: " + bot.guilds.size + "__");
    bot.guilds.forEach(function(guild) {
        console.log(guild.name);
    });
});

bot.on("messageCreate", async function(message) {
    console.log("EVENT: createMessage");
    console.log("content: " + message.content);
    console.log("cleanContent: " + message.cleanContent);
});

bot.on("guildCreate", async function(guild) {
    console.log("EVENT: guildCreate");
    console.log("Added to: " + guild.name);
    console.log("Now in " + bot.guilds.size + " guilds");
});

bot.on("warn", async function(message, id) {
    console.log("EVENT: warn");
    console.warn(message);
});

bot.on("error", async function(err, id) {
    console.log("EVENT: error");
    console.error(err);
});

bot.on("disconnect", async function() {
    console.log("EVENT: disconnect");
});

bot.connect();
