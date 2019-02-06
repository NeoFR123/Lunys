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
		.setTitle("**__Soon__**")
		.addField("Bientôt : ", "http://lunys.fr/")
		message.channel.send({embed})
	}

	if (message.content === prefix + `lunysprotect`){
	if (message.member.hasPermission("ADMINISTRATOR"))
        var help_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("**:white_check_mark: Tous les membres ont été protéger !**", " ")
            .setFooter("Notre liste est continuellement mise à jour. Nous vous recommandons de protéger vos membres au moins une fois par semaine.")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	} 

});

Client.login(process.env.TOKEN);
