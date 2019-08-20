module.exports = {
	name: 'server',
	description: 'Rika sends the server name',
	execute(message, args) {
		message.channel.send("Welcome to the server! This server's name is " + message.guild.name);
	},
};