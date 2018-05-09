var exports = module.exports = {};

exports.chop = (num, list) => {
  list.sort(function(a,b){
    return a-b;
  });

  console.log(list);
  let searchIndex=-1;
  let temp = -1;
  let len = list.length;
  let correction = 0;

  do{
    if(len===0){
       searchIndex = -1;
       break;
     }
     searchIndex = Math.floor(len/2);
     temp = list[searchIndex];
      console.log('temp: ' + temp);
      console.log('num: ' + num);
      console.log('list: ' + list);
      console.log('index: ' + searchIndex);
      console.log('len: ' + len);
      if(temp>num){
        list = list.slice(0, searchIndex);
      }
      else if(temp<num){
        correction = searchIndex;
        if(len===1){
          searchIndex=-1;
          break;
        }
        list = list.slice(searchIndex, len);
      }
     len = list.length;
  }
  while(temp !== num)

  if(searchIndex>=0){
    searchIndex+=correction;
  }

  //if number is not in the list
  return searchIndex;
}
