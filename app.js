// 建立项目文件夹并生成项目描述文件
// 创建网站服务器实现服务器端与客户端的通信
// 连接数据库并设置学员信息表
// 创建路由并实现页面模板传递
// 实现静态资源访问
// 实现学生信息添加功能
	// 在模板的表单中添加请求地址与请求方式
	// 为表单的每一个属性添加 name 属性
	// 添加实现学生信息功能路由
	// 接收客户端传递过来的学生信息
	// 将学生信息添加到数据库中
	// 将页面重定向到学生信息展示页面
// 实现学生信息展示功能
	// 从数据库中查询所有的学生信息
	// 通过模板引擎将学生信息与HTML模板拼接
	// 将拼接好的模板返回给客户端



// 引入http模块
const http = require('http');
// 导入数据库连接模块
require('./model/connect.js');

// 引入模板引擎
const template = require('art-template');
// 引入path模块
const path = require('path');

// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 引入时间格式处理模板
const dateFormat = require('dateformat');

// 导出 dateformat 方法
template.defaults.imports.dateFormat = dateFormat;

const router = require('./route/index.js');
// 实现静态资源访问功能
const serve = serveStatic(path.join(__dirname,'public'));
// 配置模板的根目录
template.defaults.root = path.join(__dirname,'views/');

// 配置模板的默认后缀
template.defaults.extname = '.art';


// 创建网站服务器
const app = http.createServer();
// 当客户端访问服务器时
app.on('request',(req,res) => {
	// 启用路由功能
	// 第三个参数为必选参数
	router(req,res,() => {})
	// 启用静态资源访问功能
	serve(req,res,() => {})
})
// 监听端口
app.listen(80);
console.log('服务器启动成功');