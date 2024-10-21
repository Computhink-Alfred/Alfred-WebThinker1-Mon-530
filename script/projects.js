window.onload = () => {
    const canvas = document.getElementById('canvasBoard');
    let ctx = canvas.getContext('2d');

    // ctx.beginPath();
    // ctx.moveTo(0,0);
    // ctx.lineTo(100,100);
    // ctx.moveTo(500,0);
    // ctx.lineTo(800,600);
    // ctx.stroke();

    // ctx.fillStyle = "rgba(0, 200, 0, 0.1)";
    // ctx.fillRect(10,10,100,100);

    // ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
    // ctx.fillRect(100,100,200,200);

    ctx.lineWidth = 10;
    ctx.strokeStyle = "rgb(200, 0, 0)"
    ctx.fillStyle = "rgb(0, 200, 0)"

    ctx.beginPath();
    ctx.arc(400,300,100, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill()
}