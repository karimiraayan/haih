(function($, module, undefined) {
	$.extend(module, {
		appRedirectPage: function (rd) {
			/*
			if(rd.search('http') === -1){
				rd = 'https://' +rd;
			}
			*/
			$(location).attr("href", rd);
		},

		appToggleVisibility: function(rd){
			if(rd && rd.length > 0){
				// blendet Button ein
       			$('BUTTON[name="btnBackToApp"]').show();
				// blendet die Infos zur App aus, wenn man in der App ist
				$('#appInfoBlock').hide();
    		} else {
				// blendet Button aus
       			$('BUTTON[name="btnBackToApp"]').hide();
				// blendet die Infos zur App ein, wenn man nicht in der App ist
				$('#appInfoBlock').show();
			}
		},
	});
})(window.jQuery, window.$.hkkAppFunc = window.$.hkkAppFunc || {});