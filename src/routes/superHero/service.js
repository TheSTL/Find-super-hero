/* eslint-disable new-cap */
/* eslint-disable import/prefer-default-export */
const { phoneMapping, heros } = require('../../constants/superHero');

function nodeTrie(inputValue) {
  this.value = inputValue;
  this.end = false;
  this.children = new Map();
}

function generateTrie() {
  try{

  const head = new nodeTrie(null);
  let currentNode = null;

  
  for (let i = 0; i < heros.length; i += 1) {
    const hero = heros[i].toLowerCase();
    currentNode = head;

    for (let j = 0; j < hero.length; j += 1) {
      const value = hero[j];
      
      if (!currentNode.children[value]) {
        const newNode = new nodeTrie(value);      
        currentNode.children[value] = newNode;
        currentNode = newNode;
        
      } else {
        currentNode = currentNode.children[value];
      }
      if (j === hero.length - 1) {
        currentNode.end = true;
      }
      
    }
  }
  return head;
  }
  catch(err){
    throw err;
  }
}

function searchHero(currentNode, code, index, prevString) {
  try{        
        
  if (index >= code.length) {
    return '';
  }

  const options = phoneMapping[code[index]];
  const combineResult = [];

  if (!options.length) {
    return searchHero(currentNode, code, index + 1, prevString);
  }

  for (let j = 0; j < options.length; j += 1) {
    const value = options[j];

    if (currentNode.children[value] && currentNode.end === false) {
      const result = searchHero(currentNode.children[value], code, index + 1, prevString + value);
      if (result){
          for(const el of result){
              combineResult.push(el);
          }
      }
  } if (currentNode.children[value] && currentNode.children[value].end) {
      return [prevString + value];
    }
  }
  if (combineResult.length){
      console.log(combineResult);
      
      return combineResult;
  }


  }
  catch(err){
    throw err;
  }
}


async function findSuperHero({
  code,
}) {
  try{
  const trieHead = generateTrie();
  
  const hero = searchHero(trieHead, code, 0, '');
  return hero;  
  }
  catch(err){
    throw err;
  }
}

module.exports = {
  findSuperHero,
};
