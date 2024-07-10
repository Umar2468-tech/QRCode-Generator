

let button = document.querySelector('#btn');
let qr_img = document.querySelector('#qr-img');
let loader = document.querySelector('.loader');



button.addEventListener("click",()=>{
    loader.style.display = "block"
    qr_img.style.display = "none"
    const input = document.querySelector('#input').value
    console.log(input)
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
    qr_img.src = apig
})

qr_img.onload = ()=>{
     loader.style.display = "none"
    qr_img.style.display = "block"
}

