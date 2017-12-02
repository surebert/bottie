"use strict";

var BotKit = require('botkit');

module.exports = Ears;

var Bot = BotKit.xmppbot({
  debug: false,
  storage: undefined,
  account : {
    jid:  process.env.XMPP_JID,
    password: process.env.XMPP_PASS,
    host: process.env.XMPP_HOST,
    port : 5222
  }

});

function Ears(token) {
  this.scopes = [
    'message_received'
  ];

}

Ears.prototype.listen = function() {
  this.bot = Bot.spawn();
  return this;
}

Ears.prototype.hear = function(pattern, callback) {
  Bot.hears(pattern, this.scopes, callback);
  return this;
};
