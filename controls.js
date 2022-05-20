const createControls = () => {
    const controls = {
        forward: false,
        right: false,
        reverse: false,
        left: false
    }

    document.onkeydown = (event) => {
        switch (event.key) {
            case "ArrowUp":
                controls.forward = true;
                break;
            case "ArrowRight":
                controls.right = true;
                break;
            case "ArrowDown":
                controls.reverse = true;
                break;
            case "ArrowLeft":
                controls.left = true;
                break;
        }
    }

    document.onkeyup = (event) => {
        switch (event.key) {
            case "ArrowUp":
                controls.forward = false;
                break;
            case "ArrowRight":
                controls.right = false;
                break;
            case "ArrowDown":
                controls.reverse = false;
                break;
            case "ArrowLeft":
                controls.left = false;
                break;
        }
    }

    return controls;
}