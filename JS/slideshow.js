var image=["./Images/andrews.jpg","./Images/fiitjee.jpg","./Images/iiith.jpg"];
var i=0;
function slideshow(){
	var images=document.getElementById("trans");
	images.src=image[i];
	if(i<2)
	{
		i++;
	}
	else
	{
		i=0;
	}
}
setInterval('slideshow()',3000);
function changeopacity(){
	document.body.style.opacity="1";
	document.body.style.transform="rotate(360deg)";
	full();
}
var ful=setInterval('changeopacity()',500000);
clearInterval(ful);


/*function full(){
	document.body.style.opacity="1";
} */
function change(){
	var date=new Date();
	document.getElementById("time").innerHTML=date.toLocaleTimeString();
}
setInterval('change()',1000);