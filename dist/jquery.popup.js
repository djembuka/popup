/*! Popup window - v0.1.0 - 2015-01-16
* https://github.com/Tatyana/popup
* Copyright (c) 2015 Tatiana; Licensed MIT */
( function($) {

  $.fn.popup = function () {
    return this.each( function() {
      
      function createPopupWindow() {
        $( 'body' ).append( '<div class="b-popup"></div>' );
      }
      
      createPopupWindow();
      
    });
  };

}( jQuery ));
