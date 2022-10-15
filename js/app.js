
/**
 * Mohammed Hossane
 * mohammedhossane0.0@gmail.com
 * 
 * Starts the animation of an image.
 */
function playAnimation(){
    //selects the "img" and changes the properties to a 3 second animation that goes on infinently. 
    document.querySelector("img").style.setProperty("animation", "3s ease 0s infinite normal none running img")
}

function stopAnimation(){
    document.querySelector("img").style.setProperty("animation", "3s ease 0s 0 normal none running img")
}
