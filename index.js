const Discord = require('discord.js');
cont bot = new Discord.Client();

var prefix = (".")

bot.on ('ready', function() {
	bot.user.setGame("Command: .help");
	console.log("Connectedç");
});

bot.login("NTAyOTI5ODY1MTQyNDM1ODcw.DqvInA.pIiVDm2xbsfPegtegiBWXEf4PYY")


bot.on('message', message => {
	if (message.content === prefix + ".help"){
		message.channel.sendMessage(">Liste des commandes: \n -.help");
	}
	
	if (message.content === "Salut"){
		message.reply("Bien le bonjour. :)");
		console.log("Commande Salut effectué");
	}	
});
