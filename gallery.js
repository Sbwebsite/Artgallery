
function upDate(previewPicture){
    document.getElementById('image').style.backgroundImage = 'url(' + previewPicture.src + ')';
    document.getElementById('image').innerText = previewPicture.alt;
}

function unDo(){

    document.getElementById('image').style.backgroundImage = "url('original.jpeg')";
    document.getElementById('image').innerText = 'Hover over an image below to display here.';
}

function onLoadFunction() {
    console.log("Page has finished loading!");
    addTabindexToImages();
}

window.onload =onLoadFunction;


function addTabindexToImages() {

    var my_imag = document.querySelectorAll("img")
    for (let i = 0; i < my_imag.length; i++) {
    my_imag[i].setAttribute("tabindex",i+1);
}

}