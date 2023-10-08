let f=0;
let count=0;
function check(n)
{
    console.log(n);
    var a=document.getElementById("i"+n).textContent;
    var b=document.getElementById("i"+(n+3)).textContent;
    var c=document.getElementById("i"+(n+6)).textContent;
    if(a==b&&b==c&&a=="X"){
    alert("Player 1 is Winner");
    f=0;
    count=0;
    c=confirm("Do you want to play again??");
    if(c)
    {
        clearall();
    }
    else
    {
        alert("Thank You!!");
    }
    }
    else if(a==b&&b==c&&a=="O"){
    alert("Player 2 is Winner");
    f=0;
    count=0;
    c=confirm("Do you want to play again??");
    if(c)
    {
        clearall();
    }
    else
    {
        alert("Thank You!!");
    }
    }
}
function checkc(n)
{
    count++;
    console.log(n);
    var a=document.getElementById("i"+n).textContent;
    var b=document.getElementById("i"+(n+1)).textContent;
    var c=document.getElementById("i"+(n+2)).textContent;
    if(a==b&&b==c&&a=="X"){
    alert("Player 1 is Winner");
    f=0;
    count=0;
    c=confirm("Do you want to play again??");
    if(c)
    {
        clearall();
    }
    else
    {
        alert("Thank You!!");
    }
}
    else if(a==b&&b==c&&a=="O"){
    alert("Player 2 is Winner");
    f=0;
    count=0;
    c=confirm("Do you want to play again??");
    if(c)
    {
        clearall();
    }
    else
    {
        alert("Thank You!!");
    }
    }
    if(count==9)
    {
       alert("Match Draw");
    }
}
function box(){
    var db=document.getElementById("box");
    for(var i=1;i<=9;i++)
    {
        var d=document.createElement("div");
         d.setAttribute("id","i"+i);d.innerText="";
         d.addEventListener("click",(e)=>{
            if(e.target.textContent!="")
            {
                alert("You cannot change");
                return;
            }
            if(f==0){
            e.target.textContent="X";
            f=1;
            } 
            else if(f==1)
            {
                e.target.textContent="O";
                f=0;
            }
            var k=e.target.id;
            if(k=="i"+1||k=="i"+4||k=="i"+7)
            k=1;
            if(k=="i"+2||k=="i"+5||k=="i"+8)
            k=2;
            if(k=="i"+3||k=="i"+6||k=="i"+9)
            k=3;
            check(k);
            k=e.target.id;
            if(k=="i"+1||k=="i"+2||k=="i"+3)
            k=1;
            if(k=="i"+4||k=="i"+5||k=="i"+6)
            k=4;
            if(k=="i"+7||k=="i"+8||k=="i"+9)
            k=7;
            checkc(k);
        });
         d.textContent=="";
         db.append(d);
    }
}
function clearall(){
    var db=document.getElementById("box");
    for(var i=1;i<=9;i++)
    {
         document.getElementById("i"+i).textContent="";
    }
    
}
