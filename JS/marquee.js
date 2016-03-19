var context;
var text = "";
function marquee()
{
    context = document.getElementById("canvasId").getContext("2d");
    setInterval("animate()", 0.00001);
    pos = 400;
    text = "idiosyncratic";
}

function animate()
{
    context.globalAlpha = 0.7;
    context.fillStyle = '#000066';
    context.fillRect(400, 0, 700, 700);
    
    var metrics = context.measureText(text);
    var textWidth = metrics.width;
    pos = pos+5;
    if (pos > 1100-textWidth)
    {
	pos = 400;
    }
    context.font = '40px _sans';
    context.fillStyle = 'red';
    context.fillText (text, pos, 250);
}

   
