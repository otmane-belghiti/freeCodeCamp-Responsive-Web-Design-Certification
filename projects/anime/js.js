
let content1 = document.getElementById("content1")
let content2 = document.getElementById("content2")
let content3 = document.getElementById("content3")
let content4 = document.getElementById("content4")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

function openhtml(){
    //content1.classList.add("show")
    //content2.classList.remove("show")
    //content3.classList.remove("show")
    //content4.classList.remove("show")
    content1.style.opacity="1";
    content2.style.opacity="0";
    content3.style.opacity="0";
    content4.style.opacity="0";
    btn1.classList.add("style")
    btn2.classList.remove("style")
    btn3.classList.remove("style")
    btn4.classList.remove("style")
}

function opencss(){
    content1.style.opacity="0";
    content2.style.opacity="1";
    content3.style.opacity="0";
    content4.style.opacity="0";
    btn1.classList.remove("style")
    btn2.classList.add("style")
    btn3.classList.remove("style")
    btn4.classList.remove("style")
}

function openjs(){
    content1.style.opacity="0";
    content2.style.opacity="0";
    content3.style.opacity="1";
    content4.style.opacity="0";
    btn1.classList.remove("style")
    btn2.classList.remove("style")
    btn3.classList.add("style")
    btn4.classList.remove("style")
}

function open4(){
    content1.style.opacity="0";
    content2.style.opacity="0";
    content3.style.opacity="0";
    content4.style.opacity="1";
    btn1.classList.remove("style")
    btn2.classList.remove("style")
    btn3.classList.remove("style")
    btn4.classList.add("style")
}



let image = document.getElementById('img1');
let image1 = document.getElementById('img2');
let image2 = document.getElementById('img3');
let image3 = document.getElementById('img4');
let images = ['images/pngegg (10).png','images/pngegg (12).png','images/pngegg (8).png' ,'images/pngegg (13).png','images/naruto/pngegg.png' ];
setInterval(function(){
    let random = Math.floor(Math.random()*5);
    image.src= images[random]
},2000);