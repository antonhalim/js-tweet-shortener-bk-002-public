'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var array = [];
    string.split(" ").forEach(function(word){
    var words = { "hello" : "hi", "to" : "2", "two" : "2", "too" : "2", "for" : "4", "four" : "4", "be" : "b", "you" : "u", "and" : "&", "at" : "@" };
      if (words[word.toLowerCase()] === undefined) {
        array.push(word)
      } else {
        array.push(words[word.toLowerCase()])
      }
    });
    return array.join(" ")
  },
  bulkShortener: function(arrays){
    var result = [];
    arrays.forEach(function(string){
      result.push(tweetShortener.wordSubstituter(string))
    });
    return result;
  },
  selectiveShortener: function(string){
    if (string.length >= 140){
      return tweetShortener.wordSubstituter(string)
    }else {return string}
  },
  shortenedTruncator: function(string){
    var result = tweetShortener.selectiveShortener(string);
    if (result.length > 140){
      return result.slice(0,137) + '...'
    }
    else {
      return result
    }
  }
};
