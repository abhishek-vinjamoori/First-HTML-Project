function age()
{
    var my = new Date("January 12, 1997 00:10:04");
    var today= new Date();
    var mil=today-my; 
    var day=mil/86400000;
    var mill=day/365;    
    document.getElementById("myage").innerHTML=today-my +  " " + "milliseconds";
    document.getElementById("days").innerHTML=Math.round(day) + " " + "days";
    document.getElementById("years").innerHTML=Math.round(mill) + " " + "years";
}
setInterval(age,1);
