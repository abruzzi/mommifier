var Mommifier = {
	"VOWELS": "aeiou",
	"REPLACEMENT": "mommy",
	"THRESHOLD": 0.30,
    "REPLACE_REG": /[aeiou]+/g
}

function isVowel(character) {
	return Mommifier.VOWELS.indexOf(character) >= 0;
}

function countVowels(word) {
	var count = 0;

	for(var i = 0; i < word.length; i++) {
		if(isVowel(word[i])) {
			count += 1;
		}
	}

	return count;
}

/*function next(current, previous) {
	var next = "";

	if(isVowel(current)) {
		if(!isVowel(previous)) {
			next = Mommifier.REPLACEMENT;
		}
	} else {
		next = current;
	}

	return next;
}*/

function replace(word) {
	/*var str = "";

	for(var i = 0; i < word.length; i++) {
		str += next(word[i], word[i-1]);
	}

	return str;*/
    
    
    return word.replace(Mommifier.REPLACE_REG, Mommifier.REPLACEMENT);
}

function shouldBeMommify(word) {
	var count = countVowels(word);
	return count/word.length >= Mommifier.THRESHOLD;
}

function mommify(word) {
	if(shouldBeMommify(word)) {
		return replace(word);
	} else {
		return word;
	}
}