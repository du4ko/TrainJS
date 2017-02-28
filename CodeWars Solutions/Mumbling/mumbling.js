
//This needs to be reformated, at this state it is unreadable

function accum(s) {
  var output = [];
  var tmp = [];
  var use = "";
  var tmp2 = "";
	for(var i = 0; i <= s.length; i++){
   for(var k = 0; k <= i; k++){
     if(k === 0){
      tmp2 = s[i]+""
      tmp2 = tmp2.toUpperCase()
      tmp.push(tmp2)
    }else{
        tmp2 = s[i]+""
        tmp2 = tmp2.toLowerCase()
        tmp.push(tmp2)
    }
   }
    use = tmp.join("");
    output.push(use);
    use = "";
    tmp = [];
  }
  for(let d of output){
    d && tmp.push(d)
  }
  
  tmp.splice(tmp.length -1, 1);
  
 return tmp.join("-")
}
