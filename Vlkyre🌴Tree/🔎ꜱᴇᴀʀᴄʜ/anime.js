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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.anime = async (
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
if (!F𝖚𝖑𝖑_A𝖗𝖌𝖘) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
`*❌ERROR:* No query provided!

*⚡USAGE:* ${prefix}${Final_Name} <anime name>`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let { data: jap } = await axios.get(
`https://api.jikan.moe/v3/search/anime?q=${F𝖚𝖑𝖑_A𝖗𝖌𝖘}`
);
if (!jap.results[0].title) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
`*❌ERROR:* Couldn't find any results on the term *${F𝖚𝖑𝖑_A𝖗𝖌𝖘}*

*⚡USAGE:* ${prefix}${Final_Name} <anime name>`
);
}

let { data } = (
await axios.get(`https://api.jikan.moe/v4/anime?q=${jap.results[0].title}`)
).data;
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
data[0].images.jpg.image_url,
`*Result:* ${0 + 1} of ${data.length}

*📕Title:* ${data[0].title}/${data[0].title_english}/${data[0].title_japanese}
*🔖Trailer:* ${data[0].trailer.url}
` +
`*🔍MAL_ID:* ${data[0].mal_id}
*✴️Type:* ${data[0].type}
*🎬Episode(s):* ${data[0].episodes}
*📢Airing:* ${data[0].status}
*🔔Date:* ${data[0].aired.string}
` +
`*🔱Rating:* ${data[0].rating}
*⚜️Duration:* ${data[0].duration}
*♨️Score:* ${data[0].score}
*📦Studio(s):* ${data[0].studios.map((val) => `${val.name}`).join(`, `)}
` +
`*🎞️Genre(s):* ${data[0].genres.map((val) => `${val.name}`).join(`, `)}
*📚Synopsis:* ${data[0].synopsis}`
);
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
