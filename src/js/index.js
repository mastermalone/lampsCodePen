import { STRING } from './constants.js';
import stringToArrayService from './stringToArrayService.js';
import stringCaseService from './stringCaseService.js';
import getFirstCharacter from './getFirstCharacterService.js';
import getWordsService from './getWordsService.js';

const wordArray = stringToArrayService.convert(STRING);
const uppercaseWord = stringCaseService.getCase(wordArray, 'upper');
const lowercaseWord = stringCaseService.getCase(wordArray);
const firstCharacterArray = getFirstCharacter(wordArray);
const startsWithLetter_M = getWordsService.startsWith('M', wordArray);
const startsWithLetter_T = getWordsService.startsWith('T', wordArray, true);
console.log('STRING', STRING);
console.log('wordArray', wordArray);
console.log('uppercaseWord', uppercaseWord);
console.log('lowercaseWord', lowercaseWord);
console.log('firstCharacterArray', firstCharacterArray);
console.log('Words that start with "m"', startsWithLetter_M);
console.log('Words that start with "t"', startsWithLetter_T);
