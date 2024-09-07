const skills = document.querySelector("#List") as HTMLDivElement;
const show_more = document.querySelector(".button") as HTMLButtonElement;

if(show_more){
  show_more.addEventListener("click",()=>{
    if(skills.style.display ===""||skills.style.display ==="none" ){
      skills.style.display = "block";
      show_more.innerText="less";
    }else{
      skills.style.display = "none";
      show_more.innerText=" more";

    }
  })
}