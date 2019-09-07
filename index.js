//buttons 
var pro = document.querySelector(".pro");
var short = document.querySelector(".short");
var long = document.querySelector(".long");
var min = document.querySelector(".mins");
var sec = document.querySelector(".secs");
var reset = document.querySelector(".reset");
var second = 60;
var p =59;
var s = 29;
var l = 44;
var id;
var add = document.querySelector(".add");
var txt = document.querySelector(".txt");
var tasks = document.querySelector(".tasks");
var clear = document.querySelector(".clear");
var moti = document.querySelector(".motivate");

var fonts = ["Focus on being productive instead of being busy", "A year from now you'll wish you had started today", "Productivity is always the result of a commitment to excellence"]; 
var ct=0;
var inst =  window.setInterval(change, 4000);
function change()
{
    moti.innerHTML = fonts[ct];
    ct++;
    if(ct >= fonts.length)
    {
        ct=0;
    }
}
// functions
pro.addEventListener("click", callpro);
function secp()
{
    pro.disable = true;
    long.disable = true;
    short.disble = true;
    
    min.innerHTML=p;
    second--;
    sec.innerHTML=second;
    if(second===0)
    {
        p--;
        min.innerHTML=p;
        second=60;
    }
    else if(p<0) 
    {
       min.innerHTML=0;
       sec.innerHTML=0;
       swal('Good Job', 'You accomplished your tasks','success');   
    }
}
function callpro()
{
    min.innerHTML=60;
    sec.innerHTML=00;
    pro.disable = true;
    long.disable = true;
    short.disble = true;
    id=window.setInterval(secp, 1000);
}

// short 
short.addEventListener("click", callshort);
function secsh()
{
    min.innerHTML=s;
    second--;
    sec.innerHTML=second;
    if(second===0)
    {
        s--;
        min.innerHTML=s;
        second=60;
    }
    else if(s<0) 
    {
                min.innerHTML = 0;
                sec.innerHTML = 0;
            
    }
}
function callshort()
{
    min.innerHTML=30;
    sec.innerHTML=00

    id=window.setInterval(secsh,1000);
}

// long
long.addEventListener("click", calllong);
function seclg()
{
    min.innerHTML=l;
    second--;
    sec.innerHTML=second;
    if(second===0)
    {
        l--;
        min.innerHTML=l;
        second=60;
    }
    else if(l<0) 
    {
                min.innerHTML = 0;
                sec.innerHTML = 0;
            
    }
}
function calllong()
{
    min.innerHTML=45;
    sec.innerHTML=00;
    id=window.setInterval(seclg, 1000);
}

// adding tasks
add.addEventListener("click", tasksadded);
function tasksadded()
{
    if(txt.value==="")
    {
        
        swal("Fields Empty", "Ensure you add the tasks!");
    }
    else{
        const addon = document.createElement("li");
        addon.className="addtxt";
        addon.innerHTML = txt.value;
        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        addon.appendChild(link);
        tasks.append(addon);
        txt.value="";

    }
}

clear.addEventListener("click", clrtasks);
function clrtasks()
{
    tasks.innerHTML=``;
}

// reset
reset.addEventListener("click", stop);
function stop()
{
    swal({
        title:"YOU QUIT",
        text:"Task incomplete ",
    })
    clearTimeout(id);
    min.innerHTML=0;
    sec.innerHTML=0;
}





