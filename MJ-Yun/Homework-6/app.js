/*
$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'ede403a5fd2d27cd1f2cd05643e0dd107e1f1363'
  });

    $('#login').click(function(){
      _500px.login();
    });

    _500px.on('authorization_obtained', function () {
      $('.sign-in-view').hide();
      $('.image-results-view').show();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          console.log(lat + ', ' + long);
          const radius = '10mi';
          const searchOptions = {
            geo: lat + ',' + long +',' + radius, //geo properties//
            only: 'Landscapes'
          };
          _500px.api('/photos/search'), searchOptions,function(response) {
            if (response.data.photos.length === 0) {
              $('.images').append('No Photos found');
            }else {
              $('.images').append('Request successded!');
            }
          });
        });
      } else {
        $('.images').append('Sorry, your browser does not support geolocation.');
      }
  });
});*/

$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '72218abc672cb0c0a20feadddf77a4cb7db497e6'
  });

  $('#login').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function () {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat + ', ' + long);
        const radius = '10mi';
        const searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes'
        };
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            $('.images').append('No photos found');
          } else {
            $('.images').append('Request succeeded!');
            console.log(response);
            handleResponseSuccess(response);
          }
        });
      });
    } else {
      $('.images').append('Sorry, your browser does not support geolocation.');
    }
    function handleResponseSuccess(response) {
      const allData = response.data.photos;

      $.each(allData, function() {
        const element = $('<img>').attr('src', this.image_url).addClass('image');
        $('.images').append('<div>');
        $('.images').append(element);
      });
    }
  });
});
