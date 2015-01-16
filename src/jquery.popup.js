/*
 * popup
 * https://github.com/Tatyana/popup
 *
 * Copyright (c) 2015 Tatiana
 * Licensed under the MIT license.
 */

( function($) {

  $.fn.popup = function () {
    var defaults = {
      className: 'b-popup'
    };
    return this.each( function() {
      var self = this,
          $this = $( self );
      
      function createPopupWindow() {
        var $popup = $( '<div class="' + defaults.className + '">' +
          '<div class="' + defaults.className + '__close"></div>' +
          '<div class="' + defaults.className + '__content"></div>' +
          '</div>' );
          
        $popup.find( '.' + defaults.className + '__content' ).html( $this.html() );
        $( 'body' ).append( $popup );
        
        self.$popup = $popup;
        self.$closeButton = $popup.find( '.b-popup__close' );
      }
      
      function createOpaco() {
        var $opaco = $( '<div class="' + defaults.className + '-opaco"></div>' );
        self.$popup.before( $opaco );
        
        self.$opaco = $opaco;
      }
      
      function handleEvents() {
        self.$opaco.click( clickOpaco );
        self.$closeButton.click( clickClose );
        $( document ).on( 'popup:keyup', keyupDocument );
        $( document ).bind( 'keyup', function( event ) {
          $( document ).trigger( 'popup:keyup', [ event ] );
        });
        
      }
      
      function close() {
        self.$popup.remove();
        self.$opaco.remove();
      }
      
      function clickOpaco(e) {
        e.preventDefault();
        close();
      }
      
      function clickClose(e) {
        e.preventDefault();
        close();
      }
      
      function keyupDocument( e, event ) {
        if ( event.keyCode === 27 ) {
          close();
        }
      }
      
      createPopupWindow();
      createOpaco();
      handleEvents();
      
    });
  };

}( jQuery ));
