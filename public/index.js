$(document).ready(function(){
  var months = [ "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ];
  var monthInNum = parseInt(moment().format("MM") - 1);
  var currentYear = parseInt(moment().format("YYYY"));
  var yearCounter = currentYear;
  var startOfMonth = moment().startOf("month")._d;
  var endOfMonth = moment(currentYear+"-"+ monthInNum, "YYYY-MM").daysInMonth();

  var $month = $("#currentMonth");
  var $year = $("#currentYear");
  var $nextMonth = $("#nextMonth");
  var $previousMonth = $("#previousMonth");
  
  $month.append(months[monthInNum]);
  $year.append(" "+currentYear);
  var start = moment([2016, 0]);
  console.log(moment(start).startOf('month'), "heyy");

  $previousMonth.on("click", function(e){
    if(monthInNum - 1 <= 1){
      // monthInNumont
    }
  });

  $nextMonth.on("click", function(e){
    if(monthInNum + 1 >= 12){
      yearCounter++;
      monthInNum = 0;
      var firstDay = moment([yearCounter, monthInNum+1])._d;
      var lastDay = moment(yearCounter+"-"+1, "YYYY-MM").daysInMonth();
      $(".dateContent").empty();
      $month.empty().append(months[0]);
      $year.empty().append(" " + yearCounter);
      $("td").removeClass("today");
      calendar(firstDay, lastDay);
    }
    else{
      monthInNum++;
      var firstDay = moment([yearCounter, monthInNum])._d;
      var lastDay = moment(yearCounter+"-"+(monthInNum+1), "YYYY-MM").daysInMonth();
      $(".dateContent").empty();
      console.log(lastDay, monthInNum, "hey");
      $month.empty().append(months[monthInNum]);
      $year.empty().append(" " + yearCounter);
      $("td").removeClass("today");
      calendar(firstDay, lastDay);
    }
  });

  function calendar(firstDay, lastDay){
    var firstDayOfMonth = firstDay.getDay();
    var year = firstDay.getFullYear();
    // var lastDateOfMonth = lastDay.getDate();
    var $theFirst = $("#"+firstDayOfMonth);
    var today = moment().format("Do").slice(0,-2);
    $theFirst.append(1);
    for(var i = 1; i < lastDay; i++){
      var id = firstDayOfMonth + i
      var date = i+1;
      if(date == today && year === currentYear){
        $("#"+id).addClass("today").append(date);
      }
      else{
        $("#"+id).append(date);
      }
    }
  }
  calendar(startOfMonth, endOfMonth);
});
