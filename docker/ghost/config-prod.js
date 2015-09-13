// Ghost Configuration
// Documentation can be found at http://support.ghost.org/config/
var path = require('path'),
  config;

config = {
  production: {
    url: 'http://brage.switchbit.io',

    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(process.env.GHOST_CONTENT, '/data/ghost.db')
      },
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: '2368'
    },
    paths: {
      contentPath: path.join(process.env.GHOST_CONTENT, '/')
    },
    mail: {
      transport: 'SMTP',
      options: {
        service: 'Mailgun',
        auth: {
          user: process.env.MAILGUN_USER,
          pass: process.env.MAILGUN_PASSWORD
        }
      }
    }
  }
};

// Export config
module.exports = config;
