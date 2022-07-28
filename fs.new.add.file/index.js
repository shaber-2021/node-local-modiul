const fs = require('fs');

fs.appendFile('demo.txt','this is fs module text new add not repite',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('successful')
    }
})