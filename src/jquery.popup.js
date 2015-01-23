/*
 * popup
 * https://github.com/Tatyana/popup
 *
 * Copyright (c) 2015 Tatiana
 * Licensed under the MIT license.
 */

( function($) {

  $.fn.popup = function ( options ) {
    
    if ( typeof options === 'string' ) {
      this.data( 'popup' ).methods[ options ]();
      return this;
    }
    
    var defaults = {
      className: 'b-popup'
    };
    return this.each( function() {
      var popup = {},
          self = this,
          $this = $( self );
      
      $this.data( 'popup', popup );
      
      popup.methods = {
      
        createPopupWindow: function() {
          var $popup = $( '<div class="' + defaults.className + '">' +
            '<div class="' + defaults.className + '__close">Close</div>' +
            '<div class="' + defaults.className + '__content"></div>' +
            '</div>' );
            
          $popup.find( '.' + defaults.className + '__content' ).append( $this );
          $( 'body' ).append( $popup );
          
          popup.$popup = $popup;
          popup.$closeButton = $popup.find( '.b-popup__close' );
        },
        
        createOpaco: function() {
          var $opaco = $( '<div class="' + defaults.className + '-opaco"></div>' );
          popup.$popup.before( $opaco );
          
          popup.$opaco = $opaco;
        },
        
        show: function() {
          $( 'body' ).addClass( 'i-popup-active' );
        },
        
        close: function() {
          $( 'body' ).removeClass( 'i-popup-active' );
          console.info( 'close' );
        },
        
        clickOpaco: function(e) {
          e.preventDefault();
          close();
          console.info( 'clickOpaco' );
        },
        
        clickClose: function(e) {
          e.preventDefault();
          close();
          console.info( 'clickClose' );
        },
        
        keyupDocument: function( e, event ) {
          if ( event.keyCode === 27 ) {
            close();
          }
          console.info( 'keyupDocument' );
        }
      };
      
      popup.methods.createPopupWindow();
      popup.methods.createOpaco();
      
      //handle events
      
      popup.$opaco.click( popup.methods.clickOpaco );
      popup.$closeButton.click( popup.methods.clickClose );
      
      $( document ).on( 'popup:keyup', popup.methods.keyupDocument );
      
      $( document ).bind( 'keyup', function( event ) {
        $( document ).trigger( 'popup:keyup', [ event ] );
      });
      
    });
  };

}( jQuery ));
