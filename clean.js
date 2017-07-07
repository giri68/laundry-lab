var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
    // return clean_clothing_item;
    return clothing_item.replace("*", "");
}
clean("gr*een")


/* PRINT RESULT */
console.log("--> Finished running clean.js");

function clean(clothes){
    // return clean_clothing_item;
    return clothes.map(function(item){
      return item.replace("*", "");
    });
}
clean("gr*een")
