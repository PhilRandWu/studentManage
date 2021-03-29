// 引入router模块
const getRouter = require('router');

// 引入模板引擎
const template = require('art-template');

// 引入queryString模块
const querystring = require('querystring');


// 获取路由对象
const router = getRouter();

// 导入学生信息集合模块
const Student = require('../model/users.js');

// 创建路由
	// 呈递学生信息添加页面
router.get('/add',(req,res) => {
	const html = template('add',{});
	res.end(html);
});
	// 呈递学生信息管理页面
router.get('/list',async (req,res) => {
	// 从数据库中查询所有的学生信息
	let students = await Student.find();
	// console.log(students);
	const html = template('list',{
		students: students
	});
	res.end(html);
})
// 接收传递过来的学生信息
router.post('/add',(req,res) => {
	// 接收请求参数
	let forData = '';
	req.on('data',param => {
		forData += param;
	});
	req.on('end',async () => {
		// console.log(querystring.parse(forData));
		// 添加到数据库中
		await Student.create(querystring.parse(forData));
		// 重定向
		res.writeHead(301,{
			Location: '/list'
		});
		res.end(); 
	})
})

module.exports = router;