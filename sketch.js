const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundIamge();
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    if (backgroundImg) {
        background(backgroundImg);
    }
    // add condition to check if any background image is there to add
    text("time"+hour,50,50);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundIamge() {
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responceJson = await responce.json();

    var dateTime = responceJson.datetime;
     hour = dateTime.slice(11, 13);

    if (hour >= 06 && hour <= 11) {
        bg = "sunrise1.png";
    } else if (hour > 11 && hour <= 13) {
        bg = "sunrise2.jpg";
    } else if (hour > 13 && hour <= 15) {
        bg = "sunrise3.png";
    } else if (hour > 15 && hour <= 17) {
        bg = "sunrise4.png"
    }


    backgroundImg = loadImage(bg);

}
