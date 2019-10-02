module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  let flag;
    do{
      flag = false;
      for(let i = 0; i < strArr.length; i++){
        for(let j = 0; j < bracketsConfig.length; j++ ){
          if(strArr[i] === bracketsConfig[j][0] && strArr[i+1] === bracketsConfig[j][1]){
            strArr.splice(i,2);
            flag = true;
          } 
        }
      }
    } while (flag === true);
      
  return (strArr.length === 0)? true : false;
}

