let history;
let count = 0

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "chrome_history.json";
    loadJSON(url, loaded);
    background(255);
    textSize(60)
    textAlign(CENTER, CENTER);
    frameRate(8);
}

function draw() {
    background(255, 50);
    // ellipse(mouseX, mouseY, 50, 50);
    let textGroesse = map(history[count].visitCount, 1, 20, 36, 72);
    textSize(textGroesse);

    let r = map(history[count].visitCount, 1, 20, 36, 70)
    color(0, r, 0)

    text(history[count].title, width / 2, height / 2);
    count = count + 1;

    //count++
}

function loaded(data) {
    history = data;
    console.log(history[0].title);

    let aktuellestunde = 15;
    let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255)
    console.log(deckungsgrad)

}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}