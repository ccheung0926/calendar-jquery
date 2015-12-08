$(document).ready(function(){
  var startOfMonth = moment().startOf("month")._d;
  var endOfMonth = moment().endOf("month")._d;
  
  var currentMonth = moment().format("MMMM");
  var currentYear = moment().format("YYYY")

  var $month = $("#currentMonth");
  var $year = $("#currentYear");
  var $nextMonth = $("#nextMonth");
  var $previousMonth = $("#previousMonth");
  

  $month.append(currentMonth);
  $year.append(" "+currentYear);
  var monthInNum = moment().format("MM");
  console.log(monthInNum)
  var start = moment([2016, 12]);
  console.log(moment(start).startOf('month'));

  $nextMonth.on("click", function(e){
    
  });

  (function calendar(firstDay, lastDay){
    var firstDayOfMonth = firstDay.getDay();
    var lastDateOfMonth = lastDay.getDate();
    var $theFirst = $("#"+firstDayOfMonth);
    $theFirst.append(1);
    for(var i = 1; i < lastDateOfMonth; i++){
      var id = firstDayOfMonth + i
      $("#"+id).append(i+1);
    }
  })(startOfMonth, endOfMonth);
});
