var form = document.getElementById("res-form");
var resDispEle = document.getElementById("res-disply");
var shareablelinkcontainer = document.getElementById("Shareablelinkcontainer");
var shareablelinkElement = document.getElementById("Shareablelink");
var downloadpdf = document.getElementById("downloadpdf");
// Handle form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //input values
    var userName = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fathername").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var exp = document.getElementById("experience").value;
    var skill = document.getElementById("skills").value;
    // Save form information 
    var resumedata = {
        name: name,
        fname: fname,
        contact: contact,
        email: email,
        education: education,
        exp: exp,
        skill: skill,
    };
    localStorage.setItem(userName, JSON.stringify(resumedata)); // Save the date locally 
    var resHtml = "\n<h2> EDITABLE RESUME </h2>\n<h3> Personal Information </h3>\n<p><b> Name : </b><span contenteditable=\"true\">".concat(name, "</span>\n<p><b> Father Name : </b><span contenteditable=\"true\">").concat(fname, "</span>\n<p><b> Contact : </b><span contenteditable=\"true\">").concat(contact, "</span>\n<p><b> E-mail : </b><span contenteditable=\"true\">").concat(email, "</span>\n\n<h3> Education </h3>\n<p contenteditable=\"true\"><b> Education : </b>").concat(education, "\n\n<h3> Experience </h3>\n<p contenteditable=\"true\"><b> Experience : </b>").concat(exp, "\n\n<h3> Skills </h3>\n<p contenteditable=\"true\"><b> Skills : </b>").concat(skill, "\n");
    // Disply generated resume 
    resDispEle.innerHTML = resHtml;
    // Generate Shareable URL with user name 
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(userName));
    // Display the shareable link
    shareablelinkcontainer.style.display = 'block';
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadpdf.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('fathername').value =
                resumeData.fathername;
            document.getElementById('contact').value =
                resumeData.contact;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
// if(resDispEle) {
//     resDispEle.innerHTML = resHtml
// }
// else {
//     console.error("Provide Complete Information")
// }
// } )
