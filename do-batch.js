var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

function iron(item){

      return item.toLowerCase();

  }
  function mend(item){

          return item.replace("/","");

      }
      function clean(item){
          // return clean_clothing_item;

            return item.replace("*", "");

      }
/* YOUR CODE HERE */
function doBatch(clothes){
    // your code


    return iron(mend(clean(clothes)))
}
doBatch("grEE/n*u")
/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
// super batch
fvar superBatch = function doBatch(clothes){
    // your code
return clothes.map(function(item){
  return iron(mend(clean(clothes)))
});

}
// super batch batches of batch
function doBatch(batches_clothes){
    // your code
return batches_clothes.map(function(clothes){
  return clothes.map(function(item){
  return return iron(mend(clean(clothes)));
});

});

}

var sorted = superBatch.sort();
console.log(sorted);

var sortedLength = superBatch.sort(a,b){
  return a.length - b.length
}
console.log(sortedLength);
