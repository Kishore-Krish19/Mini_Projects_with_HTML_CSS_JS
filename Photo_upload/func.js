var image = null;
var canvas = document.getElementById("can");

function upload() {
    var input = document.querySelector('input[type="file"]');
    var ctx = canvas.getContext("2d");

    if (!input.files.length) {
        alert("Please select an image!");
        return;
    }

    let file = input.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        let img = new Image();
        img.src = e.target.result;

        img.onload = function () {

            image = img;

            // Resize logic (keeping aspect ratio)
            let maxWidth = 500;
            let maxHeight = 450;
            let width = img.width;
            let height = img.height;

            if (width > maxWidth || height > maxHeight) {
                let scale = Math.min(maxWidth / width, maxHeight / height);
                width *= scale;
                height *= scale;
            }

            // Set canvas size and draw image
            canvas.width = width;
            canvas.height = height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, width, height);

            alert("Image uploaded successfully!");
        };
    };

    reader.readAsDataURL(file);
}

function makegray() {
    if (!image) {
        alert("Upload an image first!");
        return;
    }

    var canvasGray = document.getElementById("can1");
    var ctxGray = canvasGray.getContext("2d");

    // Resize logic (same as original canvas)
    let maxWidth = 500;
    let maxHeight = 450;
    let width = image.width;
    let height = image.height;

    if (width > maxWidth || height > maxHeight) {
        let scale = Math.min(maxWidth / width, maxHeight / height);
        width *= scale;
        height *= scale;
    }

    // Resize grayscale canvas
    canvasGray.width = width;
    canvasGray.height = height;
    ctxGray.clearRect(0, 0, canvasGray.width, canvasGray.height);
    ctxGray.drawImage(image, 0, 0, width, height);

    // Convert image to grayscale
    let imageData = ctxGray.getImageData(0, 0, width, height);
    let data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // Red
        data[i + 1] = avg; // Green
        data[i + 2] = avg; // Blue
    }

    ctxGray.putImageData(imageData, 0, 0);
    alert("Grayscale image created successfully!");
}
