 //引入http模块 
var http = require("http"); //创建服务器 
var server = http.createServer(function(req,res){     //req 请求对象     //res 响应对象 
//     res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});     
// 	res.write("<h1>Hello NodeJs , 源代码教育</h1>");     
// 	res.end(); 
	console.log("服务器已连接");
	res.on("end",function(){
		console.log("服务器已断开");
	});
	res.end();
}); 
//启动服务器，并且监听80端口。 
server.listen(80,function(){
	console.log("服务器已绑定");
}); 