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
  let result = [];
  if (process.argv.length >= 3) {
    let param = process.argv[2];
    if (process.argv[3] != null) {
      param = param + ' ' + process.argv[3];
    }
    let ret = null;
    let type = null;
    if (isNaN(param)) {
      // 字符
      ret = new Date(param).getTime();
      type = param;
    } else {
      // 数字
      ret = timetrans(param);
      type = param;
    }
    result.push({
      title: ret,
      subtitle: type,
      arg: ret,
    });
  }

  let nowTimestamp = new Date().getTime();
  let nowTimeStr = timetrans(nowTimestamp);
  result.push({
    title: nowTimestamp,
    subtitle: `当前时间戳`,
    arg: nowTimestamp,
  });
  result.push({
    title: nowTimeStr,
    subtitle: `当前时间`,
    arg: nowTimeStr,
  });
  console.log(JSON.stringify({
    items: result
  }));
})()
