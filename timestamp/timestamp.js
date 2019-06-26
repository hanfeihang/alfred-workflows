let param = process.argv[2];
if (process.argv[3] != null) {
  param = param + ' ' + process.argv[3];
}

function timetrans(dateLong) {
  var date = new Date(parseInt(dateLong));
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}

; (async function () {
  let ret = null;
  let type = null;
  if (isNaN(param)) {
    // 字符
    ret = new Date(param).getTime();
    type = '时间戳';
  } else {
    // 数字
    ret = timetrans(param);
    type = '时间';
  }

  let result = [];
  result.push({
    title: ret,
    subtitle: type,
    arg: ret,
  });
  result.push({
    title: new Date().getTime(),
    subtitle: `当前时间`,
    arg: ret,
  });
  console.log(JSON.stringify({
    items: result
  }));
})()
