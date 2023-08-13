module.exports = 
function check(str, bracketsConfig) {
  const regExpArr = [];

  bracketsConfig.forEach(bracketsConfigItem => {
    let openingBracket = bracketsConfigItem[0];
    let closingBracket = bracketsConfigItem[1];

    if (openingBracket == '|' || 
        openingBracket == '(' || 
        openingBracket == '{' ||
        openingBracket == '[' ) {

          openingBracket = '\\'+ openingBracket;
          closingBracket = '\\'+ closingBracket;
    };
    regExpArr.push(`${openingBracket}${closingBracket}`);
  });

  const regExp = new RegExp('('+regExpArr.join('|')+')', 'g');

  let currentStr = str;

  while (regExp.test(currentStr)){
    currentStr = currentStr.replace(regExp, "");
  }

  if (currentStr) return false;
  return true
};

