"use strict";

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [71, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);



const events =[]
for (const [k,v] of gameEvents){
  if (!events.includes(v)){
    events.push(v)
  }
}
console.log(events)

gameEvents.delete(64)

console.log("An event happened, on average, every ",90/gameEvents.size, "minutes")

for (const [k,v] of gameEvents){

    if (k <= 45){
      console.log("[FIRST HALF] ",k,": ",v)
    }else{
      console.log("[SECOND HALF] ",k,": ",v)

    }

}