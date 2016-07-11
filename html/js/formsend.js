$('.plain-form').on('submit', function(e) {
  e.preventDefault();

  $(this).addClass('current-form');
  var currForm = $(this),
    phone = $.trim($('.current-form input[name=your-subject]').val()),
    name = $.trim($('.current-form input[name=your-name]').val()),
    email = $.trim($('.current-form input[name=your-email]').val()),
    messag = $.trim($('.current-form textarea[name=your-message]').val()),
    postData = $(this).serializeArray(),
    formURL = $(this).attr('action'),
    thanx = $('.thanx'),
    message = $('.message');

  $(message).fadeIn(200);
  if (name != null && name.length == 0) {
    $(message).addClass('message-err').html('Укажите имя');
    event.preventDefault();
  } else if (phone != null && phone.length == 0) {
    $(message).addClass('message-err').html('Укажите телефон');
    event.preventDefault();
  } else if (email != null && email.length == 0) {
    $(message).addClass('message-err').html('Укажите почту');
    event.preventDefault();
  } else if (messag != null && messag.length == 0) {
    $(message).addClass('message-err').html('Напишите нам сообщение;)');
    event.preventDefault();
  } else {
    $.ajax({
      url: formURL,
      type: 'POST',
      data: postData,
      beforeSend: function() {
        $(message).html('Отправляем...');
      },
      success: function(data) {
        $(message).addClass('message-ok');
        $(message).html('Успешно отправилось!');
        $(message).fadeOut(1500);
        $(thanx).fadeIn(1500);
      }
    });
  };
  $(this).removeClass('current-form');
});
