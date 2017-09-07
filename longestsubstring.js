// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence
// and not a substring.

var lengthOfLongestSubstring = function(s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let subString = s.slice(i, j);
      if (validSubString(subString) && subString.length > longest.length) {
        longest = subString;
      }
    }
  }
  return longest.length;
};

var validSubString = function(sub) {
  let comp = '';
  for (let i = 0; i < sub.length; i++) {
    if (comp.indexOf(sub[i]) === -1) {
      comp += sub[i];
    } else {
      return false;
    }
  }
  return true;
}



console.log(lengthOfLongestSubstring('abcabcbb')) // abc
console.log(lengthOfLongestSubstring('bbbbb')) // b
console.log(lengthOfLongestSubstring('pwwkew')) // wke
console.log(lengthOfLongestSubstring('c')) //
console.log(lengthOfLongestSubstring("rvunutosbjgyopbvbdoieamfqgzqqwjhtdxnylhavnylfzjgexqkyfqqnridnrnhwkwuxeustugyvphcmxom"))
