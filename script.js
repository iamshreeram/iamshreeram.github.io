function changeColor() {
    var header = document.getElementById("headerbg");
    var footer = document.getElementById("footerbg");

    /*
    // for light colors only
    var color = 'rgb(' + (Math.floor((256-120)*Math.random()) + 230) + ',' + 
                (Math.floor((256-100)*Math.random()) + 230) + ',' + 
                (Math.floor((256-120)*Math.random()) + 230) + ')';
    */

    var color = 'hsl(' + (Math.floor((355-17)*Math.random()) + 330) + ', 65%, 65%)';
    header.style.transition = 'background-color 0.5s ease-out';
    footer.style.transition = 'background-color 0.5s ease-out';  
    header.style.backgroundColor = color;
    footer.style.backgroundColor = color;
}

setInterval(changeColor, 1000);