function check()
{
	var x,output;
	x=document.getElementById("answer").value;
	if(x=="idiosyncratic")
	{
		output= "Your absolutely right ! Go ahead --->" ;
	}
	else
	{
		output="Your wrong. Please try again !" ;
	}
	document.getElementById("output").innerHTML = output;
}
