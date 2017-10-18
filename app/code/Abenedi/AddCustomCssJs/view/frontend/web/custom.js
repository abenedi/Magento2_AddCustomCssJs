/**
 * @description This code wait 'till jQuery is loaded then you can use it in your javascript code.
 * @author Abenedi
 * @since 2017-08-08
 * @version 1.0
 */
function loadedJQuery(){
	var waitForLoad = function () {
		if (typeof jQuery != "undefined") {
			console.log("jQuery loaded! - Module: Abenedi_AddCustomCssJs - Magento 2");
			console.log("jQuery version: "+jQuery.fn.jquery);
			//-> Here you can put your code...
			
			
			return;
		} else {
			console.log("jQuery not loaded...");
			window.setTimeout(waitForLoad, 500);
		}
	};
	window.setTimeout(waitForLoad, 500);
};
window.onload = loadedJQuery;