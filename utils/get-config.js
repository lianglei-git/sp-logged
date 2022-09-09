var path = require('path');
var fs = require('fs');
var _ = require('lodash');

/** 单个dicom服务器的配置 */
var DicomServerType = {
  /** 服务器AETitle */
  'PeerAET': 'YIZHUNPACS',
  /** 服务器端口 */
  'PeerPort': 11112,
  /** 服务器IP */
  'PeerIP': '10.2.112.112'
};

/** 获取配置文件配置 */
export const GetConfig = () => {
  /** 默认配置 */
  var defaultConfig = {
    /** CT预渲染配置 */
    CTPRender: {
      /** @type {DicomServerType[]} 图像要回传的服务器表 */
      returns: []
    }
  };

  try {
    var file = path.join(__dirname, 'config.js');
    var config = eval(`(${fs.readFileSync(file)})`);
    defaultConfig = _.assign(defaultConfig, config);
    return defaultConfig;
  } catch (e) {}
  return defaultConfig;
};
