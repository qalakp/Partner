const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'tuxwa wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`ڕیکلام کرا تۆش ڕیکلام بکەhttps://discord.gg/6HaDAv6S3B`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("955867903893315640").send(
`> <:ARBELE_UPUP:791411050238836766> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلام بنێرە بۆ من`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("OTY2NzE0NzYyMzkyMTMzNjUy.YmFxSA.ndrKFiTLWdKOHDnKkd4jizYslDg");//تۆکین لێرە دانێ
