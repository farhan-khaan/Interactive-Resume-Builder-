let form = document.getElementById ("res-form") as HTMLFormElement;
let resDispEle = document.getElementById ("res-disply") as HTMLDivElement;
let shareablelinkcontainer = document.getElementById ("Shareablelinkcontainer") as HTMLDivElement;
let shareablelinkElement = document.getElementById ("Shareablelink") as HTMLAnchorElement;
let downloadpdf = document.getElementById ("downloadpdf") as HTMLButtonElement;

    // Handle form
form.addEventListener ("submit", (event:Event) =>{
    event.preventDefault();

    //input values
let userName = (document.getElementById("username") as HTMLInputElement).value;
let name = (document.getElementById("name") as HTMLInputElement).value;
let fname = (document.getElementById("fathername") as HTMLInputElement).value;
let contact = (document.getElementById("contact") as HTMLInputElement).value;
let email = (document.getElementById("email") as HTMLInputElement).value;
let education = (document.getElementById("education") as HTMLInputElement).value;
let exp = (document.getElementById("experience") as HTMLInputElement).value;
let skill = (document.getElementById("skills") as HTMLInputElement).value;

// Save form information 
let resumedata = {
    name,
    fname,
    contact,
    email,
    education,
    exp,
    skill,
}
localStorage.setItem(userName, JSON.stringify(resumedata)); // Save the date locally 

const resHtml = `
<h2> EDITABLE RESUME </h2>
<h3> Personal Information </h3>
<p><b> Name : </b><span contenteditable="true">${name}</span>
<p><b> Father Name : </b><span contenteditable="true">${fname}</span>
<p><b> Contact : </b><span contenteditable="true">${contact}</span>
<p><b> E-mail : </b><span contenteditable="true">${email}</span>

<h3> Education </h3>
<p contenteditable="true"><b> Education : </b>${education}

<h3> Experience </h3>
<p contenteditable="true"><b> Experience : </b>${exp}

<h3> Skills </h3>
<p contenteditable="true"><b> Skills : </b>${skill}
`;

// Disply generated resume 
resDispEle.innerHTML = resHtml;

// Generate Shareable URL with user name 
let shareableURL = `${window.location.origin}?username=${encodeURIComponent(userName)}`;

// Display the shareable link
shareablelinkcontainer.style.display = 'block';
shareablelinkElement.href = shareableURL;
shareablelinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadpdf.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
                        // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value =
        username;
        (document.getElementById('name') as HTMLInputElement).value =
        resumeData.name;
        (document.getElementById('fathername') as HTMLInputElement).value =
        resumeData.fathername;
        (document.getElementById('contact') as HTMLInputElement).value =
        resumeData.contact;
        (document.getElementById('email') as HTMLInputElement).value =
        resumeData.email;
        (document.getElementById('education') as HTMLTextAreaElement).value =
        resumeData.education;
        (document.getElementById('experience') as HTMLTextAreaElement).value
        = resumeData.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value =
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
