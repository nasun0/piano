document.addEventListener("keypress", function(e){
    if(e.code === "KeyA") {
        console.log("The 'A' key is pressed.");
        let audio = new Audio("piano_sounds/A.mp3");
        audio.play();
    } else if (e.code === "KeyS") {
        console.log("The 'S' key is pressed.");
        let audio = new Audio("piano_sounds/S.mp3");
        audio.play();
    } else if (e.code === "KeyD") {
        console.log("The 'D' key is pressed.");
        let audio = new Audio("piano_sounds/D.mp3");
        audio.play();
    } else if (e.code === "KeyF") {
        console.log("The 'F' key is pressed.");
        let audio = new Audio("piano_sounds/F.mp3");
        audio.play();
    } else if (e.code === "KeyG") {
        console.log("The 'G' key is pressed.");
        let audio = new Audio("piano_sounds/G.mp3");
        audio.play();
    } else if (e.code === "KeyH") {
        console.log("The 'H' key is pressed.");
        let audio = new Audio("piano_sounds/H.mp3");
        audio.play();
    } else if (e.code === "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audio = new Audio("piano_sounds/J.mp3");
        audio.play();
    } else if (e.code === "KeyW") {
        console.log("The 'W' key is pressed.");
        let audio = new Audio("piano_sounds/W.mp3");
        audio.play();
    } else if (e.code === "KeyE") {
        console.log("The 'E' key is pressed.");
        let audio = new Audio("piano_sounds/E.mp3");
        audio.play();
    } else if (e.code === "KeyT") {
        console.log("The 'T' key is pressed.");
        let audio = new Audio("piano_sounds/T.mp3");
        audio.play();
    } else if (e.code === "KeyY") {
        console.log("The 'Y' key is pressed.");
        let audio = new Audio("piano_sounds/Y.mp3");
        audio.play();
    } else if (e.code === "KeyU") {
        console.log("The 'U' key is pressed.");
        let audio = new Audio("piano_sounds/U.mp3");
        audio.play();
    } else {
        console.log("That key is not bound");
    }
});