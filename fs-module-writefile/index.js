const fs = require('fs');

fs.writeFile('demo.txt','this is fs module text',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('successful')
    }
})