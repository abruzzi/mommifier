function isVowel(character) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(character) >= 0
}

function mommify(word) {
	var count = 0;
	for(var i = 0; i < word.length; i++) {
		if(isVowel(word[i])) {
			count += 1;
		}
	}

	var str = "";

	if(count/word.length >= 0.30) {
		
		for(var i = 0; i < word.length; i++) {
			if(isVowel(word[i])) {
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