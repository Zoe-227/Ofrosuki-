const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping値を計測します'),

	async execute(client, interaction) {
		await interaction.reply({ content: `計算中`, ephemeral: true });
		await interaction.editReply({ content: `Pong! APIレイテンシ : ${Math.round(client.ws.ping)}ms 🛰️`, ephemeral: true });
	},
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Yobu')
		.setDescription('いつもの代名詞'),

	async execute(client, interaction) {
		await interaction.editReply({ content: `よんだ？`, ephemeral: true });
	},
};
