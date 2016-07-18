// When the user clicks a box it flashes.
// Fix double flashes.
// Fix new game button.


$(document).ready(function() {
  var newGame = new Simon();
  newGame.store();
  var el = document.querySelector('.board');
  var newView = new View(el, newGame);
  newView.render();

  $(document).on('click', '.piece', function(event){
    newGame.guess(parseInt(event.target.dataset.id));
    $(event.target).addClass('flash')
    // if ($(event.target).hasClass('flash')){
    //   $(event.target).toggleClass('flash');
    // }

    if (newGame.finishedGuessing()){
      newGame.match();
      newView.render();
    }
  })
});