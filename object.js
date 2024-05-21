let obj={'model':'thar','make':'t2','year':2024};
function car(){
for(const w in obj){
    console.log(`${w}:${obj[w]}`);
}
}
car(obj);