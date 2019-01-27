const Discord = require('discord.js');
const client = new Discord.Client();

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Fortnite', type: 0} });
    console.log("En marche !");

});


Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);

	if (command === "say") {
	if (message.member.hasPermission("MANAGE_MESSAGES"))
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "aide") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("List des commandes:")
		.addField("/OpTium", "Tu veux des réseaux sociaux ?")
		.addField("/classement", "Tu veux le classement ?")
		message.channel.send({embed})
	}

});

Client.login(process.env.TOKEN);
