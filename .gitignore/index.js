const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = "/"

module.exports.help = {
  name: "clear"
}

Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `Fortnite`, type: 0} });
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
		.addField("**__Soon__**", "http://lunys.fr/")
		message.channel.send({embed})
	}

	if (message.content === prefix + `Lunys`){
        var help_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("__**Bienvenue chez Lunys**__", "*http://lunys.fr/ (Bientôt)*")
            .setFooter("Copyright 2018 © Lunys")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	} 

});

Client.login(process.env.TOKEN);
