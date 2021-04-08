Webcam.set({
    height: 250,
    width: 450,
    image_format: 'png',
    png_quality: 200
});
Camera = document.getElementById("Camera");
Webcam.attach("Camera");
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = "<img src='" + data_uri + "' id='Img_C'>"
    })
}
console.log("ml5 version: " + ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wx-gqGunE/model.json', MLoaded);
function MLoaded(){
    console.log("Model Loaded!")
    Album();
}
function Album(){
    synth = window.speechSynthesis;
    speakData = "Model Loaded!";
    UtterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(UtterThis);
}
function Predict(){
    image = document.getElementById("Img_C");
    classifier.classify(image, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("Result_Ges").innerHTML = result[0].label;
        document.getElementById("Result_Ges_2").innerHTML = result[1].label;
    }
    if(result[0].label == "Yo!"){
        document.getElementById("Up_1").innerHTML = "&#9996;";
    }
    if(result[0].label == "Needle"){
        document.getElementById("Up_1").innerHTML = "&#128070;";
    }
    if(result[0].label == "Best"){
        document.getElementById("Up_1").innerHTML = "&#128077;";
    }

    if(result[1].label == "Yo!"){
        document.getElementById("Up_2").innerHTML = "&#9996;";
    }
    if(result[1].label == "Needle"){
        document.getElementById("Up_2").innerHTML = "&#128070;";
    }
    if(result[1].label == "Best"){
        document.getElementById("Up_2").innerHTML = "&#128077;";
    }
}