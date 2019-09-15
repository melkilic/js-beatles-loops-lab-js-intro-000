function theBeatlesPlay(musicians,instruments){
  var allTheMusicians= [];
  for(var i=0;i<musicians.length;i++)
  allTheMusicians.push(musicians[i] + " plays " + instruments[i]);

    return allTheMusicians;
}
// function johnLennonFacts(){
//    var facts= [ "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
//  var hisFacts = [];
//     var i = 0;
//     while (i < facts.length) {
//         hisFacts.push(facts[i] +"!!!");
//         i++;
//     }
//     return hisFacts;
//   }
function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}
