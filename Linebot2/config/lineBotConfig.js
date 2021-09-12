
let botConfig = {
    "LineChannelID": process.env.LineChannelID,
    "LineChannelSecret": process.env.LineChannelSecret,
    "LineChannelToken": process.env.LineChannelToken
}
//     *    *    *    *    *    *
//      ┬    ┬    ┬    ┬    ┬    ┬
//      │    │    │    │    │    │
//      │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
//      │    │    │    │    └───── month (1 - 12)
//      │    │    │    └────────── day of month (1 - 31)
//      │    │    └─────────────── hour (0 - 23)
//      │    └──────────────────── minute (0 - 59)
//      └───────────────────────── second (0 - 59, OPTIONAL)
let clock = {
    morningClock: '0 0 7 * * 0-7',
    nightClock: '0 0 20 * * 0-7',
    testingTime: '*/5 * * * * *'
}

exports.LineChannelID = botConfig.LineChannelID;
exports.LineChannelSecret = botConfig.LineChannelSecret;
exports.LineChannelToken = botConfig.LineChannelToken;

exports.morningClock = clock.morningClock;
exports.nightClock = clock.nightClock;
exports.testingTime = clock.testingTime;