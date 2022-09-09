const {
  RleDecode, DateFromat
} = require('utils-public/base');
/** 冠脉体素解析 */
var loadRleData = function (rleData, size) {
  var voxel = RleDecode(rleData);
  var voxData = new Uint8Array(voxel.length);
  for (var z = 0; z < size.z; z++) {
    for (var y = 0; y < size.y; y++) {
      var my = size.y - y - 1;
      for (var x = 0; x < size.x; x++) {
        var idx = z * size.x * size.y + y * size.x + x;
        var idxm = z * size.x * size.y + my * size.x + x;
        voxData[idx] = voxel[idxm];
      }
    }
  }
  return voxData;
};

module.exports = {
  loadRleData,
  DateFormat: () => '  时间： ' + DateFromat(new Date(), 'yyyy-MM-dd hh:mm:ss')
}