export function aa() {
    console.log("Pr")
    let a = [1, 2, 3, 4]
    let b = a.map(e => {
        // if (e == 4) 
        //    return Promise.reject("4");
        return e;
        // else{
        //     Promise.resolve()
        // }
    })
    console.log(b)
    Promise.all(b).then(e => {
        console.log(e)
        // throw new Error("fuck");
        throw "";
    }).catch(e => {
        console.log(4)
        return e;
    });
    return 5;
    //     (  resolve,reject )=>{
    //     reject();
    // }).then(()=>{
    //     console.log("ap")
    // }).catch((e)=>{
    //     console.log("catch")
    // }).then(()=>{
    //     console.log("final")
    // })
};


// function asyncFunction(){
// 	return new Promise(function(resolve, reject){
// 		console.log('aaa')
// 		throw new Error('throw new error')
// 		console.log('bbb')
// 		resolve('resolve error')
// 	})
// }

// asyncFunction().catch(function(error){
// 	console.log('one', error)
// }).then(function(message){
// 	console.log('resolve')
// }).catch(function(error){
// 	console.log('two', error)
// })
