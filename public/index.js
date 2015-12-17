$(document).ready(function(){
  var monthInNum = parseInt(moment().format("MM") - 1);
  var currentYear = parseInt(moment().format("YYYY"));
  var startOfMonth = moment().startOf("month")._d;
  // var endOfMonth = moment().endOf("month")._d;
  var endOfMonth = moment(currentYear+"-"+ monthInNum, "YYYY-MM").daysInMonth();
  
  var currentMonth = moment().format("MMMM");

  var $month = $("#currentMonth");
  var $year = $("#currentYear");
  var $nextMonth = $("#nextMonth");
  var $previousMonth = $("#previousMonth");
  
  $month.append(currentMonth);
  $year.append(" "+currentYear);
  console.log("monthInNum", monthInNum);
  var start = moment([2016, 0]);
  console.log(moment(start).startOf('month'), "heyy");

  $nextMonth.on("click", function(e){
    if(monthInNum + 1 >= 12){
      currentYear++;
      monthInNum = 0;
      var firstDay = moment([currentYear, monthInNum])._d;
      var lastDay = moment(currentYear+"-"+1, "YYYY-MM").daysInMonth();
      $(".dateContent").empty();
      calendar(firstDay, lastDay);
      // console.log(date.getDay());
    }
  });

  function calendar(firstDay, lastDay){
    var firstDayOfMonth = firstDay.getDay();
    // var lastDateOfMonth = lastDay.getDate();
    var $theFirst = $("#"+firstDayOfMonth);
    var today = moment().format("Do").slice(0,-2);
    $theFirst.append(1);
    for(var i = 1; i < lastDay; i++){
      var id = firstDayOfMonth + i
      var date = i+1;
      if(date == today){
        $("#"+id).addClass("today").append(date);
      }
      else{
        $("#"+id).append(date);
      }
    }
  }
  calendar(startOfMonth, endOfMonth);
});
