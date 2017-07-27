var config = require('./node_modules/ghost/core/server/config'),
  ghostVersion = require('./node_modules/ghost/core/server/utils/ghost-version');

require('./node_modules/ghost/core/server/overrides');

module.exports = {
  currentVersion: ghostVersion.safe,
  database: config.get('database'),
  migrationPath: config.get('paths:migrationPath')
};
