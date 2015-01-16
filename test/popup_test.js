(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#popup', {
    setup: function() {
      this.elem = $( '#my-popup' );
      this.elem.popup();
    },
    teardown: function() {
      $( '.b-popup' ).remove();
      $( '.b-popup-opaco' ).remove();
    }
  });

  test( 'create popup', function() {
    expect(1);
    ok( $( '.b-popup' ).length, 'popup div created' );
  });

  test( 'create opaco', function() {
    expect(1);
    ok( $( '.b-popup-opaco' ).length, 'opaco div created' );
  });

  test( 'click opaco', function() {
    expect(2);
    $( '.b-popup-opaco' ).click();
    ok( !$( '.b-popup' ).length, 'popup div removed' );
    ok( !$( '.b-popup-opaco' ).length, 'opaco div removed' );
  });

  test( 'click closeButton', function() {
    expect(2);
    $( '.b-popup__close' ).click();
    ok( !$( '.b-popup' ).length, 'popup div removed' );
    ok( !$( '.b-popup-opaco' ).length, 'opaco div removed' );
  });

  test( 'press esc button', function() {
    expect(2);
    
    var e = $.Event( 'keyup' );
    e.keyCode = 27;
    $( document ).trigger(e);
    
    ok( !$( '.b-popup' ).length, 'popup div removed' );
    ok( !$( '.b-popup-opaco' ).length, 'opaco div removed' );
  });

}(jQuery));
