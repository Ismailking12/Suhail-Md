const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saims9@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VausJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VausJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184687747";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgzLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFxRTZJaHBzaUZrUmhFcElSckV2dzN0T0pvQis1TGp5Q2FKcGxodCt1Tlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc5OFpFOW8yVFpDNWhKb2pzVVk4YkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2E3OGE5MzctYWQ2Yy00NDdjLTk1MTUtMTQwNDkyM2ZkYWE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDI1MixcbiAgICAgIDQ4LFxuICAgICAgMTgsXG4gICAgICAyMjgsXG4gICAgICAxNDgsXG4gICAgICAyOSxcbiAgICAgIDEwOSxcbiAgICAgIDMxLFxuICAgICAgMTMsXG4gICAgICAyMDYsXG4gICAgICAxMixcbiAgICAgIDkwLFxuICAgICAgOSxcbiAgICAgIDI1MCxcbiAgICAgIDE2NyxcbiAgICAgIDEwMixcbiAgICAgIDE0NCxcbiAgICAgIDE0NixcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDIyMSxcbiAgICAgIDE4NCxcbiAgICAgIDgxLFxuICAgICAgMTUyLFxuICAgICAgMjMyLFxuICAgICAgMTkwLFxuICAgICAgMzIsXG4gICAgICA3MyxcbiAgICAgIDY5LFxuICAgICAgOTksXG4gICAgICA5NSxcbiAgICAgIDIzMyxcbiAgICAgIDEwMyxcbiAgICAgIDQ2LFxuICAgICAgMjM3LFxuICAgICAgMTY0LFxuICAgICAgMTA3LFxuICAgICAgMTAxLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzI0VlJKODdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4Njk5NTMwMDIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NzU1ODEwNjU2MjU2NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXanVHWVE3WjJrdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmdEWXVML0gyVUgycDBxL2t4R3pOVGZobVhuaVlxeENpMzdaVlFQM0VVbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4ejM5OXFkeWhUbE9zcEM1cmJ3KzNjbDQyZWpoa0lDZGJHR2NhQ01FMEVQNlBpTldKQ0dQbUNsZ09EQzZTdmFJVGZlMjN2VDVQa1hQYU5Ra1dSeEJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiMUE3SlluV2RSUHZwT0tOUTdDcDZxaXlxbkNSL0NSNXBzdnozWEdZWEU0cy84SGZ2ZzhLMmsyck9TS0hzalVxcUZFVnp6UEY4aTRjNnZnMDN0eU9Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODY5OTUzMDAyMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjU4Mjg4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
