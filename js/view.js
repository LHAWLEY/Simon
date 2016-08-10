function View(el, model){
  this.el = el;
  this.model = model;
}

View.prototype.template = function(){
  var html = ''

  for (var i = 1; i < 5; i++) {
    var classes = ['color-' + i, 'piece']

    html += "<div class='" + classes.join(' ') + "' data-id='" + i + "'></div>"
  }
  return html
}

View.prototype.sequence = function () {
  for (var i = 0; i < this.model.pattern.length; i++) {
    var interval = 500 * i
    setTimeout(this.flash(this.model.pattern[i]), interval)
    setTimeout(this.deflash(this.model.pattern[i]), interval + 300)
  }
}

View.prototype.flash = function (number) {
  return function () {
    $('.piece[data-id=' + number + ']').addClass('flash')
  }
}

View.prototype.deflash = function (number) {
  return function () {
    $('.piece').removeClass('flash')
  }
}

View.prototype.render = function(){
  this.el.innerHTML = this.template();
  setTimeout(function () {
    this.sequence();
  }.bind(this), 500)
}
