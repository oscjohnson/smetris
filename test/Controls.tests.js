var assert = require('assert');
var keys = require('../src/keys.js');
var sinon = require('sinon');
var Controls = require('../src/Controls.js');


function initJquery (cb) {
 	require("jsdom")
	.env(
	  '<html></html>',
	  ["http://code.jquery.com/jquery.js"],
	  function (err, window) {
	     global.$ = window.$;
	     global.document = window.document

	     cb()
	  }
	);
}



describe('Controls', function(){
	before(initJquery)

	describe('when pressing a key', function(){
		it('should emit a corresponding event', function() {
			var config = {controls: {REPEAT_COOLDOWN: 10}};
			var controls = Controls({config: config});
			controls.init();
			var handleDrop = sinon.stub();
			controls.on('drop', handleDrop);

			var e = global.$.Event("keydown", { keyCode: keys.SPACE } );
			e.which = keys.SPACE;
			e.keyCode = keys.SPACE;
			$(document).trigger(e);

			assert(handleDrop.calledOnce);
		})
		it('should not recive event when listener turned off', function() {
			var config = {controls: {REPEAT_COOLDOWN: 10}};
			var controls = Controls({config: config});
			controls.init();
			var handleDrop = sinon.stub();
			controls.on('drop', handleDrop);

			var e = global.$.Event("keydown", { keyCode: keys.SPACE } );
			e.which = keys.SPACE;
			e.keyCode = keys.SPACE;
			$(document).trigger(e);
			controls.off('drop', handleDrop);
			$(document).trigger(e);

			assert(handleDrop.calledOnce);
		})
	})
})
