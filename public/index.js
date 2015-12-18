$(document).ready(function(){
  var months = [ "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ];
  var monthInNum = parseInt(moment().format("MM") - 1);
  var currentYear = parseInt(moment().format("YYYY"));
  var currentMonth = moment().format("MM");
  var yearCounter = currentYear;
  var startOfMonth = moment().startOf("month")._d;
  var endOfMonth = moment(currentYear+"-"+ (monthInNum+1), "YYYY-MM").daysInMonth();

  var $month = $("#currentMonth");
  var $year = $("#currentYear");
  var $nextMonth = $("#nextMonth");
  var $previousMonth = $("#previousMonth");
  
  $month.append(months[monthInNum]);
  $year.append(" "+currentYear);
  var start = moment([2016, 0]);

  $previousMonth.on("click", function(e){
    if(monthInNum - 1 <= 1){
      monthInNum = 11;
      yearCounter--;
      anotherMonthCalendar(monthInNum, yearCounter);
    }
    else{
      monthInNum--;
      anotherMonthCalendar(monthInNum, yearCounter)
    }
  });

  $nextMonth.on("click", function(e){
    if(monthInNum + 1 >= 12){
      yearCounter++;
      monthInNum = 0;
      anotherMonthCalendar(monthInNum, yearCounter);
    }
    else{
      monthInNum++;
      anotherMonthCalendar(monthInNum, yearCounter);
    }
  });

  function anotherMonthCalendar(month, year){
    var firstDay = moment([year, month])._d;
    var lastDay = moment(year+"-"+(month+1), "YYYY-MM").daysInMonth();
    $("td").removeClass("today");
    $("td").removeClass("nextAndPrev");
    $(".dateContent").empty();
    $month.empty().append(months[month]);
    $year.empty().append(" " + yearCounter);
    calendar(firstDay, lastDay);
  }

  function calendar(firstDay, lastDay){
    var firstDayOfMonth = firstDay.getDay();
    var year = firstDay.getFullYear();
    var month = firstDay.getMonth() + 1;
    var lastMonth = moment(2015+"-"+ (month - 1), "YYYY-MM").daysInMonth();
    if(firstDayOfMonth == 0){
      firstDayOfMonth = 7;
    }
    var daysInNextMonth = 42 - (firstDayOfMonth - 1) - lastDay;
    var daysInPrevMonth = 42 - lastDay - daysInNextMonth;
    var $theFirst =   $("#"+firstDayOfMonth);
    var today = moment().format("Do").slice(0,-2);
    $theFirst.append(1);
    for(var i = 1; i < lastDay; i++){
      var id = firstDayOfMonth + i
      var date = i+1;
      if(date == today && year === currentYear && currentMonth == month){
        $("#"+id).addClass("today").append(date);
      }
      else{
        $("#"+id).append(date);
      }
    }
    for(var j = 1; j <= daysInNextMonth ; j++){
      var id = 42 - daysInNextMonth + j;
      $("#"+id).addClass("nextAndPrev").append(j);
    }
    for(var k = daysInPrevMonth; k > 0; k--){
      $("#"+k).addClass("nextAndPrev").append(lastMonth);
      lastMonth--;
    }
  }
  calendar(startOfMonth, endOfMonth);
});
