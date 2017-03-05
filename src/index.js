const morgan = require('morgan');

module.exports = (options) => {
    morgan.token('id', (req, res) => {
        return req.headers['X-Request-Id'];
    });
    return morgan(':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
};
