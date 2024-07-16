const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "Wa.me/923123681151";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/LnHJcpfnyh8B27QPKPW6tJ";
global.website=process.env.GURL || "https://chat.whatsapp.com/LnHJcpfnyh8B27QPKPW6tJ" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923123681251" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923123681251";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "𝗡𝗨𝗠𝗕𝗘𝗥 𝗡𝗢 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 𝗨𝗦𝗜𝗡𝗚";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_05_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL3ZjbnVSYytYNmFJNFpxV3A4T3JNY3VNaVJtWlFKekYyNzFKVGRQWjBiaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMzI1OTE5NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUxNzYwMTQzMzM3MTIxRjVCOUIxRDg0OEQxNjZCQTAyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE0NTk0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMzMjU5MTk0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTEzMkYzNzcyMjBBQTlDRjI2ODg4QTUzRTNBMTBBNTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTQ1OTQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkROTHpReXpvUTEtT3BuaGdJMTNGM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWVmOGRkM2ItYzg0ZS00OWEzLTgxOTctNmQ5ZjMyZDljZGY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMTU2LFxuICAgICAgNjcsXG4gICAgICA2MCxcbiAgICAgIDc2LFxuICAgICAgNDgsXG4gICAgICAzNSxcbiAgICAgIDE0LFxuICAgICAgOTksXG4gICAgICAxNDcsXG4gICAgICAxNDksXG4gICAgICAxNjUsXG4gICAgICA4MSxcbiAgICAgIDE4OSxcbiAgICAgIDIxMyxcbiAgICAgIDE3NSxcbiAgICAgIDE1NCxcbiAgICAgIDIyLFxuICAgICAgMzgsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAyNTIsXG4gICAgICAxNTcsXG4gICAgICAxODEsXG4gICAgICA3MyxcbiAgICAgIDEwNCxcbiAgICAgIDE4MyxcbiAgICAgIDgsXG4gICAgICAyOCxcbiAgICAgIDE3MyxcbiAgICAgIDEzMSxcbiAgICAgIDEzOCxcbiAgICAgIDEyOSxcbiAgICAgIDE4MCxcbiAgICAgIDMzLFxuICAgICAgMjAzLFxuICAgICAgMTk1LFxuICAgICAgMjQwLFxuICAgICAgMjQ2LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNBUDE3MzVXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzI1OTE5NDM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGQVJPT1FfX0hBQ0tFUlwiLFxuICAgIFwibGlkXCI6IFwiMjU4NDMyOTgwNTAwNzA3OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2TjZNSUVFTTIwMnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiKzllRHI1OVM0ZEtsRUhMZ3p4UFI5Qkh2NzdFWUYwcUNLS1l3R0wxQTZnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWUzhiQ2JyTmg2YTBLU21IZjBFdUlnbTNkRWhwWC9qZjlyYWhQenVlZWhHWGFqMGJnZ3pnN2Zoa1NWSmlNVGR2M2tXRkQrU3M2R2dzWG5EZlVWalNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkR0xJRlk4S1oxZ252UUZMRGtySE9EZ1NGRWNLeEZzSHdZQVZUT3pqVGgyTDdtT3dtdEpXZHE2NWk4TDhyelZvdU1YL2Fuc1daUmRFNVFIU2F4eFZoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzI1OTE5NDM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE0NTkzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVVRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVVGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXJZeFplYTR5anhtdGtHZXhmL01heU1icm03emZkcjAxTm5sT0R6bVN2Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjEzODY3Njc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExNDU5MzgyMDNcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: 𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜 Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜" , // ```『 𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜 』```", //*『𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜』*Wa.me/923123681251"),
 
  author : process.env.PACK_AUTHER|| "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜",
  packname: process.env.PACK_NAME || "♥️𝗟𝗢𝗩𝗘 𝗜𝗦 𝗟𝗜𝗙𝗘",
  botname : process.env.BOT_NAME  || "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜",
  ownername:process.env.OWNER_NAME|| "It'x 𝗙𝗔𝗥𝗢𝗢𝗤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FAROOQ"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
