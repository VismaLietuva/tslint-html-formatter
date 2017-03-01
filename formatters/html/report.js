/* eslint-env browser */
(function(window){
	'use strict';
	
	var document = window.document,
		slice = Array.prototype.slice;
	
	function bindHeaderClicks(){
		var headers = document.querySelectorAll('.card-header');
	 
		slice.call(headers).forEach(function(el){
			el.addEventListener('click', function(){
				var classList = this.parentNode.classList,
					expanded, state;
				
				if (classList.contains('ok')){
					return;
				}
				
				expanded = classList.toggle('expanded');
				
				state = expanded ? '#' + this.getAttribute('data-hash') : '.'
				
				window.history.replaceState(null, null, state);

			});
		});
	}
	
	function goToHash(){
		var hash = window.location.hash;
		if (hash){
			hash = hash.replace('#','');
		}
		
		if (!hash){
			return;
		}
		
		var el = document.querySelector('[data-hash="' + hash + '"]');
		
		if (el){
			el.click();
			el.parentNode.scrollIntoView();
		}
	}
	
	document.addEventListener("DOMContentLoaded", function(){
		bindHeaderClicks();
		goToHash();
	});
	
	
	
})(window);
