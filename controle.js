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
var button=document.getElementById('btn');
var r=digitalroot(Number(inp));
button.onclick=document.getElementById('res').innerHTML=r