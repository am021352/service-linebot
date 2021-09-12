
var schedule = require('node-schedule');
let linebot = require('linebot');
let config = require('../../config/lineBotConfig');
let Logger = require('../../config/logConfig');
let bot = linebot({
    channelId: config.LineChannelID,
    channelSecret: config.LineChannelSecret,
    channelAccessToken: config.LineChannelToken
});

//時鐘機器人
class botClock {
    /**
     * Send message schedule
     * @param {string} time format (* * * * * *)
     * @param {string} userID 
     * @param {string} context 
     */
    constructor(time, userID, context) {
        schedule.scheduleJob(time, this.processSendMessage(userID, context));
    }
    processSendMessage(userID, context) {
        Logger.info(`[processSendMessage] start context: ${context}`);
        return () => {
            bot.push(userID, context);
        }
    }

}
exports.botClock = botClock;