const dotenv = require('dotenv');
dotenv.config('../../.env');
const isDev = process.env.NODE_ENV === 'development';
if (/** 开发环境*/ process.env.NODE_ENV === 'development') {
  require('./alias');
  require('@babel/register');
}

module.exports = {
  isDev
};
