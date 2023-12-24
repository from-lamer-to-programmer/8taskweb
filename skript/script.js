let btn_form = document.getElementById("btn_form");
let close = document.getElementById("popup_close");
let popup = document.getElementById("popup");
let popup_content = document.getElementById('popup_content');

let popup_inp = document.getElementById('popup_inp');

let popup_content_flag = false;

let flagPopup = 0;

btn_form.addEventListener('click', () => {
    openPopap();
    window.location.href = "#form";
    flagPopup = 1;
})

window.addEventListener('popstate', function(event) {
    if(flagPopup == 1){
        closePopap();
        window.location.href = "";
        flagPopup = 0;
    }
});

close.addEventListener('click', () => {
    closePopap();
    window.location.href = "";
})

popup_content.addEventListener('mousedown', () => {
    popup_content_flag = true;
})

popup.addEventListener('click', () => {
    if (popup_content_flag != true) {
        closePopap();
        window.location.href = "";
    } else {
        popup_content_flag = false
    }
})

function closePopap(){
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
}

function openPopap(){
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
}