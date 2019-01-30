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
		.addField("/OpTium", "Tu veux des réseaux sociaux ?")
		.addField("/classement", "Tu veux le classement ?")
		message.channel.send({embed})
	}

	if (message.content === prefix + ``){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("")
            .setFooter("Copyright 2018 © Lunys")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}
	
	if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "rzfzfzfienrien":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#EC1016")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`Maintenance ...`, "C'est une commande en cours de développement juste l'id est envoyé !")
        .addField(`ID de l'utilisateur :id:`, msauthor, true)
        .setThumbnail(message.author.avatarURL)
        message.author.send({embed : stats_embed});
        break;
                     //CLEAR
                     case "clear":
                     if (message.member.hasPermission("ADMINISTRATOR")){
                         message.channel.fetchMessages()
                             .then(function(list){
                                 message.channel.bulkDelete(list);
                             }, function(err){message.channel.send("Erreur")})}
                     break;
        
        
     }

     if (!message.content.startsWith(prefix)) return;

     var args = message.content.substring(prefix.length).split(" ");
 
     switch (args[0].toLowerCase()) {
         case "efefefef":
 
         var userCreateDate = message.author.createdAt.toString().split(" ");
         var msauthor = message.author.id;
 
         var stats_embed = new Discord.RichEmbed()
 
         .setColor("#EC1016")
         .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
         .addField(`En cours de préparation ...`, "C'est une commande en cours de développement juste l'id est envoyé !")
         .addField(`ID de l'utilisateur :id:`, msauthor, true)
         .setThumbnail(message.author.avatarURL)
         message.author.send({embed : stats_embed});
         break;
                      //CLEAR
                      case "setchatclear":
                      if (message.member.hasPermission("SPEAK")){
                          message.channel.fetchMessages()
                              .then(function(list){
                                  message.channel.bulkDelete(list);
                              }, function(err){message.channel.send("Erreur")})}
                      break;
         
         
	 }

	 

});

Client.login(process.env.TOKEN);
