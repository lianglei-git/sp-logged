export var UUID = function (num) {
  // 随机串数
  num = num || 4;
  // 生成一串随机串
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  // 先插入时间戳
  let re = new Date().getTime().toString(16);
  // 循环加入随机串
  for (let i = 0; i < num; i++) {
    re += `-${S4()}`;
  }
  return re;
};
