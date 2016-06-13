
var app = {
  init: function(){
    app.bindEvents();
  },
  render: function(){},
  bindEvents: function(){
    $('.input-search').on('keypress', function(event){
      if (event.which === 13) {
        app.doSearch();
      }
    });
  },
  doSearch: function(){
    var phrase = $('.input-search').val();
    $.ajax({
      url: 'https://api.flickr.com/services/rest',
      method: 'GET',
      data: {
        text: phrase,
        method: 'flickr.photos.search',
        api_key: '731717db25329eb6aa65703cb6b71970',
        format: 'json',
        per_page: 3
      },
      complete: function(response){
        var text = response.responseText;
        var len = text.length;
        text = text.slice(14, len - 1);
        var photos = JSON.parse(text);
        console.log(photos);
      }
    });
  }
};

// var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
// var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg'


module.exports = app;