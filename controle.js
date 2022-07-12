function digitalroot(n){
    let temp=[];
    let str=n.toString();
    let s=0;
    if (n<9){
        return n;}
    for (let i = 0;i<str.length;i++){
        temp.push(str[i]);
    s=s+Number(str[i])}
    
    while (s>9){
        s= digitalroot(s)}
    return s;
};
var inp=document.getElementById('droot').value;
var r=digitalroot(Number(inp));
document.getElementById('res').innerHTML=r
//// factorial option
function fact(y){
    let result=1;
    for(let i=1;i<=y;i++)
    {
        result=result*i;

    }
    return result;
}
var inp1=document.getElementById('fact').value;
var r1 =fact(Number(inp1));
document.getElementById('res1').innerHTML=r1;
