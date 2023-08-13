module.exports = 
function check(str, bracketsConfig) {
  // debugger;
  

  const openingBrackets = {};

  bracketsConfig.forEach(bracketsConfigItem => {
    openingBrackets[bracketsConfigItem[0]] = bracketsConfigItem[1];
  });
  

  for(let i =0; i< str.length; i++){
    debugger;
    const currentOpeningBrackets = [];
    const currentStartPos = i;

    // пока текущая скоба это открывающая скобка
    while(str[i] in openingBrackets){
      // debugger;
      currentOpeningBrackets.push(str[i])
      i++;
    };

    const nextStartPos = i + currentOpeningBrackets.length;
    const currentProperPart = [...currentOpeningBrackets];

    for (let j = currentOpeningBrackets.length-1; j>=0; j--){
      // debugger;
      const currentClosingBracket = openingBrackets[currentOpeningBrackets[j]];
      currentProperPart.push(currentClosingBracket)
    };

    if (currentProperPart.join('') !== str.slice(currentStartPos, nextStartPos)) return false
  };

  return true

};

const config4 = [['|', '|']];

check('||', config4)