/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Telegraf } from "telegraf"; 
const TOKEN = '6553934688:AAEEx2NacO7jqciX6nxevfz3218zux6Ons8'
const bot = new Telegraf(TOKEN);


const web_link = 'https://master--tgfranko.netlify.app/'



bot.start((ctx) =>
  ctx.reply('Welcome :))))))', {
    reply_markup: { keyboard: [[{ text: "web app", web_app: {url: web_link}}]] },
  })
);

bot.launch()