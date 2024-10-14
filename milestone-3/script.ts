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
<h2> RESUME </h2>
<h3> Personal Information </h3>
<p><b> Name : </b>${name}
<p><b> Father Name : </b>${fname}
<p><b> Contact : </b>${contact}
<p><b> E-mail : </b>${email}

<h3> Education </h3>
<p><b> Education : </b>${education}

<h3> Experience </h3>
<p><b> Experience : </b>${exp}

<h3> Skills </h3>
<p><b> Skills : </b>${skill}
`;
if(resDispEle) {
    resDispEle.innerHTML = resHtml
}
else {
    console.error("Provide Complete Information")
}

} )
