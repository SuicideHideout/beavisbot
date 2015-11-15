exports.names = ['add'];
exports.hidden = true;
exports.enabled = false;
exports.matchStart = true;
exports.handler = function (data) {
    if (data.from.role > 1) {
        //bot.moderateDeleteChat(data.id);
        var input = data.message.split(' ');
        var username = _.rest(input, 1).join(' ').trim();
        var usernameFormatted = S(username).chompLeft('@').s;
        if (usernameFormatted) {
            var user = bot.getUserByName(usernameFormatted);
            if (user && bot.getWaitListPosition(user.id) === -1) {
                bot.moderateAddDJ(user.id, function () {
                    logger.info('[ADD] ' + data.from.username + ' added ' + usernameFormatted + ' to waitlist.');
                });
            }
        }
    }
};
