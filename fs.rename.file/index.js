const fs = require('fs');

fs.rename('demo.txt','demo.new.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('successful')
    }
})