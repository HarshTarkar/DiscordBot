module.exports = {
	name: 'hello',
	description: 'Rika welcomes the user',
	execute(message, args) {
		message.channel.send("Hello " + message.author + "!");
	},
};