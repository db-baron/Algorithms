function anagrams(str, memo, arr) {
  if(!memo) { memo = ""};
  if(!arr) { arr = []};
  if(str.length == 0){
      arr.push(memo);
      return arr;
  }
  for (var i = 0; i<str.length; i++){
      anagrams(str.slice(0,i) + str.slice(i+1, str.length),   memo+str[i],   arr);
  }
  return arr;
};
console.log(anagrams('cat'));
