let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let ele=document.createElement("li");
    ele.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    ul.appendChild(ele);
    ele.appendChild(delbtn);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let x=event.target.parentElement;
        x.remove();
    }

})


// let del=document.querySelectorAll(".delete");
// for(x of del){
//     x.addEventListener("click",function(){
//         console.log("element deleted")//parent for del btn is li : use navigation
//         let parent=x.parentElement;
//         parent.remove();
//     })
// }

