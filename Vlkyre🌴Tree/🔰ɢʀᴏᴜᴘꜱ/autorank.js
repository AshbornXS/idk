("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
require("../../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Vlkyre🖋️Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Vlkyre👒Hat/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Vlkyre🧭Compass/Group_Only");
let Ranker = require(`../../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.autorank = async (
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

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (!F𝖚𝖑𝖑_A𝖗𝖌𝖘) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* ${prefix}${Final_Name} on/off`
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (Vlkyre.A𝖗𝖌𝖘[0] === `ON` || Vlkyre.A𝖗𝖌𝖘[0] === `on` || Vlkyre.A𝖗𝖌𝖘[0] === `On`) {
return await Ranker.findOne(
{
serverID: Vlkyre.chatID,
},
async (error, server) => {
if (error) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, e);
if (!server) {
let newServer = new Ranker({
serverID: Vlkyre.chatID,
value: "ON",
});
await newServer.save();
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Matte.png",
`📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Vlkyre.groupMetadata.subject || ""}
🎖️𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ✅On`
);
} else {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Matte.png",
`📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Vlkyre.groupMetadata.subject || ""}
🎖️𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ✅On`
);
}
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (Vlkyre.A𝖗𝖌𝖘[0] === `OFF` || Vlkyre.A𝖗𝖌𝖘[0] === `off` || Vlkyre.A𝖗𝖌𝖘[0] === `Off`) {
return await Ranker.findOne(
{
serverID: Vlkyre.chatID,
},
async (error, server) => {
if (error) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, e);
if (!server) {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Matte.png",
`📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Vlkyre.groupMetadata.subject || ""}
🎖️𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ❌OFF`
);
} else {
await server.delete();
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Matte.png",
`📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Vlkyre.groupMetadata.subject || ""}
🎖️𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ❌OFF`
);
}
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* ${prefix}${Final_Name} on/off`
);
}
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
