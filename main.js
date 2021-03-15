const Discord = require("discord.js");

require("dotenv").config();
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);
/* Discord.js works by listening to events, events may be attached by the on function */
client.on("ready", () => {
  console.log("discord client ready!");
});

client.on("message", (msg) => {
  if (msg.content === "Hello") msg.reply("Hi");
});
