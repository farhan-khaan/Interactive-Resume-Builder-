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
    var resHtml = "\n<h2> EDITABLE RESUME </h2>\n<h3> Personal Information </h3>\n<p><b> Name : </b><span contenteditable=\"true\">".concat(name, "</span>\n<p><b> Father Name : </b><span contenteditable=\"true\">").concat(fname, "</span>\n<p><b> Contact : </b><span contenteditable=\"true\">").concat(contact, "</span>\n<p><b> E-mail : </b><span contenteditable=\"true\">").concat(email, "</span>\n\n<h3> Education </h3>\n<p contenteditable=\"true\"><b> Education : </b>").concat(education, "\n\n<h3> Experience </h3>\n<p contenteditable=\"true\"><b> Experience : </b>").concat(exp, "\n\n<h3> Skills </h3>\n<p contenteditable=\"true\"><b> Skills : </b>").concat(skill, "\n");
    if (resDispEle) {
        resDispEle.innerHTML = resHtml;
    }
    else {
        console.error("Provide Complete Information");
    }
});
