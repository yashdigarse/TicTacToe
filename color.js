function colorChange(){setInterval(() => {
    let body = document.body;
    const characters = "0123456789ABCDEF";
    let hex = "#";
    
    for (let i = 0; i < 6; i++) {
        hex+= characters[Math.floor(Math.random()*16)];
    }
    body.style.backgroundColor=hex;
    
}, 2000);
}



export {colorChange};