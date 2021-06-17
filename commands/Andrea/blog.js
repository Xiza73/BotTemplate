module.exports = {
    name: "blog",
    category: "Andrea",
    description: "Blogsito de Andrea",
    run: async (client, msg, args) => {
        const exampleEmbed = {
          color: "RANDOM",
          title: "Click to join!",
          url: "https://Andrea.xiza73.repl.co",
          //description: 'Some description here',
          /*thumbnail: {
            url: `${root}/Andrea/osito.png`,
          },*/
          image: {
            url: "https://res.cloudinary.com/dnbgxu47a/image/upload/v1616443165/MimiBot/WhatsApp_Image_2021-03-22_at_2.57.43_PM_cuxhsx.jpg",
          },
          timestamp: new Date()
        };

        msg.channel.send({ embed: exampleEmbed });
    }
}