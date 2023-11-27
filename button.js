$('#edit').on('click', function(){
  $('body').addClass('active-modal');
  $('#formModal').addClass('modal-show');
});

$('.overlay').on('click', function(){
  $('body').removeClass('active-modal');
  $('#formModal').removeClass('modal-show');
})

// $(document).on("click"," .submit", function(){
//   $('body').removeClass('active-modal');
//   $('.box-modal').removeClass('modal-show');
// });

$(document).on("click"," .cross", function(){
  $('body').removeClass('active-modal');
  $('#formModal').removeClass('modal-show');
});

// $(function() {

//   $("#newModalForm").validate({
//     rules: {
//       firstname: {
//         required: true,
//         minlength: 8
//       },
//       email: "required"
//     },
//     messages: {
//       firstname: {
//         required: "Please enter some data",
//         minlength: "Your data must be at least 8 characters"
//       },
//       email: "Please provide some data"
//     }
//   });
// });



// $('#newModalForm').on('show.bs.modal', function () {
//   $(document).on('click', function submitform() {
//     var f = document.getElementsByTagName('form')[0];
//     var pr = document.createElement("p");
//     if(f.checkValidity()) {
//       f.submit();
//     } else {
//       // alert(document.getElementById('email').validationMessage);
//       pr.textContent = "min 5 characters";
//       document.body.appendChild(pr);
      
//     }
//   });
// })


// function submitform() {
//   var f = document.getElementsByTagName('form')[0];
//   var pr = document.createElement("p");
//   if(f.checkValidity()) {
//     f.submit();
//   } else {
//     // alert(document.getElementById('email').validationMessage);
//     pr.textContent = "min 5 characters";
//     document.body.appendChild(pr);
    
//   }
// }



// $('#newModalForm').on('submit', function submitform() {
//   var f = document.getElementsByTagName('form')[0];
//   var pr = document.createElement("p");
//   if(f.checkValidity()) {
//     f.submit();
//   } else {
//     // alert(document.getElementById('email').validationMessage);
//     pr.textContent = "min 5 characters";
//     document.body.appendChild(pr);
    
//   }
// });



// function submitform() {
//   var f = document.getElementsByTagName('form')[0];
//   var pr = document.createElement("p");
//   if(f.checkValidity()) {
//     f.submit();
//   } else {
//     // alert(document.getElementById('email').validationMessage);
//     pr.textContent = "min 5 characters";
//     document.body.appendChild(pr);
    
//   }
// }

// $('body, html').on('click','.submit', function(e) {
//   e.preventDefault();
//   var f = document.getElementsByTagName('form')[0];
//   var pr = document.createElement("p");
//   if(f.checkValidity()) {
//     f.submit();
//   } else {
//     // alert(document.getElementById('email').validationMessage);
//     pr.textContent = "min 5 characters";
//     document.body.appendChild(pr);
    
//   }

//   // alert('hello world');
// });

// if (!$('form')[0].checkValidity()) {
//   $('form').find('input[type="submit"]').click();
// }

// $('#newModalForm').on('box-modal', function () {
//   $('.classFromElement').on('click', function (e) {
//       e.preventDefault();
//       alert('hello world');
//   });
// })




// $(function() {

//   $("#newModalForm").validate();
// });





// $(document).ready(function() {
//   $("#newModalForm").validate({
//     rules: {
//       email : {
//         required: true
//       }
//     },
//     messages : {
//       email: "Please enter Name"
//     },
//     errorElement: "div",
//       errorPlacement: function ( error, element ) {
//           error.addClass( "invalid-feedback" );
//           error.insertAfter( element );
//       },
//     highlight: function(element) {
//       $(element).removeClass('is-valid').addClass('is-invalid');
//     },
//     unhighlight: function(element) {
//       $(element).removeClass('is-invalid').addClass('is-valid');
//     }
//   });
// });

// $(document).on("click"," .submit", function(){
//   $('body').removeClass('active-modal');
//   $('.box-modal').removeClass('modal-show');
//   $('body').addClass('active-modal');
//   $('.done-modal').addClass('modal-show');
// });

// $(document).ready(function(){
//   $('.form').on('submit', function(){
//       swal("Title", "Message Content", "success", {
// button: "Ok",
// });
//   });
// });

$('#newModalForm').on('submit', function(e){
  $('#formModal').removeClass('modal-show');
  $('#myModal').addClass('modal-show');
  // $('.myModal').modal('show');
  setTimeout(function() { $('body').removeClass('active-modal');
  $('#myModal').removeClass('modal-show');}, 2500);
  // setTimeout(function() {$('#myModal').modal('hide');}, 2500);
  e.preventDefault();
});



// $("input[type='text']").bind('focus', function() {
//    $(this).css('background-color', 'none');
// });

// $(document).ready(function() {
//   setTimeout(function() {
//       $('html, body').animate({
//          scrollTop: $('#bglast').offset().top 
//       },2000);
//   }, 500);
// });

// function pageScroll() {
//   window.scrollBy(0,1);
//   scrolldelay = setTimeout(pageScroll,10);
// }
// setTimeout(function () {
//   window.scrollTo(0, 300);
// },200);

$('#bg').animate({ scrollTop: $('#bglast').offset().top  }, 2000);
$('#bg').animate({ scrollTop: $('#bgfirst').offset().top  }, 750);


// $(document).ready(function(){
//   $('body,html').animate({scrollTop: 300}, 10); 
// });