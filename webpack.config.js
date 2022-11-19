const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-configs/base.config');
const productionConfig = require('./webpack-configs/prod.config');
const developmentConfig = require('./webpack-configs/dev.config');

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
