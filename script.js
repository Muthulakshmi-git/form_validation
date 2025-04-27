
var btn = document.getElementById("btn")

btn.addEventListener("click", function (event) {

    event.preventDefault();


    var nameRegex = /^[a-zA-Z]+$/
    var passwordRegex = /^[a-zA-Z0-9]{7,15}/


    var nameinput = document.getElementById("nameinput")
    var passwordinput = document.getElementById("passwordinput")
    var repasswordinput = document.getElementById("repasswordinput")

    var nameerror = document.getElementById("nameerror")
    var passworderror = document.getElementById("passworderror")
    var repassworderror = document.getElementById("repassworderror")

    var validate = true

    if (nameRegex.test(nameinput.value) == false)
         {
        nameerror.style.display = "inline"
        validate = false
        
    }
    else
    {
        nameerror.style.display = "none"
       

    }
    if(passwordRegex.test(passwordinput.value) == false)
    {
        passworderror.style.display = "inline"
        validate = false
    }
    else{
        passworderror.style.display = "none"
        
    }
    if(repasswordinput.value == "")
    {
         repassworderror.textContent = "Enter a confirm password"
        repassworderror.style.display = "inline"
        validate = false
    }
    else if (passwordinput.value != repasswordinput.value){
        
        repassworderror.textContent ="Password doesn't match"
        repassworderror.style.display = "inline"
        validate = false
    }
    else{
         repassworderror.style.display = "none"
         
         
    }

    if(validate === true )
    {
        var verified = document.getElementById("verified")
        verified.style.display = "inline"
    }

})
