const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
module.exports.run = async (client, message, args) => {


    let member = message.mentions.members.first();

message.guild.members.cache.forEach(member => {
    if(member.roles.cache.has(ayarlar.yetkili)) 
    if(!member.bot) {
    if(!member.voice.channellID) {
    member.send(`Selam Incident Yetkilisi Şuanlık Seste Değilsin Ricam Alone Veya Sleep Roomlarda Afk Bırakman Belli Bir Süre Sonra Yetkin Gidebilir?`) }
    }})
message.channel.send(new Discord.MessageEmbed().setDescription(`Seste olmayan yetkililere başarılı şekilde DM atıldı`))

};

module.exports.conf = {
  aliases: ["sesdm"]
};

module.exports.help = {
  name: "seste-olmayan-yetkililer"
};