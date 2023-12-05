const array = [{
    id : 1,
    name : "Muhmaad Ali",
    score : 92
},
{
    id : 2,
   name : "Muhmaad Ahmed",
   score : 89
},
{
   id : 3,
   name : "Muhmaad Raza",
   score : 88
},
{
    id : 4,
    name : "Muhmaad Saqib",
    score : 85
 },
 {
    id : 5,
    name : "Muhmaad Mustafa",
    score : 54
 },
]
const TopResult = array.sort((a, b) => b.score - a.score)
const topScorer = TopResult.splice(0,3)
console.log("Top Scorers", topScorer)

const LowestResult = array.sort((a, b) => a.score - b.score)
const LowestScorer = LowestResult.splice(0,3)
console.log("Lowest Scorers",LowestScorer)