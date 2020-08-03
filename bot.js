'use strict'
const tmi = require('tmi.js');
const request = require('request');
const dotenv = require('dotenv');
const HunterPie = require('./HunterPie');

// Loads the local .env file
dotenv.config();

const Client = new tmi.Client({
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: ParseChannelList(process.env.CHANNEL_NAMES)
});
const DataExporter = new HunterPie(process.env.HUNTERPIE_FOLDER_PATH);

Client.connect();

Client.on('connected', () => console.log("Bot Connected!"));

Client.on('chat', async (channel, user, message, self) => {

    if (self) return;

    let command = message.toLowerCase().split(' ')[0];
    switch (command) {
        case '!id':
            let session = await DataExporter.GetPlayerSession();
            Client.say(channel, `Session Id: ${session.Session}`);
            break;

        case '!build':
            let build = await DataExporter.GetPlayerBuild();
            let tiny_link = await ConvertToTinyURL(build.BuildURL);
            Client.say(channel, `My current ${build.WeaponName} build: ${tiny_link}`);
            break;

        case '!rank':
            let player = await DataExporter.GetPlayerCharacter();
            Client.say(channel, `${player.Name} | HR: ${player.HR} | MR: ${player.MR} | Playtime: ${ConvertTimeFromSeconds(player.Playtime)}`);
            break;
    }
})


// Helpers
function ParseChannelList(array) {
    return array.split(',');
}

function ConvertToTinyURL(url) {
    const endpoint = `http://tinyurl.com/api-create.php?url=${url}`;
    return new Promise((resp, rej) => {
        request.get(endpoint, {json: true}, (err, res, body) => {
            if (err) rej(err)
            else resp(body.replace("http://", "https://"));
        })
    })
}

function ConvertTimeFromSeconds(s) {
    let hours = Math.floor(s / 60 / 60);
        let minutes = Math.floor(s / 60) - (hours * 60);
        let seconds = s % 60;

        return `${hours}:${minutes}:${seconds}`;
    }
