// Display today's day and date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);






$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");




    // Save text in local storage
    localStorage.setItem(time, value);
    $(".hide").addClass("show");
    setTimeout(function () {
      $(".hide").removeClass("show");
    }, 5000);
  });




  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // To check the time and add the classes for background indicators
      if (blockHour < timeNow) {
        $(this).addClass("past");
      } else if (blockHour === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
    // load any saved data from localStorage

    // Get item from local storage if any
    

  


    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
  }






  timeTracker();
});
