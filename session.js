//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK013MHJBZW5wbmVkQVhpRXNTekFCalAxbWZEajJXVEF4dmNQWDNOTGhWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXUzTTU2TUlwRytKaTZESTJ3QU1XQ0NHR0J5VVJROGJreWthT3ZDS2pFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRW5NRFVrbG9JSDlMbGpLSjJIWFliNU9RZVM0bjZhaVpFVk9tYjBZT1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVVFaWS8rK25WYnBxSW80dVMwMlA3aHJRdWFKbkU1VVdaTC8rZWpXK0N3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBTTVHbGNtczVWanRMOVNrcG5hL3RQRjVibHQzK2k5V0xybDVGY1FRMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh2bk9PWEVVQ1BMM0ZYZHBMb1IyVllnb2lLK2R2Q201bU1aNmwzYS8yRFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5ORHNQbkJ5Z3kzVHNFcFFzR3NKMStLZHpHK2dtODB2OC9Kc1N1YkhHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkh5cURBV05UWnBYdExjTjhYVmVnaWtGL2ZzMDRxc2RjUjUybDdIWGRnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRrY2w1ZlE2WDNVZHhrZ1VJM1NtSHRyZVJxUklPc1N4bmVrTW8vaWM5NkpwM2pORkgra0t1U1o4RFdQdnhFbHFwMnJIZTBBR1Bpem5xM0w4Z3BKcWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJ6SXBwUG1CeCswdjh3NkRrSHNXZytiTXQ2cFk0OXU5N05nOEFWb2JQN1NjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYQm5zVTBCRlFOcVRTaWMzaWZUc0JBIiwicGhvbmVJZCI6ImVlMGY5ZTQ5LTY0MzUtNDUyOS05NzZmLTQxYjZhMjhkNGNlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRTVsb1BMWDBJd29aMjRKU3k2dzQ3QUtRQ1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib29kUWVld0NWVVhxZmF5YWV4TWNYc1V0OVljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg3U0hOQkg5IiwibWUiOnsiaWQiOiI5NDc3MjcwMzAzODoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTQUNISSIsImxpZCI6IjI3MTc2NDcyNjc4ODMzOToxMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orVStLc0dFTnF2cU1NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im41a0xCTXFYQWFsTkNJZW9YR2dnNnRaYUVmQUNXMFlXdUU5OWJLSjUxWFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRRZzFkWnI4YjJvNEFlYmM3QkdVL2M2TC9PU1E0STBjQklMQ0R3N1ltWTMwTWxWclNUVm1nUXZaYkM5N0plbWlRUGFRaFFucGtleTVJYmhZNUR2Y0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnNDN4bGYzYUZLaThOUGUya1NWZndRS0xFL3EzVGkzZUhvYVM1dkw3OURoSXhEQXNlbDFOeDk0U1VyL2lpaEoyZGtINzRkYkVNR2pjYmZhZkNqdXdoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcyNzAzMDM4OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlorWkN3VEtsd0dwVFFpSHFGeG9JT3JXV2hId0FsdEdGcmhQZld5aWVkVjIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTc4MzQwMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCU00ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94742093485",
  PASSWORD: 
    process.env.PASSWORD || "2008Mihi,
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
