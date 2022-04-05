// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Bot çevrimiçi!");
  client.user.setActivity("One Piece", { type: "WATCHING" });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "selam") {
    await interaction.reply("Aleyküm selam!");
  } else if (commandName === "zart") {
    await interaction.reply("Zort!");
  } else if (commandName === "31") {
    await interaction.reply("sj");
  } else if (commandName === "hypnamed") {
    await interaction.reply(
      "My GitHub Profile: @Hypnamed \nMy Twitch Channel: twitch.tv/hypnamed \nMy YouTube Channel: Hypnamed \nMy Website: https://erendemirtas.online"
    );
  }
});

// Login to Discord with your client's token
client.login(token);
