
$(document).ready(function() {

	$('#btn_md5').on('click', function() {
		clearMessages();
		var input_string = $.trim($('#input_string').val());
		if(isInputStringValid(input_string)){
			var hash = CryptoJS.MD5('Hello MD5');
			$('#hash_result').html("MD5:" + hash);
		}
	});

	$('#btn_sha1').on('click', function() {
		clearMessages();
		var input_string = $.trim($('#input_string').val());
		if(isInputStringValid(input_string)){
			var hash = CryptoJS.SHA1(input_string);
			$('#hash_result').html("SHA-1:" + hash);
		}
	});
});

function isInputStringValid(input_string) {

	if (!$.trim(input_string)) {
		$('#hash_result_error').html("Input String is empty!");
		return false;
	}else if(input_string.length>4096){
		$('#hash_result_error').html("Input String exceeds max length: 4096");
		return false;
	}
	return true;
}

function clearMessages() {
	$('#hash_result_error').html("");
	$('#hash_result').html("");
}

