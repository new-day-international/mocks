function changeTheme(name) {
  $('#bootstrap-theme').attr('href', "//netdna.bootstrapcdn.com/bootswatch/3.0.0/" + name + "/bootstrap.min.css");
  $.cookie('theme', name);
  $('body').removeClass('theme-' + $('body').data('theme'));
  $('body').data('theme', name);
  $('body').addClass('theme-' + name);
  $('.theme').removeClass('disabled');
  $('.theme a:contains("' + name + '")').parent().addClass('disabled');
}

// Run all jQuery
$(function () {
  $("time").timeago();
  $(".spaces-gui").tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
  });

  $(".theme").find('a').click(function(event) {
    event.preventDefault();
    changeTheme($(this).text());
  })
  var theme = $.cookie('theme') || 'cerulean'
  changeTheme(theme);
  if ($.cookie('instructions1') != 'hide') {
    setTimeout(function() {
      $('#instructions1').modal({});
    }, 500);
  }
  $('#instructions1').on('hidden.bs.modal', function () {
    $.cookie('instructions1', 'hide');
  });

});