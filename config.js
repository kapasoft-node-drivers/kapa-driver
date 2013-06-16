var config = {}

config.controller_url = process.env.CONTROLLER_URL || '/minnehaha/';
config.controller_host = process.env.CONTROLLER_HOST || 'localhost';
config.controller_port = process.env.CONTROLLER_PORT || 8010;

module.exports = config;