const fs = require('fs');
const yaml = require('js-yaml');

try {
  var doc = yaml.safeLoad(fs.readFileSync( __dirname + '/../../setting.yml', 'utf8'));
} catch (e) {
  console.log('[ERROR] 设置文档读取出错');
  console.log(e);
  process.exit(1);
}

module.exports = doc;
