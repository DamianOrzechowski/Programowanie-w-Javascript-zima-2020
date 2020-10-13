let galleryImages = document.querySelectorAll(".gallery-img");
let getLastestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image , index) {
image.onclick = function() {
    let getElementCss = window.getComputedStyle(image);
    let getFullImgUrl = getElementCss.getPropertyValue("background-image");
    let getImgUrlPos = getFullImgUrl.split("/img/th/");
    let setNewImgUrl = getImgUrlPos[1].replace('")','');
    
    getLastestOpenedImg = index  + 1;

    let container = document.body;
    let newImgWindow = document.createElement("div");
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute("class","img-window");
    newImgWindow.setAttribute("onclick","closeImg()");

    let newImg = document.createElement("img");
    newImgWindow.appendChild(newImg);
    newImg.setAttribute("src","img/" + setNewImgUrl );

}

    });
}