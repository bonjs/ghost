// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
   


    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'development': {
        url: 'http://192.168.1.117:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : 'localhost', 
                user     : 'root',
                password : 'root',
                database : 'ghost',
                charset  : 'utf8'
            }
        },
        server: {
            host: '192.168.1.117',
            port: '2369'
        },
        logging: false
    },

};

module.exports = config;
