let promise=new Promise((resolve, reject)=>{
    let count=10;
    if(count===10){
        resolve(count);
    }
    reject("Something went wrong...")
});

promise.then((response)=>console.log(response)).catch((error)=>console.log(error));