var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var locations = document.getElementById("locations");
var email = document.getElementById("mail");





email.addEventListener("input", function (event) {

   if(emial.validity.typeMismatch){
    email.setCustomValidity("Enter@sample.com");
} else {
  email.setCustomValidity("");
}
});


email.addEventListener("invalid", () => {

  
  if(email.value === ""){
    email.setCustomValidity("fill out this field");
  } else {
    email.setCustomValidity("");
  }
 
});




firstName.addEventListener("invalid", () => {

 
  if(firstName.value === ""){
    firstName.setCustomValidity("Fill out this Field");
  } else {
    firstName.setCustomValidity("");
  }
 
});

locations.addEventListener("invalid", () => {

  
  if(locations.value === ""){
    locations.setCustomValidity("Fill out this field");
  } else {
    locations.setCustomValidity("");
  }
 
});


age.addEventListener("invalid", () => {

  
  if(age.value === ""){
    age.setCustomValidity("Fill out this field");
  } else {
    age.setCustomValidity("");
  }
 
});
