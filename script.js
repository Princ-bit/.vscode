function data() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;

    if (a == "" || b == "" || c == "" || d == "") {
        alert("All fields are mandatory 😑");
        return false;   
    } 
    else if (b.length<10||b.length>10) {
        alert("!!!Please Enter valid number:number should be of 10 digits");
        return false;   }
        else if(isNaN(b)){
            alert("Only numbers are allowed!! Please enter only numbers")
            return false;
        }
        else if(c!=d){
            alert("Please enter same password");
            return false;
        }

        else {
        return true;   
    }
}
