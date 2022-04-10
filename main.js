function preload()
{

}
function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();

    color="";
}
function draw()
{
    image(video, 0,0,600,400);
    tint(color);
}
function take_snapshot()
{
    save("cool.png");
}
function filter_color()
{
    color = document.getElementById("color_name").value;
}