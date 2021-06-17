module.exports = {
    name: "gif",
    category: "Andrea",
    description: "Gif random de Andrea",
    usage: "",
    run: async (client, msg, args) => {
        let opc;
        let texto = msg.toString().split(" ");
        let photos = [
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442429/MimiBot/ball2_fn9cul.gif",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442429/MimiBot/gatitosAX_h2iffp.gif",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442429/MimiBot/girasol_de_Andrea_pip88p.gif"          
        ]
        if(texto[1] === undefined){
          opc = random(0, photos.length - 1);
        }else{
          opc = parseInt(texto[1]) - 1;
          if(opc < 0) opc = 0;
          if(opc > photos.length - 1) opc = photos.length - 1;
        }
        const exampleEmbed = {
          color: "RANDOM",
          image: {
            url: `${photos[opc]}`,
          },
          timestamp: new Date()
        };

        msg.channel.send({ embed: exampleEmbed });
    }
}

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}