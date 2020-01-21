$(document).ready(function(){

var date = new Date();

 var hours = JSON.parse(localStorage.getItem("hours"))
 if(hours===null){
     hours =[];
     localStorage.setItem("hours", JSON.stringify(hours));
 }

console.log(hours)
 
$(".save").click(function(){

 var task = $(this).prev().val();

 var time = parseInt($(this).attr("data-time"));

 hours[time] = task

 var hoursSting = JSON.stringify(hours);

 localStorage.setItem("hours", hoursSting);
 
 

})


 
 var timeColors = $("textarea");
 var currentHour = moment().hour();
 
 


 for (var i = 0; i < timeColors.length; i++){
     
     var timeText = timeColors.eq(i).attr("data-txt");
     console.log(timeText)
    var timeNum = parseInt(timeText);
    if(timeNum < currentHour){
        timeColors.eq(i).css("backgroundColor", "grey")
    }
    else if( timeNum === currentHour){
        timeColors.eq(i).css("backgroundColor", "red")

    }
    else{timeColors.eq(i).css("backgroundColor", "red")
}
   
 }


































































































})