function spinWheel() {
    const wheel = document.getElementById('wheel-img');
    const newDegree = Math.floor(Math.random() * 360) + 1800; 
    
    wheel.style.transform = `rotate(${newDegree}deg)`;
    

}
spinWheel();