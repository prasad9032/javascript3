
const obj={
    a:1,b:2,c:3
}
function check(n,key){
   console.log(n.hasOwnProperty(key));
}
check(obj,"a");