const title = document.querySelector("div.hello:first-child h1");

function handClick() {
    const nowColor = title.style.color;
    let newColor;
    if (nowColor === "blue") {
        newColor = "rosybrown";
    } else{
        newColor = "blue";
    }
    title.style.color = newColor;
}

/*진짜 뭔말인지 하나도 모르겠네 옘병*/
function handClick2() {
    const active = "active";
    title.classList.toggle("active");
    /* if(title.classList.contains(active)){
        title.classList.remove(active);
    } else {
        title.classList.add(active);   
    }
    */
}

title.onclick = handClick2;