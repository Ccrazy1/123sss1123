const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const ccrazy = new Discord.MessageEmbed()

             .setColor('#fff000')
             .addField(`**Incident Mod Komutlar**`, `
             ${prefix}**jail**  @kullanıcı {Süre} {Sebeb} <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**unjail**  @kullancı {Sebeb}   <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**yargı**   @kullanıcı {Sebeb}    <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**unban**   @kullanıcıid  <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**sicil**   @kullanıcı <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**tagsay**  <a:incident_yaprak:814017328656285727>İnc
             ${prefix}**sil**     {Miktar} <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**uyarı**   @kullanıcı {Süre} {Sebeb} <a:incident_yaprak:814017328656285727>İnc
             ${prefix}**afk**     {Sebeb} <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**şikayet** {Sebeb}  <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**banlbilgi**{@kullanıcı} <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**şikayet**  {Sebeb} <a:incident_yaprak:814017328656285727> İnc
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
             .setImage("https://media.discordapp.net/attachments/785966740802109460/799696026968784939/standard_6.gif?width=374&height=48")

        return message.channel.send(ccrazy);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'yardim'
}