var form = document.getElementById("res-form");
var resDispEle = document.getElementById("res-disply");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //input values
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fathername").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var exp = document.getElementById("experience").value;
    var skill = document.getElementById("skills").value;
    var resHtml = "\n<h2> RESUME </h2>\n<h3> Personal Information </h3>\n<p><b> Name : </b>".concat(name, "\n<p><b> Father Name : </b>").concat(fname, "\n<p><b> Contact : </b>").concat(contact, "\n<p><b> E-mail : </b>").concat(email, "\n\n<h3> Education </h3>\n<p><b> Education : </b>").concat(education, "\n\n<h3> Experience </h3>\n<p><b> Experience : </b>").concat(exp, "\n\n<h3> Skills </h3>\n<p><b> Skills : </b>").concat(skill, "\n");
    if (resDispEle) {
        resDispEle.innerHTML = resHtml;
    }
    else {
        console.error("Provide Complete Information");
    }
});
