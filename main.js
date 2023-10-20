Webcam.set({
    width:350,
    heigh:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera")
function take_pic() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="pic" src="'+img+'">';
    });
}
image_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kiANumBtn/",modelOtis);
function modelOtis() {
    console.log("model loaded successfully");
}