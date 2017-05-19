module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-react-d3-app',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'BiMap Toolkit',
        description: 'Weeeeee + react + d3',
        icon: 'plugins/kibana-react-d3-app/pie-chart.svg',
        main: 'plugins/kibana-react-d3-app/app',
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
