const factor =(num)=>{
    let factor=[]
    let idx=0
    for(i=0;i<=num;i++){
        if(num%i===0){
            factor[idx]=i
            idx++
        }
    }
    return factor
}
console.log(factor(10));
