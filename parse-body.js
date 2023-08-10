function firstStep(input) {
  return input.split('&');
}

function secondStep(input) {
  return input.map(
    keyValue => keyValue.split('=')
  );
}

function thirdStep(input) {
  return input.map(
    arr => arr.map(
      el => el.replace(/\+/g, " ")
    )
  );
}

function fourthStep(input) {
  return input.map(
    arr => arr.map(
      el => decodeURIComponent(el)
    )
  );
}

function fifthStep(input) {
  let obj = {};

  input.forEach((el) => {
    let key = el[0];
    let value = el[1];

    obj[key] = value;
  });
  return obj;
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
