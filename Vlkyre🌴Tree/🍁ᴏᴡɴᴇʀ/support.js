("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Vlkyre🖋️Utilities/ɴᴇᴄᴛᴏʀ`);
let os = require(`os`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let speed = require(`performance-now`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let vers = require(`../../package.json`);
let { performance } = require(`perf_hooks`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Vlkyre👒Hat/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Vlkyre🧭Compass/Group_Only");
let { formatp, runtime } = require(`../../Vlkyre🖋️Utilities/Human`);
let { Image_Button } = require("../../Vlkyre👒Hat/Image_Button");
let { Video_Button } = require("../../Vlkyre👒Hat/Video_Button");
let { Bot_Not_Admin } = require("../../Vlkyre🧭Compass/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Vlkyre🧭Compass/Sender_Not_Admin");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Vlkyre👒Hat/Caught");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.support = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
) => {
let used = process.memoryUsage();
let cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0
);
return cpu;
});
let cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
}
);
let timestamp = speed();
let latensi = speed() - timestamp;
let latest = `════════★ 𝐍𝐨𝐝𝐞𝐉𝐒 𝐌𝐞𝐦-𝐔𝐬𝐚𝐠𝐞:
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), ` `)}: ${formatp(
used[key]
)}`
)
.join(`\n`)}
════════★ ${
cpus[0]
? `𝐓𝐨𝐭𝐚𝐥 𝐂𝐏𝐔 𝐔𝐬𝐚𝐠𝐞
${cpus[0].model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + `*`).padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`
)
.join(`\n`)}
════════★ 𝐂𝐏𝐔 𝐂𝐨𝐫𝐞(𝐬) 𝐔𝐬𝐚𝐠𝐞 (_${cpus.length}_ 𝐂𝐨𝐫𝐞 𝐂𝐏𝐔)
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + `*`).padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`
)
.join(`\n`)}`
)
.join(`\n\n`)}`
: ``
}`.trim();
let ʀᴇꜱᴘᴏɴꜱᴇ1 = await ӄ𝖗𝖞ӄ𝖓𝖟.groupInviteCode("120363020792949649@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ2 = await ӄ𝖗𝖞ӄ𝖓𝖟.groupInviteCode("120363039223842047@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ3 = await ӄ𝖗𝖞ӄ𝖓𝖟.groupInviteCode("120363024871653603@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ4 = await ӄ𝖗𝖞ӄ𝖓𝖟.groupInviteCode("120363042762307739@g.us");
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/KrakinzLab.png",
`Ῠ  *ɴᴀᴍᴇ:* ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}

🕊️𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 140+ commands!
╔══『 🕊️𝐕𝐥𝐤𝐲𝐫𝐞🕊️ 』
║Ῠ *ᴘʀᴇꜰɪx:* ${prefix}
║Ῠ *ɢᴘᴀʏ:* +918436686758
║Ῠ *ᴜᴘɪ:* krakinzkon@oksbi
║Ῠ *ɢɪᴛʜᴜʙ:* https://github.com/kryknz
║Ῠ *ᴠʟᴋʏʀᴇ:* https://github.com/kryknz/vlkyre
║Ῠ *ᴡᴇʙꜱɪᴛᴇ:*  https://kryknz.github.io/Vlkyre
╚═══════╝


『 🐙𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬°🐙 』
Ῠ #Krakinz
Ῠ #KryKnz
Ῠ #Xitrex
Ῠ #Liamsu
Ῠ #Riato
Ῠ many more....

『 📡𝐁𝐎𝐓 𝐀𝐏𝐈°📡 』
Ῠ adiwajshing.github.io/Baileys
Ῠ wwebjs.dev
Ῠ www.whatsapp.com

『 🍯𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐨𝐫𝐬°🍯 』
Ῠ https://wa.me/918436686758
Ῠ https://wa.me/917430922909
Ῠ https://wa.me/2348108178797
Ῠ https://wa.me/2349015407879
Ῠ https://wa.me/260760393025
Ῠ https://wa.me/264853830477
Ῠ https://wa.me/27748187589
Ῠ https://wa.me/27611100446
Ῠ https://wa.me/2349041348008


🧀 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 
Ῠ https://wa.me/918436686758
Ῠ https://wa.me/917430922909


❓ 𝐅𝐞𝐞𝐝𝐁𝐚𝐜𝐤 / 𝐑𝐞𝐩𝐨𝐫𝐭
Ῠ https://wa.me/2348108178797
Ῠ https://wa.me/2349015407879
Ῠ https://wa.me/260760393025
Ῠ https://wa.me/264853830477
Ῠ https://wa.me/27748187589
Ῠ https://wa.me/27611100446
Ῠ https://wa.me/2349041348008


『 🎊𝐀𝐈 𝐆𝐑𝐎𝐔𝐏𝐒°🎊 』
Ῠ *A:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ1}
Ῠ *B:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ2}
Ῠ *C:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ3}
Ῠ *D:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ4}`
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
