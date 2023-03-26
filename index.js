const Discord = require("discord.js");
const client = new Discord.Client({
    intents:[
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
    ]
});
let totalBot = 0;
let cartaBot = [];
let cartaUser = [];
var cBlackjackJuego = false;
var actividadorEnlace = false;
var cComandos = true;
var cPing = true;
var cYoutube = true;
var cTwitch = true;
var cTiempo = true;
var cEnlace = true;
var cEnlace = true;
var cEnlace = true;
var cCancion = true;
var cChistes = true;
var cBlackjack = false;
var cBlackjackBot = false;
var cCambios = true;

client.on("ready", () => {
  console.log("Estoy listo!")
});
//Comandos:
client.on("message", (message) => {
  if (message.content.startsWith("ping") && cPing == true) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith("!comandos") && cComandos == true) {
    message.channel.send(`Comandos: ping, !youtube, !twitch, !comandos, !tiempo, !enlace, !cancion, !chistes`);
  }
  if (message.content.startsWith("!youtube" && cYoutube == true)) {
    message.channel.send(`https://www.youtube.com/channel/UCWsMIzdAxpTfVt5fr223OPQ`);
  }
  if (message.content.startsWith("!twitch") && cTwitch == true) {
    message.channel.send(`https://www.twitch.tv/mostochos`);
  }
  if (message.content.startsWith("!tiempo" && cTiempo == true)) {
    var today = new Date();
    var tiempo = today.toLocaleTimeString();
    message.channel.send(`Tiempo actual es: ${tiempo} (Hora centro de México)`);
  }
  if(message.content.startsWith("Que bendicion") || message.content.startsWith("que bendicion")){
    message.react('🛐');
    message.reply('Te rezo flaca 🛐');
  }
  if(message.content.startsWith("!enlace") && cEnlace == true){
    actividadorEnlace = true;
    message.channel.send(`Escribe el nombre del streamer para generar el enlace (ejemplo: /mostochos):`);
    client.on("message", (message) => {
      if (message.content.startsWith("/") && actividadorEnlace == true) {
        person = message.content;
        if(person == "/slimmerferret_26"){
          message.channel.send(`https://www.twitch.tv${person}`);
          message.channel.send(`No habla el puto 🏳️‍🌈`);
        }else if(person == "/mostochos"){
          message.channel.send(`https://www.twitch.tv${person}`);
          message.channel.send(`No mames, revivio ese wey? 🤔`);
        }else if(person == "/crelisy"){
          message.channel.send(`https://www.twitch.tv${person}`);
          var mensajeCrisis = Math.floor(Math.random()*2)+1;
          if(mensajeCrisis == 1){
            message.channel.send(`PC valorado en $2,000 dolares, contenido Free-$30 pesos mexicanos`);
          }else if(mensajeCrisis == 2){
            message.channel.send(`Encontramos a mister rtx 😎`);
          }
        }else{
          message.channel.send(`https://www.twitch.tv${person}`);
        }
        actividadorEnlace = false;
      }
    });
  }
  if(message.content.startsWith("/") && actividadorEnlace == false){
    message.channel.send(`Este comando unicamente se activa llamando el comando enlace `);
  }
  if(message.content.startsWith("pero si es rtx?") || message.content.startsWith("pero si es rtx") || message.content.startsWith("Pero si es rtx?") || message.content.startsWith("Pero si es rtx")){
    message.reply("awebo a 120 fps pa 🥵")  
  }
  if(message.content.startsWith("!cancion") && cCancion == true){
    for(var i = 1; i<=4; i++){
      message.channel.send(""+i);
    }
    message.channel.send("pi piri pipiri");
    i=1; 
  }
  if(message.content.startsWith("amen") || message.content.startsWith("Amen") || message.content.startsWith("amén") || message.content.startsWith("Amén")){
    message.channel.send(`🙏🥹`);
  }
  //Chistes demasiados....demasiados...graciosoooos
  if(message.content.startsWith("!chistes" && cChistes == true)){
    numero =  Math.floor(Math.random() * 10) + 1;
    message.channel.send('Lanzando chiste...')
    if(numero==1){
      message.channel.send("Un niño llega al parque, se le acerca un amigo y le dice al oído:");
      message.channel.send("— ¡Tienes puesto un zapato marrón y otro negro!");
      message.channel.send("Y el niño le responde:");
      message.channel.send("— Y eso no es nada, en mi casa tengo otro par igualito.");
    }else if(numero==2){
      message.channel.send("Dos amigos van caminando por la calle y uno le pregunta al otro:");
      message.channel.send("— ¿Qué hora es?");
      message.channel.send("— Las doce.");
      message.channel.send("— ¡Uy, qué tarde!");
      message.channel.send("— Me hubieses preguntado antes.");
    }else if(numero==3){
      message.channel.send("— ¿Qué coche usa Papá Noel?");
      message.channel.send("— Un renol.");
    }else if(numero==4){
      message.channel.send("— ¿Qué le dice una iguana a su hermana gemela?");
      message.channel.send("— Somos iguanitas.");
    }else if(numero==5){
      message.channel.send("— ¿Qué le dijo un mosquito a un grupo de gente?");
      message.channel.send("—No aplaudan que todavía falta para mi cumpleaños.");
    }else if(numero==6){
      message.channel.send("— ¿Cuál es la fruta más divertida?");
      message.channel.send("— La naranja ja, ja, ja.");
    }else if(numero==7){
      message.channel.send("— ¿Cómo se dice ‘espejo’ en chino?");
      message.channel.send("— Aitoiyo.");
    }else if(numero==8){
      message.channel.send("— ¿Por qué la computadora fue al médico?");
      message.channel.send("— Porque tenía un virus.");
    }else if(numero==9){
      message.channel.send("Una niña le dice a su amiga:");
      message.channel.send("— ¿Te gustan mis gafas nuevas?");
      message.channel.send("— La verdad que no mucho.");
      message.channel.send("— Son progresivas.");
      message.channel.send("— ¡Ah bueno! Entonces ya me irán gustando.");
    }else if(numero==10){
      message.channel.send("— Jaimito, ¿cuál es la montaña más limpia?");
      message.channel.send("— El volcán.");
      message.channel.send("— ¿El volcán? ¿Por qué?");
      message.channel.send("— Claro. Porque primero echa cenizas y, después, lava.");
    }
  }
  // Autocompletados:
  if(message.content.startsWith("enlace")){
    message.channel.send(`Autocompletando...\n`);
    message.channel.send(`!enlace\n`);
  }
  if(message.content.startsWith("comandos")){
    message.channel.send(`Autocompletando...\n`);
    message.channel.send(`!comandos\n`);
  }
  //Blackjack:
  if(message.content.startsWith('!blackjack') || message.content.startsWith('!Blackjack')){
    desactivarComandos(false);
    cBlackjack = true;
    message.reply(`Bien, quieres retarme 😈\n`);
    botB = 0;
    userB = 0;
    message.channel.send(`Comandos activos (Te recuerdos que cuando activas blackjack los demas comandos estaran inactivos):
    \n-!jugar: Aqui el bot te dara aleatorio dos cartas y al igual el tendra dos cartas donde el unicamamente te mostrara una y la otra estara oculta
    \n-!pedir: Este comando le dices al bot que te de otra carta
    \n-!plantar: Aqui le indicas al bot que terminaste tu turno
    \n!salir: Aqui te sales del juego y se vuelven activar todos los comandos`);
  }
  
  if(message.content.startsWith('!jugar') && cBlackjack == true){
    cBlackjackJuego = true;
    nombreB = message.author.username;
    for (var i = 1; i<=2; i++){
      cartaBot[i] = Math.floor(Math.random()*11)+1
      cartaUser[i] = Math.floor(Math.random()*11)+1;
    }
    console.log(cartaBot);
    console.log(cartaUser);
    totalUser = cartaUser[1]+cartaUser[2];
    message.channel.send(`Repartiendo cartas...\n\nCarta bot:\n[${cartaBot[1]}] [?] = ${cartaBot[1]}\n\nCarta ${nombreB}:\n[${cartaUser[1]}] [${cartaUser[2]}] = ${totalUser}`);
    if(totalUser == 21){
      message.channel.send(`¡BLACKJACK!, Ganaste muchas felicidades`);
      totalBot = cartaBot[1]+cartaBot[2];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
      cBlackjackJuego = false;
      cartaBot = [];
      cartaUser = [];
    }else if(totalUser >=22){
      totalBot = cartaBot[1]+cartaBot[2];
      message.channel.send(`¡${nombreB} PERDISTE!`);
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
      cBlackjackJuego = false;
      cartaBot = [];
      cartaUser = [];
    }
  }
  if(message.content.startsWith('!pedir') && cBlackjackJuego == true){
    if(cartaUser.length == 3){
      cartaUser[3] = Math.floor(Math.random()*11)+1;
      totalUser =  totalUser + cartaUser[3];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [?] = ${cartaBot[1]}\n\nCarta ${nombreB}:\n[${cartaUser[1]}] [${cartaUser[2]}] [${cartaUser[3]}] = ${totalUser}`);
      if(totalUser >= 22){
        cBlackjackJuego = false;
        totalBot = cartaBot[1]+cartaBot[2];
        message.channel.send(`¡${nombreB} PERDISTE!`);
        message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
        message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
        cartaBot = [];
        cartaUser = [];
      }
    }else if(cartaUser.length == 4){
      cartaUser[4] = Math.floor(Math.random()*11)+1;
      totalUser =  totalUser + cartaUser[4];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [?] = ${cartaBot[1]}\n\nCarta ${nombreB}:\n[${cartaUser[1]}] [${cartaUser[2]}] [${cartaUser[3]}] [${cartaUser[4]}] = ${totalUser}`);
      if(totalUser >= 22){
        cBlackjackJuego = false;
        totalBot = cartaBot[1]+cartaBot[2];
        message.channel.send(`¡${nombreB} PERDISTE!`);
        message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
        message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
        cartaBot = [];
        cartaUser = [];
      }
    }else if(cartaUser.length == 5){
      cartaUser[5] = Math.floor(Math.random()*11)+1;
      totalUser =  totalUser + cartaUser[5];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [?] = ${cartaBot[1]}\n\nCarta ${nombreB}:\n[${cartaUser[1]}] [${cartaUser[2]}] [${cartaUser[3]}] [${cartaUser[4]}] [${cartaUser[5]}] = ${totalUser}`);
      if(totalUser >= 22){
        cBlackjackJuego = false;
        totalBot = cartaBot[1]+cartaBot[2];
        message.channel.send(`¡${nombreB} PERDISTE!`);
        message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
        message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
        cartaBot = [];
        cartaUser = [];
      }
    }else if(cartaUser.length == 6){
      cartaUser[6] = Math.floor(Math.random()*11)+1;
      totalUser =  totalUser + cartaUser[6];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [?] = ${cartaBot[1]}\n\nCarta ${nombreB}:\n[${cartaUser[1]}] [${cartaUser[2]}] [${cartaUser[3]}] [${cartaUser[4]}] [${cartaUser[4]}] [${cartaUser[5]}] [${cartaUser[6]}] = ${totalUser}`);
      if(totalUser >= 22){
        cBlackjackJuego = false;
        totalBot = cartaBot[1]+cartaBot[2];
        message.channel.send(`¡${nombreB} PERDISTE!`);
        message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
        message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
        cartaBot = [];
        cartaUser = []; 
      }
    }
  }
  
  if(message.content.startsWith(`!plantar`) && cBlackjackJuego == true){
    cBlackjackJuego = false;
    cBlackjackBot = true;
    totalBot = cartaBot[1]+cartaBot[2];
    message.channel.send(`Te plantaste...\n\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] = ${totalBot}`);
    if(totalBot == 17 || totalBot == 18 || totalBot == 19 || totalBot == 20 || totalBot == 21){
      if(totalUser > totalBot){
        message.channel.send(`¡Ganaste!, muchas felicidades`);
        cBlackjackJuego = false;
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }else if(totalUser == totalBot){
        message.channel.send(`¡Empate!, Tenemos el mismo IQ 😎`);
        cBlackjackJuego = false;
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }else if(totalUser < totalBot){
        message.channel.send(`¡${nombreB} PERDISTE!`);
        message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
        cBlackjackJuego = false;
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }
    }else if(totalBot < 17){
      message.channel.send(`!pedir`);
    }
  }

  if(message.content.startsWith(`!pedir`) && cBlackjackBot == true){
    if(cartaBot.length == 3){
      cartaBot[3] = Math.floor(Math.random()*11)+1;
      totalBot =  totalBot + cartaBot[3];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] [${cartaBot[3]}] = ${totalBot}`);
      if(totalBot < 17){
        message.channel.send(`!pedir`);
      }
      if(totalBot == 17 || totalBot == 18 || totalBot == 19 || totalBot == 20 || totalBot == 21){
        if(totalUser > totalBot){
          message.channel.send(`¡Ganaste!, muchas felicidades`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser == totalBot){
          message.channel.send(`¡Empate!, Tenemos el mismo IQ 😎`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser < totalBot){
          message.channel.send(`¡${nombreB} PERDISTE!`);
          message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }
      }
      if(totalBot >= 22){
        cBlackjackJuego = false;
        message.channel.send(`¡Ganaste!, muchas felicidades`);
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }
    }else if(cartaBot.length == 4){
      cartaBot[4] = Math.floor(Math.random()*11)+1;
      totalBot =  totalBot + cartaBot[4];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] [${cartaBot[3]}] [${cartaBot[4]}] = ${totalBot}`);
      if(totalBot < 17){
        message.channel.send(`!pedir`);
      }
      if(totalBot == 17 || totalBot == 18 || totalBot == 19 || totalBot == 20 || totalBot == 21){
        if(totalUser > totalBot){
          message.channel.send(`¡Ganaste!, muchas felicidades`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser == totalBot){
          message.channel.send(`¡Empate!, Tenemos el mismo IQ 😎`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser < totalBot){
          message.channel.send(`¡${nombreB} PERDISTE!`);
          message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }
      }
      if(totalBot >= 22){
        cBlackjackJuego = false;
        message.channel.send(`¡Ganaste!, muchas felicidades`);
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }
    }else if(cartaBot.length == 5){
      cartaBot[5] = Math.floor(Math.random()*11)+1;
      totalBot =  totalBot + cartaBot[5];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] [${cartaBot[3]}] [${cartaBot[4]}] [${cartaBot[5]}] = ${totalBot}`);
      if(totalBot < 17){
        message.channel.send(`!pedir`);
      }
      if(totalBot == 17 || totalBot == 18 || totalBot == 19 || totalBot == 20 || totalBot == 21){
        if(totalUser > totalBot){
          message.channel.send(`¡Ganaste!, muchas felicidades`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser == totalBot){
          message.channel.send(`¡Empate!, Tenemos el mismo IQ 😎`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser < totalBot){
          message.channel.send(`¡${nombreB} PERDISTE!`);
          message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }
      }
      if(totalBot >= 22){
        cBlackjackJuego = false;
        message.channel.send(`¡Ganaste!, muchas felicidades`);
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }
    }else if(cartaBot.length == 6){
      cartaBot[6] = Math.floor(Math.random()*11)+1;
      totalBot =  totalBot + cartaBot[6];
      message.channel.send(`\nCarta bot:\n[${cartaBot[1]}] [${cartaBot[2]}] [${cartaBot[3]}] [${cartaBot[4]}] [${cartaBot[5]}] [${cartaBot[6]}] = ${totalBot}`);
      if(totalBot < 17){
        message.channel.send(`!pedir`);
      }
      if(totalBot == 17 || totalBot == 18 || totalBot == 19 || totalBot == 20 || totalBot == 21){
        if(totalUser > totalBot){
          message.channel.send(`¡Ganaste!, muchas felicidades`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser == totalBot){
          message.channel.send(`¡Empate!, Tenemos el mismo IQ 😎`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }else if(totalUser < totalBot){
          message.channel.send(`¡${nombreB} PERDISTE!`);
          message.channel.send(`Gana el dealer Bot\nPara salir del juego escribe el comando !salir, si quieres echarte otra partida escribe !jugar`);
          cBlackjackJuego = false;
          cBlackjackBot = false;
          cartaBot = [];
          cartaUser = []; 
        }
      }
      if(totalBot >= 22){
        cBlackjackJuego = false;
        message.channel.send(`¡Ganaste!, muchas felicidades`);
        cBlackjackBot = false;
        cartaBot = [];
        cartaUser = []; 
      }
    }
  }

  if(message.content.startsWith('!salir') && cBlackjack == true){
    message.channel.send('Fin del juego');
    cBlackjack = false;
    cBlackjackBot = false;
    desactivarComandos(true);
  }
  // Fin del Blackjack

  if(message.content.startsWith('!cambios') && cCambios == true){
    message.channel.send(`Este actualizacion de cambios sobre mi son:\n
    - Se añade el comando !blackjack y con ello jugaras las partidas que deseas conmigo.\n
    - Se añade autocompletado en los comandos, solo funciona en "enlace" y "comandos".\n
    - Se añade el comando !chistes.`);
  }
  if(message.content.startsWith('Mostocho bot') || message.content.startsWith('mostocho bot')){
    message.channel.send('Perate we, estoy comiendo lo que me da de comer Mostochos');
  }
  if(message.content.startsWith('Pito') || message.content.startsWith('pito')){
    message.channel.send('No obstante, Me agarras, chupas, tragas, te atragantas, jalas, masturbas... bueno un ¿Blackjack?');
  }
  if(message.content.startsWith('Ojo') || message.content.startsWith('OJO') || message.content.startsWith('ojo')){
    message.react('👀');
  }
  if(message.content.startsWith('rolon') || message.content.startsWith('Rolon')){
    messagePerson = message.member.nickname;
    message.channel.send(`Pero de mota o... ¿De musica?`);
  }
  if(message.content.startsWith('Messi') || message.content.startsWith('messi')){
    message.channel.send(`¡Messi!`);
  }

});

client.login("MTA2NTc0NTYxMDU1NDIyNDcxMA.Gw1xoV.scvsg_q3YvA7-AnElMUUOuyL203O5DFeHqzIww");

function desactivarComandos(boleano){
  if(boleano == true){
    cComandos = true;
    cPing = true;
    cYoutube = true;
    cTwitch = true;
    cTiempo = true;
    cEnlace = true;
    cEnlace = true;
    cCancion = true;
    cChistes = true;
    cCambios = true;
  }else if(boleano == false){
    cComandos = false;
    cPing = false;
    cYoutube = false;
    cTwitch = false;
    cTiempo = false;
    cEnlace = false;
    cEnlace = false;
    cCancion = false;
    cChistes = false;
    cCambios = false;
  }
}