/**
 * @param {Object} event from webhook 
 */
function copyCat(event) {
  let replyMsg = `respond:${event.message.text}`;
  event.reply(replyMsg);
}

module.exports = copyCat;