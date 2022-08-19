// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]


//Function to return super bowl win year
  function superbowlWin(record){
    for (let items of record){
        if(items.result === 'W'){
            return(items.year)
        }
    }
  }


//If there is no win retun undefined
  let Item = record.find(superbowlWin);