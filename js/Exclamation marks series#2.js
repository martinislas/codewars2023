
//Remove all exclamation marks from the end of sentence.



function remove(sentence) {
    while (sentence.endsWith('!')) {
      sentence = sentence.slice(0, -1);
    }
    return sentence;
  }
  