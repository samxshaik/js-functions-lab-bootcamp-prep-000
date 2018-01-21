// write your code below!
var happyHolidays;
var happyHolidayTo;

function happyHolidays(){
  console.log("Happy Holidays");
}
  function happyHolidayTo(holiday, name){
   console.log( `Happy holidays, ${name}!`);
    return happyHolidayTo();
  }
  function happyCountdown(days,holiday) {
    console.log(`It's ${days} days until ${holiday}!`);
    return happyCountdown();
  }
  return ;
