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

$('#newModalForm').on('submit', function(e){
  $('#formModal').removeClass('modal-show');
  $('#myModal').addClass('modal-show');
  // $('.myModal').modal('show');
  setTimeout(function() { $('body').removeClass('active-modal');
  $('#myModal').removeClass('modal-show');}, 2500);
  // setTimeout(function() {$('#myModal').modal('hide');}, 2500);
  e.preventDefault();
});


$('#bg').animate({ scrollTop: $('#bglast').offset().top  }, 2000);
$('#bg').animate({ scrollTop: $('#bgfirst').offset().top  }, 750);


// Put this script in header or above select element
function check(elem) {
  // use one of possible conditions
  // if (elem.value == 'Other')
  if (elem.selectedIndex == 6) {
      document.getElementById("other-div").style.display = 'block';
      document.getElementById("other-input").required = true;
      // document.getElementById("other-div").setAttribute('required','required');
      // $("#other-div").prop('required', true)
  } else {
      document.getElementById("other-div").style.display = 'none';
  }
}
