var path = require('path');

module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-react-app',
    require: ['kibana', 'elasticsearch', 'timelion'],
    uiExports: {
      app: {
        title: 'kibana-react-app',
        description: 'Weeeeee',
        icon: 'plugins/kibana-react-app/icon.svg',
        main: 'plugins/kibana-react-app/app',
        injectVars: function (server) {
          var config = server.config();
          var basePath = config.get('server.basePath');

          return {
            kbnIndex: config.get('kibana.index'),
            esShardTimeout: config.get('elasticsearch.shardTimeout'),
            esApiVersion: config.get('elasticsearch.apiVersion'),
            basePath
          };
        }
      },
      hacks: [],
    },

    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init: require('./init')

  });
};
