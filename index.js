function login(){
    console.log("clicked");
   
    let username = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    let login_err = document.getElementById("login error");
    if(username === '' && password === ''){
        login_err.innerHTML = "Login Form is Empty!";
        login_err.style.color = "white";
        login_err.style.display = "block";
        login_err.style.backgroundColor = "red"
        login_err.style.fontSize = "2rem";
        return false; 
    }
     else if(username == ''){
        login_err.innerHTML = "Please Enter the User Name";
        login_err.style.color = "white";
        login_err.style.display = "block";
        login_err.style.backgroundColor = "red"
        login_err.style.fontSize = "2rem";
        return false
    }
    else if(password === ""){
        login_err.innerHTML = "Password is Empty";
        login_err.style.color = "white";
        login_err.style.display = "block";
        login_err.style.backgroundColor = "red"
        login_err.style.fontSize = "2rem";
        return false;
    }
     else if(username === "vijay" && password === "123456"){
        alert("login successfull");
        window.location.assign("display.html");
    }
    else if(username != "vijay" && password != "123456"){
        alert("Login failed");
        window.location.href = "index.html";
        
    }
}