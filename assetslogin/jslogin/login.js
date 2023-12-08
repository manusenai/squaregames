document.querySelector("#login").addEventListener("click",()=>{
    fetch("http://192.168.1.24:3000/login",{
    method: "POST",
    headers: {
    'Content-type' : 'application/json'
    },
    body: JSON.stringify({
    "user" : document.querySelector("#user").value,
    "pass" : document.querySelector("#pass").value
    })
    }).then((res)=>{
    if(res.status == 200){
        
    window.location.href = "./index.html"; target="_blank"
    }
    })
    })

    