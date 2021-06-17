module.exports = {
    name: "foto",
    category: "Andrea",
    description: "Foto random de Andrea",
    usage: "[<numFoto>]",
    run: async (client, msg, args) => {
        let opc;
        let texto = msg.toString().split(" ");
        let titles = [
          "A de Agárrame que me caigo!",
          "A de AHHHH! bájenle el nivel de wapura *~*",
          "Título? el contenido multimedia habla por si solo",
          "Do you wanna cortar fresas?",
          "A de Aguacate",
          "A",
          "A de Adelaida, Barbijo, Emperador, Juanito",
          "A de Are you wanna be my girl?"
        ]
        let urls = [
          "https://www.youtube.com/watch?v=E8WZI7t9nu8",
          "https://www.youtube.com/watch?v=2mtsIInDebM",
          "https://www.youtube.com/watch?v=OzZpJtsBLMs",
          "https://www.youtube.com/watch?v=4KI0MpuKLOo",
          "https://www.youtube.com/watch?v=2di5sU3oigU",
          "https://www.youtube.com/watch?v=cZDVQ4iZ0-I",
          "https://www.youtube.com/watch?v=5wA4s4kayyg",
          "https://www.youtube.com/watch?v=VaHFvFTeXTE"
        ]
        let photos = [
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/7_nsm4m8.png",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/8_favxbh.png",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/5_vyjivr.png",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/1_aia3wo.png",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/3_rhk1yb.png",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/2_bre0tx.png",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/6_c3ml7t.jpg",
          "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616442078/MimiBot/4_cxdyyr.png"
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
          title: titles[opc],
          url: urls[opc],
          //description: 'Some description here',
          /*thumbnail: {
            url: `${root}/Andrea/osito.png`,
          },*/
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