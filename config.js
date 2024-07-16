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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_54_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUm5XT0ZuZmRxTk5qTStZMi91NGE2S0tBZTJPbXpLVmZ2SXN1c0hXdkRlaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMzI1OTE5NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGQkQ0NzE4QjY4NzlDNzlGMUVDMkQ1OEY2RkFBMzk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE0ODg3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMzMjU5MTk0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUY2RTIzMUM0NUREM0I3QkYyQzg0NDZDRjE0QTg4NkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTQ4ODc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm0tQkdjNjRCVDlDc3RDZXh0MHJPZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjk3ZGM1YTEtNTU4NS00MmY3LWIwMjktNDkwZmJkMjYzZWYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMjUzLFxuICAgICAgOTcsXG4gICAgICAxMzYsXG4gICAgICA3MSxcbiAgICAgIDE4LFxuICAgICAgMTM4LFxuICAgICAgMjI0LFxuICAgICAgMjYsXG4gICAgICAzMSxcbiAgICAgIDEyMSxcbiAgICAgIDIyMixcbiAgICAgIDEzMSxcbiAgICAgIDI0OCxcbiAgICAgIDE1LFxuICAgICAgMjQ3LFxuICAgICAgMTEzLFxuICAgICAgNjEsXG4gICAgICAyLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDE4NSxcbiAgICAgIDEzOSxcbiAgICAgIDIyNixcbiAgICAgIDE4MSxcbiAgICAgIDEwMCxcbiAgICAgIDU0LFxuICAgICAgOTksXG4gICAgICA3MixcbiAgICAgIDIwMyxcbiAgICAgIDEyNSxcbiAgICAgIDI1MSxcbiAgICAgIDIzMCxcbiAgICAgIDYzLFxuICAgICAgMjUxLFxuICAgICAgMTY5LFxuICAgICAgNDksXG4gICAgICAzMyxcbiAgICAgIDE0NCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWjVWOEpMSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzMyNTkxOTQzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRkFST09RX19IQUNLRVJcIixcbiAgICBcImxpZFwiOiBcIjI1ODQzMjk4MDUwMDcwNzoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM042TUlFRU1QTDJyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIis5ZURyNTlTNGRLbEVITGd6eFBSOUJIdjc3RVlGMHFDS0tZd0dMMUE2Z1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTDRmRVQ2UU9qQll0bm80NlN3SzZWRmdTMjBBTmlueS95dy96Q3VaOG9LemtsZDdwNmdyaWJ5L3dyWVJZa3YxanQ1dU9Sa0xvZ2k1SzNkeGM4Y1BCQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXEzOWNKTVZpNWtiVkxaMFRvbzJiOTVLRWZ0SFVPR2I3TU9nTkovaUR0ZXE5dTBoRUVOTXlMVHVEZmNXRXMrbjEwMVJDSGdWdEMxVkxUdzl6Q1RBZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzMyNTkxOTQzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNDg4NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNeTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU15Ni5qc29uIjogIntcImtleURhdGFcIjpcIk4vbDFkUEJvNHA4VEVFemxROFpHcTFHWFRydXJWYzBFbnpwUXdxck9vcnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxMzg2NzY3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMTQ4MjIxMzQ4XCJ9Igp9" ;


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
