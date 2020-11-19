$("button").click(function() {
  let userBirthYear = $(".year").val();
  let userName = $(".name").val();
  let year = $(".currentYear").val();

  console.log(userBirthYear);
  console.log(userName);
  console.log(year);

  let userAge = year - userBirthYear;
  console.log(userAge);

  if (isNaN(userBirthYear) == true) {
    $(".message").append(userName + ", please enter valid information! ");
  } else if (userBirthYear < 1900) {
    $(".message").append(userName + ", please enter valid information! ");
  } else if (userBirthYear > year) {
    $(".message").append(userName + ", please enter valid information! ");
  } else {
    $(".message").append(
      userName + " is about " + userAge + " years old in " + year + "! "
    );
  }
});
