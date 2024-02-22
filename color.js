function colorChange(){setInterval(() => {
    let body = document.body;
    const characters = "0123456789ABCDEF";
    let hex = "#";
    
    for (let i = 0; i < 6; i++) {
        hex+= characters[Math.floor(Math.random()*16)];
    }
    body.style.backgroundColor=hex;
    document.querySelector(".hex").innerHTML=`Current color code is <b>${hex}</b>`
    
}, 3000);
}



export {colorChange};