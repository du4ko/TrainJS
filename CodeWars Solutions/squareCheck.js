
var isSquare = function(n){
  for (var i = 0; i <= n; i++) {
    if (i*i == n) { return true; }
  }
  return false;
}