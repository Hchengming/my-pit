var mysql = require('mysql');
var pool = mysql.createPool({
  //获取本地mysql数据库
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'hcm',
});
//获取链接地中的链接
pool.getConnection(function (err, connection) {
  if (err) {
    console.log('获取链接失败');
  } else {
    console.log('获取链接成功');
    console.log(connection);
  }
});
