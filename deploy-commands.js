const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('selam').setDescription('Bota selam verir.'),
	new SlashCommandBuilder().setName('zart').setDescription('Zort!'),
	new SlashCommandBuilder().setName('31').setDescription('sj'),
	new SlashCommandBuilder().setName('hypnamed').setDescription('Hypnamed'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Komutlar başarıyla kaydedildi.'))
	.catch(console.error);
