let http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    let allDate=''

    req.on('data',(chunk)=>{      //进行数据接收
        allDate += chunk;
    })
    req.on('end',()=>{
        let obj=JSON.parse(allDate);
        if(obj.user==='user'&& obj.pass==='123456'){
            res.end('1');
        }else {
            res.end('-1');
        }
    })

}).listen(3000,()=>{                //数据接收完处理数据
    console.log('服务器已启动');
})