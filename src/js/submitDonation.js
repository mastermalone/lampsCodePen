import fieldValidationService from './fieldValidationService.js';

export const submitDonation = e => {
  const donationForm = document.querySelector('#donation-form');
  e.preventDefault();

  const donation = fieldValidationService(donationForm);
  const { formIsValid, amount } = donation;

  console.log('The form is valid?', formIsValid);
  console.log('The donation amount is', amount);
};

export const onInput = e => {
  const formButton = document.querySelector('form button');
  formButton.disabled = !e.target.value;
};
