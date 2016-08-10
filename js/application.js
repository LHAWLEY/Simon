$(document).ready(function() {
  var newGame = new Simon();
  newGame.store();
  var el = document.querySelector('.board');
  var newView = new View(el, newGame);
  newView.render();

  $(document).on('click', '.piece', function(event){
    var id = parseInt(event.target.dataset.id)

    $('.piece').removeClass('flash');

    setTimeout(function() {
      $(event.target).addClass('flash');
      newGame.guess(id);
      if (newGame.finishedGuessing()){
        setTimeout(function() {
          newGame.match();
          newView.render();
        }, 200)
      }
    }, 10)
  })
});