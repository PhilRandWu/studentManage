// 导入mongoose模块连接数据库
const mongoose = require('mongoose');
// 创建集合规则
const studentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 10
	},
	age: {
		type: Number,
		min: 10,
		max: 30
	},
	sex: {
		type: String
	},
	email: String,
	hobbies: [String],
	collage: String,
	enterDate: {
		type: Date,
		default: Date.now
	}
})

// 创建集合
const Student = mongoose.model('Student',studentSchema);


// 将学生信息集合进行导出
module.exports = Student;