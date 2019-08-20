module.exports = {
	name: 'tuturu',
	description: 'tuturu',
	execute(message, args) {
		message.channel.send({ files: [file], embed: exampleEmbed })
	},
};

const Discord = require('discord.js');

const file = new Discord.Attachment('F:/DiscordBot/assets/tuturu.jpg');

const exampleEmbed = {
	title: 'TUTURUUUU!!!!',
	image: {
		url: 'attachment://tuturu.jpg',
	},
};