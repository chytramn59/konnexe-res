// $(document).ready(function() {
//   $("#first-name").keypress(function(){
//     var firstname = $('#first-name').val();
//     var nameregex = /^[a-zA-Z]{2,30}$/;
//     if(!nameregex.test(firstname)){
//       $('#fn-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
//     }
//     else{
//       $('#fn-error').addClass('hide');
//     }
//   });
//   $("#last-name").keypress(function(){
//     var lastname = $('#last-name').val();
//     var nameregex = /^[a-zA-Z]{2,30}$/;
//     if(!nameregex.test(lastname)){
//       $('#ln-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
//     }
//     else{
//       $('#ln-error').addClass('hide');
//     }
//   });
//   $("#title-display").keypress(function(){
//     var titlename = $('#title-display').val();
//     var nameregex = /^[a-zA-Z]{2,30}$/;
//     if(!nameregex.test(titlename)){
//       $('#title-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
//     }
//     else{
//       $('#title-error').addClass('hide');
//     }
//   });
//   $("#company-details").keypress(function(){
//     var companyname = $('#company-details').val();
//     var nameregex = /^[a-zA-Z]{2,30}$/;
//     if(!nameregex.test(companyname)){
//       $('#company-error').removeClass('hide'); $('#fn').css('border-color','red');
//     }
//     else{
//       $('#company-error').addClass('hide');
//     }
//   });
//   $("#phone-number").keyup(function(){
//     var number = $('#phone-number').val();
//     var regex = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
//     if(!regex.test(number)){
//       $('#number-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
//     }
//     else{
//       $('#number-error').addClass('hide');
//     }
//   });

//   $('#email-check').on('input', function() {
//     var input=$('#email-check').val();
//     var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(!re.test(input)){
//       $('#email-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
//     }
//     else{
//       $('#email-error').addClass('hide');
//     }
    

//   });
//   $("#industry-name").keypress(function(){
//     var name = $('#industry-name').val();
//     var nameregex = /^[a-zA-Z]{2,30}$/;
//     if(!nameregex.test(name)){
//       $('#industry-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
//     }
//     else{
//       $('#industry-error').addClass('hide');
//     }
//   });
//   $("#submit").click(function(){
//     alert("please fill all the fields.");
//   }); 

// });
$(function() {
 
  $("form[name='registration']").validate({
   
    rules: {
      firstname: "required",
      lastname: "required",
      title: "required",
      company: "required",
      city: "required",
      industry: "required",
      email: {
        required: true,
      
        email: true
      },
      phone: {
        required: true,
        minlength: 10
      }
    },
   
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      title: "please enter your work title",
      company: "please enter your company name",
      city: "please enter your city",
      industry: "please enter your working desgination",
      phone: {
        required: "Please provide a phone number",
        minlength: "Your phone number must be of 10 digit"
      },
      email: "Please enter a valid email address"
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
});