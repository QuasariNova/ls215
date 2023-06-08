// Implement a function that takes a string as an argument and returns a new
// string that contains the original string in reverse.
// Examples

function reverse(string) {
  return [...string].reverse().join('');
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"
