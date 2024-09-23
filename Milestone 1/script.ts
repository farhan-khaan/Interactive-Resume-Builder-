// $(document).ready(function() {
//       var $scramble = $(".scramble");
//       $scramble.scramble(3000, 20, "alphabet", true);
// });

// var time1 = gsap.timeline();
// time1.to (".loading",{
//     opacity : 0,
//     delay : 2.5,
// })

// .to(".loader",{
// opacity : 0,
// duration :1,
// ease:"Expo.easeInOut",
// })

// .to(".loader",{
// y:"100%",
// duration:1,
// })

const ShowHide = document.getElementById("ShowHide") as HTMLButtonElement
const skill = document.getElementById("skills") as HTMLElement

ShowHide.addEventListener ("click",()=>{
    if(skill.style.display === "none"){
        skill.style.display = "block"
    } else {
        skill.style.display = 'none'
    }
});
