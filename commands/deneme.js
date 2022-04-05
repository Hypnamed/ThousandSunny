const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deneme')
		.setDescription('Bot kontrolü'),
	async execute(interaction) {
		await interaction.reply('Zort!');
	},
};
