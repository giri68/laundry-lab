var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

/* YOUR CODE HERE */
function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase();
}

iron("grEEn")

function iron(clothes){
  return clothes.map(function(item){
    return item.toLowerCase();
  });
}
/* PRINT RESULT */
console.log("--> Finished running iron.js");
