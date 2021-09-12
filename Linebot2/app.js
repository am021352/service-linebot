//inital
let config = require('./config/lineBotConfig');
let linebot = require('linebot');
let clockManager = require('./models/schedule/botClock');
let botClock = clockManager.botClock;

let bot = linebot({
    channelId: config.LineChannelID,
    channelSecret: config.LineChannelSecret,
    channelAccessToken: config.LineChannelToken
});

bot.on('message', require('./models/ProcessOrder'));

bot.on('follow', function (event) {
    console.log(event);
    let followInfo = JSON.parse(JSON.stringify(event));// user JSON
    let userID = followInfo['source']['userId'];
    bot.push(userID, `Hello,you can blocked the bot if you don't receive any message. `);
    new botClock(config.testingTime, userID, 'testing');
    new botClock(config.morningClock, userID, '上線安安');
    new botClock(config.nightClock, userID, '下線晚安');
})
bot.listen('/linewebhook', 3000, async function (event) {
    console.log('[BOT is already]');
});