const reverse = (word) => {
	if (typeof(word) === "string") {
		word = word.toLowerCase()
		let word2 = '';
		for (let i = word.length - 1; i >= 0; i--) {
			word2 += `${word[i]}`;
		}
		if (word === word2) {
			console.log(`The word '${word}' is a palindrome`);
		}
		else {
			console.log(`The word '${word}' is not a palindrome`);
		}
	} else {
		console.log("Word must be a string");
	}

	return
}

// reverse('Malalalalalalalam')
// reverse(343434);
reverse('siang')