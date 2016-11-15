// Override individual items only

module.exports = function (settings) {
    return {
        override: function () {

            //Override individual settings

            settings.server.port = 3030;

            return settings;
        }
    }
};
