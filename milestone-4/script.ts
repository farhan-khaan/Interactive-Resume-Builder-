let form = document.getElementById ("res-form") as HTMLFormElement;
let resDispEle = document.getElementById ("res-disply") as HTMLDivElement;

form.addEventListener ("submit", (event:Event) =>{
    event.preventDefault();
//input values
let name = (document.getElementById("name") as HTMLInputElement).value;
let fname = (document.getElementById("fathername") as HTMLInputElement).value;
let contact = (document.getElementById("contact") as HTMLInputElement).value;
let email = (document.getElementById("email") as HTMLInputElement).value;
let education = (document.getElementById("education") as HTMLInputElement).value;
let exp = (document.getElementById("experience") as HTMLInputElement).value;
let skill = (document.getElementById("skills") as HTMLInputElement).value;

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
if(resDispEle) {
    resDispEle.innerHTML = resHtml
}
else {
    console.error("Provide Complete Information")
}

} )
