const reverseSentence = (sentence) => {
  if (typeof(sentence) === "string"){
    let result = "";
    let splitSentence = sentence.toLowerCase().split(" ");
    // console.log(splitSentence);
  
    for (let i = splitSentence.length - 1; i >= 0; i--){
      result += `${splitSentence[i]} `;
    }
    let reversedSentence = result.charAt(0).toUpperCase() + result.slice(1);
    console.log(reversedSentence);
  } else {
    console.log("Sentence must be a string");
  }
}
reverseSentence('Today is the day before friday')
// reverseSentence(4343434)

