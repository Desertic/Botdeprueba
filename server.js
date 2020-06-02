const http = require("http");
const express = require("express");
const app = express();

//
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");

const client = new Client();

client.on("ready", () => {
  console.log("Bot Now connected!");
  console.log("Logged In as", client.user.tag);
  client.user.setStatus("dnd"); 

  console.log("Bot status: ", client.user.presence.status);
  
});
//EL TOKEN DE SU BOT
const token = "TOKENBOTPAGINADISCORD";
client.login(token);
//EL TOKEN DE SU BOT

//ESTADO DEL BOT
client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setPresence( {
       status: "online",
       game: {
           name: "Fornais",
           type: "PLAYING"
       }
   } );

});
//ESTADO DEL BOT

//PARAUSUARIOSNUEVOS
client.on("guildMemberAdd", member => {
  var Canal = client.channels.find(
    channel => channel.id === "IDELCANAL"
  );
  Canal.send(`Bienvenido ${member.user} al Servidor de tal tal tal escrito por
${member.guild.name} `);
});
//PARAUSUARIOSNUEVOS

//INICIAENVIODEMENSAJES
client.on("message", msg => {
  //INICIAENVIODEMENSAJES
  /**
    if (msg.content === "<serv") {
        var Canal = client.channels.find(channel => channel.id === "716779175821836438");
      //Canal.send("SERVER")
         msg.channel.send("NOMBRE DEL SERVER");
    }
  */
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  
  if (msg.content === "<serv") {
    const embed = new RichEmbed()
      .addField("Nombre del server: ", "Server", true)
      .addBlankField(true)//espacio en blanco
      .addField("Dirección del Servidor: ", "192.99.28.22:22222", true)
      .setAuthor(
        "Desertic",
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg"
      );
    msg.channel.send(embed);
  }
  
    if (msg.content.includes ("servidor")) {
    const embed = new RichEmbed()
      .addField("Nombre del server: ", "Server", true)
      .addBlankField(true)
      .addField("Dirección del Servidor: ", "192.99.28.22.22222", true)
      .setAuthor(
        "Desertic",
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg"
      );
    msg.channel.send(embed);
  }
  
      if (msg.content.includes("hola")) {
    var Mensajes = [
      "holis",
      "que ond@",
      "que tranza raza",
      "holu",
      "helloudah",
      "que pedo",
      "como van prros",
      "el de arriba es gei"
    ];
    var aleatorio = Math.floor(Math.random() * Mensajes.length);
    msg.channel.send(Mensajes[aleatorio]);
  }
  
    //RECORDATORIOS
  if (msg.content === "<recordar") {
    var interval = setInterval(function() {
      var Canal = client.channels.find(
        channel => channel.id === "IDELCANAL"
      );
      Canal.send(`Recuerden !! :laughing: 
El dia de hoy el servidor se cerrara a las 9 de la noche 
pero estara abierto inmediatamente a las 10 de la noche
solo sean pacientes  :sweat_smile: :grin:`);
    }, 5000)//SOLO PONGAN EL TIEMPO QUE QUIERAN EN MILISEGUNDOS;
  }
      //RECORDATORIOS
  
//Otroformatodemensajes
    if (msg.content =="recordarevento"){
            var Canal = client.channels.find( channel => channel.id === "IDELCANAL" );
const embed = {
	color: 0x00FFFF,
	title: 'HOY PRIMER CARRERA!!',
	url: 'https://discord.js.org',
	author: {
		name: 'Admin ',
		 icon_url: client.user.avatarURL,
	},
	description: "DE 6 A 8 PM !!",
  
  fields: [
				{
			name: 'REGLAS DEL EVENTO',
			value: '\n 1.-El \n 2.- Los jugadores',
			inline: true,
		}

  ],
	thumbnail: {
		 icon_url: client.user.avatarURL,
	},
	image: {
		url: 'https://cdn.glitch.com/1ede8250-04d7-4e54-ba12-92d6cc040234%2F77219a2d-0cb0-45b0-983c-6986a93ba334_descarga.jpg?v=1590959927544',
	},
};  
Canal.send({ embed: embed});
       }
    //Otroformatodemensajes

  
    //PARAIMAGENESAVISOSETC
  if (msg.content.includes("buenos")){
  var Canal = client.channels.find( channel => channel.id === "IDELCANAL" );
const embed = {
	color: 0x0099ff,
	image: {
		url: 'https://i.pinimg.com/originals/a7/64/47/a76447595797b04c7eae4427d617f4c6.png',
	},
};
   // Canal.send({embed: embed}});
msg.channel.send({ embed: embed});
  }
  //PARAIMAGENESAVISOSETC
  
  //IMAGENES RANDOM
  
    if (msg.content.includes("bot")){
      //cambien los links de las imagenes subidas en assets o desde google 
    var Imagenes= ["https://cdn.glitch.com/77219a2d-0cb0-45b0-983c-6986a93ba334%2F31277661.jpg?v=1590221947626","https://cdn.glitch.com/77219a2d-0cb0-45b0-983c-6986a93ba334%2Fdescarga%20(1).jpg?v=1590707504557","https://cdn.glitch.com/77219a2d-0cb0-45b0-983c-6986a93ba334%2Fdescarga%20(2).jpg?v=1590707552691"];
  var Canal = client.channels.find( channel => channel.id === "IDELCANAL" );
        var aleatorio = Math.floor(Math.random() * Imagenes.length);
const embed = {
  	color: 0x0099ff,
	image: {
		url: Imagenes[aleatorio],
	},
};
          //Canal.send({embed: embed})
msg.channel.send({ embed: embed});
  }
    //IMAGENES RANDOM

});
//IMAGENES RANDOM
    //INGRESAR EN TERMINAL//
//npm install -save cheerio
//npm install --save request
//INGRESAR EN TERMINAL//
  const cheerio = require('cheerio');

const request = require('request');

client.on('message', message => {
  const prefix = '';//siqueremosunprefijo
  if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

 if (command === 'show')//comando antes de enviar 
 {
	if (!args.length) {
		return message.channel.send(`No agregaste una imagen, ${message.author}!`);
	}
   var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    }

    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
  
 
        $ = cheerio.load(responseBody); 
 

        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
        console.log(urls);

        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
});
 }});
    //IMAGENES RANDOM
  
  
  
//REGRESAR MENSAJES
client.on('message', message => {
  const prefix = '<';
      var Canal = client.channels.find(
        channel => channel.id === "IDELCANAL"
      );
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

 if (command === 'regresar')//comando para regresar mensajes
 {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

   Canal.send(`${args}`);

	//message.channel.send(`${args}`);
}
});
//REGRESAR MENSAJES

  

client.on("message", msg => {
  const prefix="<";
  if(msg.content.startsWith(prefix + 'ayuda')){
    msg.channel.send('**COMANDOS DESERTIC**\n```\n'+
                        '-> '+prefix+'ping           ::REGRESA mensajes pong \n'+
                        '-> '+prefix+'hola           :: Regresa hola \n```\n\n');
    
  }
});



    // PARABORRAR
client.on("message", msg => {
  if (msg.content.startsWith("!clean")) {
    async function clear() {
      try {
        await msg.delete();
        const fetched = await msg.channel.fetchMessages({ limit: 99 });//cambia el numero para el numero de mensajes que quieras borrar
        msg.channel.bulkDelete(fetched);
        console.log("Messages deleted");
      } catch (e) {
        console.log(e);
      }
    }
    clear();
  }
  
  if (msg.content.startsWith("!cinco")) {
    async function clear() {
      try {
        await msg.delete();
        const fetched = await msg.channel.fetchMessages({ limit: 5 });
        msg.channel.bulkDelete(fetched);
        console.log("Messages deleted");
      } catch (e) {
        console.log(e);
      }
    }
    clear();
  }
  if (msg.content.startsWith("!diez")) {
    async function clear() {
      try {
        await msg.delete();
        const fetched = await msg.channel.fetchMessages({ limit: 10 });
        msg.channel.bulkDelete(fetched);
        console.log("Messages deleted");
      } catch (e) {
        console.log(e);
      }
    }
    clear();
  }
  // PARABORRAR
});
  
