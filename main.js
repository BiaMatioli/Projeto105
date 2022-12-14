Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function tirarFoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="img" src="' + data_uri + '"/>';
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6EDQYzhN6/");

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function identificar() {
    foto = document.getElementById("img");
    classifier.classify(foto, gorResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("spanEmocao").innerHTML = results[0];
        document.getElementById("spanFinal").innerHTML = results[0].confidence.toFixed(2);
    }
}