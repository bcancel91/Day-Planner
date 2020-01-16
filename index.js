$(document).ready(function(){

var date = new Date();

 var hours = JSON.parse(localStorage.getItem("hours"))

console.log(hours)
 
$(".save").click(function(){

 var task = $(this).prev().val();

 var time = $(this).attr("data-time");

 hours[time] = task

 var hoursSting = JSON.stringify(hours);

 localStorage.setItem("hours", hoursSting);
 


})

 




































































// $(".time").addClass("d-flex align-items-center justify-content-end");

// $(".save").addClass("rounded");
// var task;
// var input = document.getElementById("input0").val(text);
//         var time = $(this).attr("data-time");

//       $(".save").click(function(){
        
        
//         alert(input);
    
    
//         if(time = "9am"){
            
//          }
        
//       })


     


      //{
     //   var task = $("#input0").val();
     //   localstorage.setItem("Task",task);
     // }
















































})