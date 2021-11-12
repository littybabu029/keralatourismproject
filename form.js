let finame=document.getElementById("firstname");
let laname=document.getElementById("lastname");
let mob=document.getElementById("mobilenumber");
let pwd=document.getElementById("password");
function fname(){
     if (finame.value.trim()==""||laname.value.trim()==""){
        bfname.innerHTML ="Name cannot be empty"
        bfname.style.color = "red";
        return false;
        }
    else{
        return true;
    }}

function fmob()
{
    var mobexp = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((mob.value.match(mobexp)))
    {
      bmob.innerHTML="Valid number";
      bmob.style.color="green";
      return true;
        }
      else
        {
        bmob.innerHTML="Invalid number";
        bmob.style.color="red";
        return false;
        }
}

function fpass(){
    let passexp=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
    if (passexp.test(pwd.value)) {
        bpwd.innerHTML="Strong Password";
        bpwd.style.color="green";
        return true;
        } 
    else {
         bpwd.innerHTML = "Invalid Credentials.Try Again"
         bpwd.style.color = "red";
        return false;
    
    }}