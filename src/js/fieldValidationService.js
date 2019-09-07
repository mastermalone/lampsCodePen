import { MESSAGE } from './constants.js';

const fieldValidationService = form => {
  const { AMOUNT_IS_ZERO, NOT_NUMEERIC } = MESSAGE;
  const error = document.querySelector('.error');
  const donation = parseInt(form.donationAmount.value);
  const isNumeric = !Number.isNaN(donation);
  const amount = isNumeric && donation;

  const errorMessage = donation === 0 ? AMOUNT_IS_ZERO : NOT_NUMEERIC;
  const formIsValid = donation > 0 && isNumeric;

  if (error) {
    error.innerHTML = formIsValid ? '' : errorMessage;
  }

  return {
    formIsValid,
    amount
  };
};

export default fieldValidationService;
