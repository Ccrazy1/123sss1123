const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["813855256190255125"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "786545188897161286"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0numara:814568287957418056>`,
            '1': `<a:1numara:814568299920752650>`,
            '2': `<a:2numara:814568310867755029>`,
            '3': `<a:3numara:814568320866975784>`,
            '4': `<a:4numara:814568332241403954>`,
            '5': `<a:5numara:814568341745696809>`,
            '6': `<a:6numara:814568351312379907>`,
            '7': `<a:7numara:814568358996344832>`,
            '8': `<a:8numara:814568367070380033>`,
'9': `<a:9numara:814568376109105202>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, ".sessay").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:0numara:814568287957418056>`,
            '1': `<a:1numara:814568299920752650>`,
            '2': `<a:2numara:814568310867755029>`,
            '3': `<a:3numara:814568320866975784>`,
            '4': `<a:4numara:814568332241403954>`,
            '5': `<a:5numara:814568341745696809>`,
            '6': `<a:6numara:814568351312379907>`,
            '7': `<a:7numara:814568358996344832>`,
            '8': `<a:8numara:814568367070380033>`,
'9': `<a:9numara:814568376109105202>`}[d];})}

var taglılar = 0;
let tag = "⍫";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "⍫")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, ".esaytag").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:0numara:814568287957418056>`,
            '1': `<a:1numara:814568299920752650>`,
            '2': `<a:2numara:814568310867755029>`,
            '3': `<a:3numara:814568320866975784>`,
            '4': `<a:4numara:814568332241403954>`,
            '5': `<a:5numara:814568341745696809>`,
            '6': `<a:6numara:814568351312379907>`,
            '7': `<a:7numara:814568358996344832>`,
            '8': `<a:8numara:814568367070380033>`,
'9': `<a:9numara:814568376109105202>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
            '0': `<a:0numara:814568287957418056>`,
            '1': `<a:1numara:814568299920752650>`,
            '2': `<a:2numara:814568310867755029>`,
            '3': `<a:3numara:814568320866975784>`,
            '4': `<a:4numara:814568332241403954>`,
            '5': `<a:5numara:814568341745696809>`,
            '6': `<a:6numara:814568351312379907>`,
            '7': `<a:7numara:814568358996344832>`,
            '8': `<a:8numara:814568367070380033>`,
'9': `<a:9numara:814568376109105202>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("788203614190436372").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
            '0': `<a:0numara:814568287957418056>`,
            '1': `<a:1numara:814568299920752650>`,
            '2': `<a:2numara:814568310867755029>`,
            '3': `<a:3numara:814568320866975784>`,
            '4': `<a:4numara:814568332241403954>`,
            '5': `<a:5numara:814568341745696809>`,
            '6': `<a:6numara:814568351312379907>`,
            '7': `<a:7numara:814568358996344832>`,
            '8': `<a:8numara:814568367070380033>`,
'9': `<a:9numara:814568376109105202>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["etotal",'etoplam','esay','einfo'],
  permLevel: 0
};
exports.help = {
  name: 'esay'
}