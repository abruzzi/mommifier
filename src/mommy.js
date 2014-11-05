function mommify(word) {
	var count = 0;
	for(var i = 0; i < word.length; i++) {
		if(['a', 'e', 'i', 'o', 'u'].indexOf(word[i]) >= 0) {
			count += 1;
		}
	}

	var str = "";

	if(count/word.length >= 0.30) {
		
		for(var i = 0; i < word.length; i++) {
			if(['a', 'e', 'i', 'o', 'u'].indexOf(word[i]) >= 0) {
				str += "mommy";
			} else {
				str += word[i];
			}
		}
	} else {
		str = word;
	}

	return str;
}