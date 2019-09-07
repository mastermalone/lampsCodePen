import { STRING, HELLO } from './constants.js';
import stringToArrayService from './stringToArrayService.js';
import stringCaseService from './stringCaseService.js';
import getFirstCharacter from './getFirstCharacterService.js';
import getWordsService from './getWordsService.js';
import characterCountService from './characterCountService.js';
import { submitDonation, onInput } from './submitDonation.js';

const init = () => {
  const wordArray = stringToArrayService.convert(STRING);
  const uppercaseWord = stringCaseService.getCase(wordArray, 'upper');
  const lowercaseWord = stringCaseService.getCase(wordArray);
  const firstCharacterArray = getFirstCharacter(wordArray);
  const startsWithLetter_M = getWordsService.startsWith('M', wordArray);
  const startsWithLetter_T = getWordsService.startsWith('t', wordArray, true);
  const characterCount = characterCountService.count(HELLO);

  console.log('The original string:\n', STRING);
  console.log('The String as an array of words:', wordArray);
  console.log('All uppercase words:', uppercaseWord);
  console.log('All lowercase words:', lowercaseWord);
  console.log('First character from each word:', firstCharacterArray);
  console.log('Words that start with "m":', startsWithLetter_M);
  console.log(
    'Number of case sensitive words that start with "t":',
    startsWithLetter_T.length
  );
  console.log('Character count for', HELLO, characterCount);
};

const initForm = () => {
  let donatBtn = document.querySelector('#donate');
  let donationInput = document.querySelector('#donation-amount');
  donatBtn.addEventListener('click', submitDonation, true);
  donationInput.addEventListener('input', onInput, true);
};

initForm();
init();
