$(function () {

  $('#load').on('click', function (e) {
    e.preventDefault();
    // clear section#feed
    $('#feed').html("");
    // Make ajax call
    var root = '/news_mock.json';
    // var root = 'https://localhost:8000/posts/';
    // var root = 'https://localhost:8000/posts/1';
    $.ajax({
      url: root,
      method: 'GET'
    }).then(function(data) {
      // prepare response
      $.each(data, function (index, option) {
        var row = '<div class="media"> \
                    <div class="media-left media-middle"> \
                      <a href="#" onclick="showInfo('+index+')"> \
                        <img class="media-object img-circle" src="'+option.thumb+'"> \
                      </a> \
                    </div> \
                    <div class="media-body"> \
                      <h3 class="media-heading">'+option.title+'</h3> \
                    </div> \
                  </div> \
                  <div data-info="'+index+'" class="extra-info hidden"> \
                    <div class="row"> \
                      <div class="col-xs-12 col-lg-4"> \
                        <img src="'+option.picture+'" class="img-responsive"> \
                      </div> \
                      <div class="col-xs-12 col-lg-8"> \
                        <h4>'+option.title+'</h4> \
                        <p>'+option.body+'</p> \
                      </div> \
                    </div> \
                  </div>';

        $('#feed').append($(row).hide().fadeIn(500));
      });
    });
    // End ajax call
    return false;
  });

});

function showInfo(id) {
  $('.extra-info').addClass('hidden');
  var target = $('[data-info="'+id+'"]');
  target.removeClass('hidden').fadeIn(1000);
  return false;
};