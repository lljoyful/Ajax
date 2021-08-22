// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
//body-parser接收post请求
const bodyParser = require('body-parser');
const fs = require('fs');
// 创建web服务器
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/first', (req, res) => {
    res.send('hello ajax');
});

app.get('/responseData', (req, res) => {
    res.send({ "name": "zs" });
});
app.get('/get', (req, res) => {
    //req.query可以接收get请求
    res.send(req.query);
});
app.post('/post', (req, res) => {
    //接收post请求
    res.send(req.body);
});
app.post('/json', (req, res) => {
    res.send(req.body);
});
app.get('/readystate', (req, res) => {
    res.send('readystate');
});
app.get('/error', (req, res) => {
    // console.log(abc);服务器端错误500
    res.status(400).send('not ok');
});
app.get('/cache', (req, res) => {
    fs.readFile('./test.txt', (err, result) => {
        res.send(result);
    });
});
// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');