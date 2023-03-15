let MAN= {getname(){return "1"}}



function mix(obj :any){
    function fuck(){
    };
    console.log(obj)
    Object.assign(fuck.prototype,obj);
    console.log(fuck.prototype)
    return fuck;

}

//@ts-ignore
export class CT extends mix(MAN){

   constructor(){
    console.log("before ")
       super();
       console.log("after ")
   }
}