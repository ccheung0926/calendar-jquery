$(document).ready(function(){
  var startOfMonth = moment().startOf("month")._d;
  var endOfMonth = moment().endOf("month")._d;
  var firstDayOfMonth = startOfMonth.getDay();
  var lastDateOfMonth = endOfMonth.getDate();
  var currentMonth = moment().format("MMMM");
  var currentYear = moment().format("YYYY")

  var $month = $("#currentMonth");
  var $year = $("#currentYear");
  var $theFirst = $("#"+firstDayOfMonth);

  $month.append(currentMonth);
  $year.append(" "+currentYear);
  $theFirst.append(1);
  var monthInNum = moment().format("MM");
  console.log(monthInNum)
  var start = moment([2016, 12]);
  console.log(moment(start).startOf('month'));
  for(var i = 1; i < lastDateOfMonth; i++){
    var id = firstDayOfMonth + i
    $("#"+id).append(i+1);
  }
})