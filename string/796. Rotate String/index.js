var rotateString = function(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
