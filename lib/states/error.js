var see = require('../support/see')
  , inputs = require('mousetrap')
  , $ = require('jquery');

var Error = exports;

Error.enter = function(ctx){

}
Error.leave = function(ctx){
}

exports.DataChannels = {
  enter: function(ctx){
    var btn = $('.main-menu',ctx.el).on('click', function(){
      see('/main-menu')
    })
    inputs.bind('space',function(){
      btn.click();
    })
  },
  leave: function(ctx){
    $('.mainmenu',ctx.el).off('click')
    inputs.unbind('space')
  }
}