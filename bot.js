const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util,MessageEmbed,args } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const mongoose = require('mongoose');
const tags = require('common-tags')
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    ${files.length} komut yüklenecek.
‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//BOT SES
client.on("ready", () => {
  let sesegir = ayarlar.botses
  client.channels.cache.get(sesegir).join();
  }); 
//------------------------------------------------------------------------------------------------------------\\



client.on("message", message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "-tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "a!tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "a.tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "a-tag") 
    return message.channel.send(`⍫`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".tag") 
    return message.channel.send(`⍫`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "sa") 
    return message.channel.send(`${message.author}, Aleyküm Selam Hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selam") 
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "merhaba") 
    return message.channel.send(`${message.author}, Merhaba hoşgeldin.`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "cynodia") 
    return message.channel.send(`${message.author}, Benim Sahibim Kral Adamdır ;)`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "cynodiam") 
    return message.channel.send(`${message.author}, Benim Sahibim Bir gülüşü Var Kelebek Görse Ömrü Uzar. :heart:`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "slm") 
    return message.channel.send(`${message.author}, Selam hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "sunucu sahibi kim") 
    return message.channel.send(`${message.author}, Bütün Yetkililerin.`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "Selamın Aleyküm") 
    return message.channel.send(`${message.author}, Aleyküm Selam Hoşgeldin.`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "Selamın aleyküm") 
    return message.channel.send(`${message.author}, Aleyküm Selam Hoşgeldin.`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "selamın aleykum") 
    return message.channel.send(`${message.author}, Aleyküm Selam Hoşgeldin.`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "Selamın Aleyküm") 
    return message.channel.send(`${message.author}, Aleyküm Selam Hoşgeldin.`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "sunucu sahibi kim") 
    return message.channel.send(`${message.author}, Bütün Yetkililerin.`)
});
client.on("message", message => {
    if(message.content.toLowerCase() == "ryardım") 
    return message.channel.send(`${message.author}, 
                                    (REGİSTER KAYIT KOMUTLARI)
             ${prefix}**erkek** @kullanıcı {İsim} {Yaş} =**Erkek Üye Olarak Kayıt Eder.** <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**e**  @kullanıcı {İsim} {Yaş} =**Erkek Üye Olarak Kayıt Eder.**    <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**kadın** @kullancı {İsim} {Yaş} =**Kadın Üye Olarak Kayıt Eder.**  <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**k**   @kullanıcı {İsim} {Yaş} =**Kadın Üye Olarak Kayıt Eder.**   <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**tage** @kullanıcıid {İsim} {Yaş} =**Taglı Erkek Üye Olarak Kayıt Eder.**<a:incident_bordogl:814019456627245056> İnc
             ${prefix}**te** @kullanıcı {İsim} {Yaş} =**Taglı Erkek Üye Olarak Kayıt Eder.** <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**tagk** @kullanıcı {İsim} {Yaş} =**Taglı Kadın Üye Olarak Kayıt Eder.** <a:incident_bordogl:814019456627245056>İnc
             ${prefix}**tk** @kullanıcı {İsim} {Yaş} =**Taglı Kadın Üye Olarak Kayıt Eder.** <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**kayıtlarım** =**Toplamda Registerde Kaç Üye Kayıt Ettiğinizi Gösterir.** <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**topkayıt** =**En Çok Kayıt Eden Register Görevlilerin İlk 15'lisi.** <a:incident_bordogl:814019456627245056> İnc
             ${prefix}**say** =**Sunucu Toplamı/Sunucu Taglı Üyesi  Booster Sayısı  Sesteki Üye Sayısı.** <a:incident_bordogl:814019456627245056> İnc`) .then(x => x.delete({timeout: 15000}))
});
client.on("message", message => {
    if(message.content.toLowerCase() == "sunucu kimin") 
    return message.channel.send(`${message.author}, Bütün Yetkililerin.`)
});

    client.on("message", message => {
    if(message.content.toLowerCase() == "sunucu sahibi") 
    return message.channel.send(`${message.author}, Bütün Yetkililerin.`)
});
//------------------------------------------------------------------------------------------------------------------------------------------\\
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


//--------------------------------------------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let rol = member.guild.roles.cache.find(r => r.name === "jail");
let cezalımı = db.fetch(`cezali_${member.guild.id + member.id}`)
let sürejail = db.fetch(`süreJail_${member.id + member.guild.id}`)
if (!cezalımı) return;
if (cezalımı == "cezali") {
member.roles.add(ayarlar.JailCezalıRol)
 
member.send("Cezalıyken Sunucudan Çıktığın için Yeniden Cezalı Rolü Verildi!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`cezali_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Cezan açıldı.`)
    member.roles.remove('795355950470004756');
  }, ms(sürejail));
}
})

//--------------------------------------------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let mute = member.guild.roles.cache.find(r => r.name === "Muted");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.roles.add(ayarlar.MuteliRol)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.roles.remove('muteli rol id');
  }, ms(süre));
}
})

//--------------------------------------------------------------------------------------\\


client.on('guildMemberAdd', async member => {
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.cache.get(data2)
if(!rol) return;
let kişi = member.guild.members.cache.get(member.id)
kişi.roles.add(rol.id);
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`)
  const wasted = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL({ dynamic : true }))
  .setColor(`#0x800d0d`)
  .setDescription(`Dostum hadi ama !!! Jaildan Kaçamazsın ikimizde birbirimizi kandırmayalım...!`)
  .setTimestamp()
    member.send(wasted)
} 
  
  
})

//--------------------------------------------------------------------------------------\\

client.on("message", async msg => {
  
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Ne Kadar Ayıp Ne Kadar Ayıp ⍫・aperira-rules Oku Bakalım.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq","amguard","seksüel","sekssüel"];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.channel.send(new Discord.MessageEmbed().setDescription(`${oldMessage.author} Ne Kadar Ayıp Ne Kadar Ayıp ⍫・aperira-rules Oku Bakalım.`).setColor('0x800d0d').setAuthor(oldMessage.member.displayName, oldMessage.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});


//--------------------------------------------------------------------------------------\\


//--------------------------------------------------------------------------------------\\

client.on("message", msg => {
 if(!db.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net",".gg", "www.", "https", "http", ".org", ".com.tr","net","discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Reklam Yapacaksan Seni Yavaş Yavaş Kulübene Alalım Lütfen.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });
