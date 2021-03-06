const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");



exports.run = function(client, message, args) {
  
    let önerilog = ayarlar.önerilog
    let prefix = ayarlar.prefix
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(new Discord.MessageEmbed().setDescription(`> **__Hatalı Kullanım...__**\n\n > **__Doğru Kullanım__** \n **\`${prefix}öneri <öneriniz>\`**`));
  
const ace = new Discord.MessageEmbed()
.setDescription(`<@${message.author.id}>\n\n <a:mavialevinc:796024053856993320> Öneriniz / İsteğiniz Bildirildi! En Kısa Sürede Geri Dönüş Yapılıcakatır.\n\n Anlayışınız İçin Teşekkürler **Incident** Ailesi <a:mavialevinc:796024053856993320> `  )
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(ace)

const acee = new Discord.MessageEmbed()
.setDescription(`<@${message.author.id}> adlı kullanıcının **__Öneri__**:`)
.addField(`**Kulanıcı Bilgileri**`, `> ** <a:mavialevinc:796024053856993320> __Kullanıcı ID:__  ** **\`${message.author.id}\`**\n> ** <a:kelebekinc2:795625931292016682> __Kullanıcı Adı:__** **\`${message.author.username}\`**\n> ** <a:yyinc:795658737234739230> __Kullanıcı Tagı:__** **\`${message.author.discriminator}\`**`)
.addField("Kullanıcı Öneri", type)
.setThumbnail(message.author.avatarURL)
 client.channels.cache.get(önerilog).send(acee);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["öneri","önerin"],
  permLevel: 0 
};

exports.help = {
  name: 'önerim',
  description: 'Önerinizde de bulunursunuz..',
  usage: 'öneri <öneri>'
}; 