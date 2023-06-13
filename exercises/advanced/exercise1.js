// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text template as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that
// text, and then returns it. You can build your lists of nouns, verbs,
// adjectives, and adverbs directly into your program. Your program should read
// this text and, for each line, place random words of the appropriate types
// into the text and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text template. Choose the right way to
// structure your template and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something
// that you'll be defining.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are
// only shown for emphasis. These quotes are not present in the actual output
// strings. The words in quotes come from the list of texts and it is the
// madlibs function that puts them in.

function madlibs(template) {
  return template.replace(/#{(adj|noun|adv|verb)}/g, getWord);
}

function getRandomElement(arr) {
  const idx = Math.floor(arr.length * Math.random());
  return arr[idx];
}

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
const ADJECTIVES = 'quick lazy sleepy noisy hungry'.split(' ');
// nouns: fox dog head leg tail cat
const NOUNS = 'fox dog head leg tail cat'.split(' ');
// verbs: jumps lifts bites licks pats
const VERBS = 'jumps lifts bites licks pats'.split(' ');
// adverbs: easily lazily noisily excitedly
const ADVERBS = 'easily lazily noisily excitedly'.split(' ');
// ------

function getWord(word) {
  let category;
  if (word === '#{adj}') category = ADJECTIVES;
  else if (word === '#{noun}') category = NOUNS;
  else if (word === '#{adv}') category = ADVERBS;
  else category = VERBS;
  return getRandomElement(category);
}

const template1 = 'The #{adj} brown #{noun} #{adv}\n#{verb} the #{adj} yellow\n#{noun}, who #{adv} #{verb} his #{noun} and looks around.';

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log('');

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log('');

const template2 = 'The #{noun} #{verb} the #{noun}\'s #{noun}';

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

console.log('');

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

console.log('');
