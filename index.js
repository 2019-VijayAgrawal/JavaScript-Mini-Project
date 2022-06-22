function login(){
    console.log("clicked");
   
    let username = document.getElementById("name").value;
    let password = document.getElementById("pass").value;

    if(username === "vijay" && password === "123456"){
        alert("login successfull");
        window.location.assign("display.html");
    }
    else{
        alert("Login failed");
        window.location.href = "index.html";
        
    }
}