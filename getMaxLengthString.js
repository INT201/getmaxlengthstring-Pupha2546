const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if (arrayOfString !== null && arrayOfString !== undefined) {
    let max = 0
    let result = []
    for (let index = 0; index < arrayOfString.length; index++) {
      if (max<arrayOfString[index].length) {
        max = arrayOfString[index].length
      }
    }
    for (let index = 0; index < arrayOfString.length; index++) {
      if(max === arrayOfString[index].length){
        result.push(arrayOfString[index])
      }
    }
    return result
  }
  else{
    return undefined
  }
}
module.exports = getMaxLengthString
