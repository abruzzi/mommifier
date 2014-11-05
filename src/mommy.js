var VOWELS = "aeiou";
var REPLACEMENT = "mommy";
var THRESHOLD = 0.30;

function isVowel(character) {
	return VOWELS.indexOf(character) >= 0;
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

function next(current, previous) {
	var next = "";

	if(isVowel(current)) {
		if(!isVowel(previous)) {
			next = REPLACEMENT;
		}
	} else {
		next = current;
	}

	return next;
}

function replace(word) {
	var str = "";

	for(var i = 0; i < word.length; i++) {
		str += next(word[i], word[i-1]);
	}

	return str;
}

function shouldBeMommify(word) {
	var count = countVowels(word);
	return count/word.length >= THRESHOLD;
}

function mommify(word) {
	if(shouldBeMommify(word)) {
		return replace(word);
	} else {
		return word;
	}
}