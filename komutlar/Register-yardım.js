const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const embed2 = new Discord.MessageEmbed()

             .setColor('#fff000')
             .addField(`**Incident Mod Komutlar**`, `
             ${prefix}**erkek** @kullanıcı {İsim} {Yaş} Erkek Üye Olarak Kayıt Eder. <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**e**  @kullanıcı {İsim} {Yaş} Erkek Üye Olarak Kayıt Eder.    <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**kadın** @kullancı {İsim} {Yaş} Kadın Üye Olarak Kayıt Eder.  <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**k**   @kullanıcı {İsim} {Yaş} Kadın Üye Olarak Kayıt Eder.  <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**tage** @kullanıcıid {İsim} {Yaş} Taglı Erkek Üye Olarak Kayıt Eder.<a:incident_yaprak:814017328656285727> İnc
             ${prefix}**te** @kullanıcı {İsim} {Yaş} Taglı Erkek Üye Olarak Kayıt Eder. <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**tagk** @kullanıcı {İsim} {Yaş} Taglı Kadın Üye Olarak Kayıt Eder. <a:incident_yaprak:814017328656285727>İnc
             ${prefix}**tk** @kullanıcı {İsim} {Yaş} Taglı Kadın Üye Olarak Kayıt Eder. <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**kayıtlarım** Toplamda Registerde Kaç Üye Kayıt Ettiğinizi Gösterir. <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**topkayıt** En Çok Kayıt Eden Register Görevlilerin İlk 15'lisi. <a:incident_yaprak:814017328656285727> İnc
             ${prefix}**say** Sunucu Toplamı/Sunucu Taglı Üyesi  Booster Sayısı  Sesteki Üye Sayısı.<a:incident_yaprak:814017328656285727> İnc
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
             .setImage("https://media.discordapp.net/attachments/785966740802109460/799696026968784939/standard_6.gif?width=374&height=48")

        return message.channel.send(embed2);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['arda'],
	permLevel : 0
}
exports.help = {
	name : 'arda',
	description : 'Komut kategorilerini atar',
	usage : 'arda'
}