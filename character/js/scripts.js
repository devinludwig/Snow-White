$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $('#match , #dopey , #grumpy , #bashful').hide();

    var disposition = $('#disposition').val();
    var activity = $('#activity').val();


    if (disposition === 'friendly' && activity === 'lazy') {
      $('#match').show();
       $("#dopey").show();
    }

    else if (disposition === 'shy' && activity === 'active') {
      $('#match').show();
       $("#bashful").show();
    }

    else if (disposition === 'anti' && activity === 'hyper') {
      $('#match').show();
       $("#grumpy").show();
    }

    else {
      $('#match').show();
       $("#evilqueen").show();
    }
  });
});
