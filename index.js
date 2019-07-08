const Bot = require('node-telegram-bot-api');
const request = require('request');

const fs = require('fs');

const jsonFile = require('./vars.json');

const url = '';
const token = '897092968:AAGznG5DPnNkeukVWoyCSBan6EtTEk37VgY';

const bot = new Bot(token, { polling: true });

bot.on('message', (msg) => {

    // contacts
    if (msg.text.toString() === jsonFile.contactsBtn) {
        return request(url, (err, resp, body) => {
            bot.sendMessage(msg.chat.id, jsonFile.contactsInfo);
            
            bot.sendAudio(msg.chat.id, './music/oceania-billow.mp3.mp3');

        });
    }
    //goods
    if (msg.text.toString() === jsonFile.goodsBtn) {
        return request(url, (err, resp, body) => {
            bot.sendMessage(msg.chat.id, jsonFile.goodsInfo);
        });
    }

    bot.sendMessage(msg.chat.id, jsonFile.welcomeFraze, {
        reply_markup: {
            keyboard: [[jsonFile.contactsBtn], [jsonFile.goodsBtn],],
            inline_keyboard: [
                [{ text: 'Кнопка 1', callback_data: '1' }],
                [{ text: 'Кнопка 2', callback_data: 'data 2' }],
                [{ text: 'Кнопка 3', callback_data: 'text 3' }]
              ]
        }
    }
    );
});