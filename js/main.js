function vid(){
    let video= document.getElementById('vid');
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}

const form=document.getElementById("form")
const username=document.getElementById("name")
const mail=document.getElementById("mail")
const message=document.getElementById("msg")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkers();
})

function checkers(){
  const nameV= username.value;
  const mailV= mail.value;
  const messageV= message.value;
    if(nameV===""){
        setError (username, "عذراً، برجاء إدخال الاسم");
    } else{
        setSucc (username)
    }
    if(mailV==="") {
        setError (mail, "عذراً، برجاء إدخال البريد")
    }else{
        setSucc(mail)
    }
    if(messageV===""){
        setError(msg, "برجاء كتابة الرسالة")
    } else{
        setSucc(msg)
    }
};
function setError(input, message){
    const formControl= input.parentElement;
    const small= formControl.querySelector("small")

    small.innerText=message;
    formControl.className = ("f-control err")

}

function setSucc (input) {
    const formControl= input.parentElement;
    formControl.className = ("f-control succ")

}

document.getElementById("year").innerHTML= new Date().getFullYear();