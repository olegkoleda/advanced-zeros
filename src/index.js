module.exports = function getZerosCount(number, base) {

  var j = 0;
  var i = 2;
  var primeMultiplies = new Array();

  while (i < base) {
      if (base % i == 0) {
          primeMultiplies[j] = i;
          j++;
          base = base / i;
      } else {
          i++;
      }
  }
  primeMultiplies[j] = i;


  var primeToPower = {};

  primeMultiplies.forEach(function(a) {
      primeToPower[a] = primeToPower[a] + 1 || 1;
  });


  var prime = Object.keys(primeToPower);
  var stepCount = [];

  for (var key in primeToPower) {
      stepCount.push(primeToPower[key]);
  }

  var sa = [];
  var temp;


for ( i = 0; i < prime.length; i++){
    let n = number;
    sa[i] = 0;
    for ( j = prime[i]; n / j >= 1; j *= prime[i]) {
        sa[i] += ~~(n / j);
    }
}
/*for ( i = 2; i <= number; i++) {
    temp = i;
    for (j = 0; j < prime.length; j++) {
        while (!(temp % prime[j])) {
            temp /= prime[j]; (sa[j] = sa[j] + 1 || 1);}
    }
*/
temp = sa[0] / stepCount[0];

for ( i = 0; i < prime.length; i++) {
    temp = Math.min(temp, sa[i] / stepCount[i])
}

return ~~temp;


}