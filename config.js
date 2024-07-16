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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_34_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmhZdnBHWFhMUXhjT2dlM2N1aWEveWZ2MEJENUo2dFNUQ0xXNkN3N3dtWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMzI1OTE5NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExRUEwN0JDNjY5MzU0NUI0OTA5QTc1RDYyQkVCQzM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE0NzYzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMzMjU5MTk0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Q5QzVCODVFMjdCNURDQ0YxOEQzQzlFM0M1QTFDRjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTQ3NjM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInF2YndTaWx2U1QtVXR0dHh3bDd5SHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTU2OWVlODUtNTUwZC00MzI3LWI2YjUtYzFlMGZlYjNmMGRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTMyLFxuICAgICAgMjMzLFxuICAgICAgMjQ0LFxuICAgICAgMTA3LFxuICAgICAgMjYsXG4gICAgICAyMjEsXG4gICAgICAyMjEsXG4gICAgICAxMzEsXG4gICAgICAxMjUsXG4gICAgICAxNjUsXG4gICAgICAyMzIsXG4gICAgICAxNDEsXG4gICAgICAxNTUsXG4gICAgICAxNzYsXG4gICAgICAxMTMsXG4gICAgICAxMzcsXG4gICAgICAxODMsXG4gICAgICA2OSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA0OCxcbiAgICAgIDI1MCxcbiAgICAgIDEwMixcbiAgICAgIDIyNSxcbiAgICAgIDIzMyxcbiAgICAgIDIwMCxcbiAgICAgIDIwMCxcbiAgICAgIDMwLFxuICAgICAgMTAsXG4gICAgICAzNSxcbiAgICAgIDUwLFxuICAgICAgODgsXG4gICAgICAxNSxcbiAgICAgIDE1NCxcbiAgICAgIDczLFxuICAgICAgMjExLFxuICAgICAgMCxcbiAgICAgIDIxNixcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhRS0dONzlDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzI1OTE5NDM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGQVJPT1FfX0hBQ0tFUlwiLFxuICAgIFwibGlkXCI6IFwiMjU4NDMyOTgwNTAwNzA3OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6TjZNSUVFTzNCMnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiKzllRHI1OVM0ZEtsRUhMZ3p4UFI5Qkh2NzdFWUYwcUNLS1l3R0wxQTZnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzVllFWm1jYXhDc1J2YkQyTVFObHVVbnNPNkhSSUZxTEpoc25vSFZKM1A4VlphUlROWEhFQWlTaVBraUhUWTdiM0VxMnRxM0pyTlFWSkpXQlJ5QjVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWTlRtRFpIU1h1SmJRQmFvZVJybTZaVWRneGNIMCtxK2t2K3FoL0thdkZrVzRGNnA1RS8ra1YvU2VPblNUanJrVFdEL3dTU0xDSzR2QjdRcGNpL0NDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzI1OTE5NDM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE0NzYzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVVSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVVILmpzb24iOiAie1wia2V5RGF0YVwiOlwiNTNDTm1rcXFaR1JjenMxRkxnNnNHaXB4eEtmeU5ya2ZiZ1FscDREak5WQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjEzODY3Njc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExNDc2MzczMTBcIn0iCn0=" ;


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
