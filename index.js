const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

//Discord
const Discord = require('discord.js');


//EndDiscord

// import routes
const indexRoutes = require('./src/routes/index')

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))

//routes
app.use('/', indexRoutes);

//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})


/* DISCORD */
const { Client, Collection, MessageAttachment } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const client = new Client({
    disableEveryone: true
});
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

//require('dotenv').config()
config({
    path: "/.env"
});
let prefix = process.env.prefix;

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

try{
    client.on('ready', () => {
      console.log(`${client.user.tag} está redi`);
      presence();
    });
}catch(error){
  console.error(error);
}

client.on('message', async message => {
    //Control de comandos
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    //Estructura del comando
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
    
    if(cmd !== ""){
      action(cmd, message); //135
    }

});

client.login(process.env.token);

//FUNCIONES

function presence(){
    client.user.setPresence({
        status: "online",
        activity: {
            name: ">help",
            type: "PLAYING"
        }
    })
}

//MASTER
function action(comando, msg){

  //COMANDOS
  var comandos = {
    "hola" : function(){
      msg.channel.send(`Hola ${msg.member.user} 💕`);
    },
  };

  if (typeof comandos[comando] !== 'function') {
    return 'default';
  }


  return comandos[comando]();
}


function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}