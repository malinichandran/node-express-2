
function timeWord(str){
    
    let hourMap = new Map([
                  ['00', 'twelve'],
                  ['01', 'one'],
                  ['02', 'two'],
                  ['03', 'three'],
                  ['04', 'four'],
                  ['05', 'five'],
                  ['06', 'six'],
                  ['07', 'seven'],
                  ['08', 'eight'],
                  ['09', 'nine'],
                  ['10', 'ten'],
                  ['11', 'eleven'],
                  ['12', 'twelve'],
                  ['13', 'one'],
                  ['14', 'two'],
                  ['15', 'three'],
                  ['16', 'four'],
                  ['17', 'five'],
                  ['18', 'six'],
                  ['19', 'seven'],
                  ['20', 'eight'],
                  ['21', 'nine'],
                  ['22', 'ten'],
                  ['23', 'eleven'],          
    ]);

    let zeroToNineMap = new Map([
                    ['0', 'oh'],
                    ['1', 'one'],
                    ['2', 'two'],
                    ['3', 'three'],
                    ['4', 'four'],
                    ['5', 'five'],
                    ['6', 'six'],
                    ['7', 'seven'],
                    ['8', 'eight'],
                    ['9', 'nine']
        
    ]);

    let minuteMap = new Map([
                    ['10', 'ten'],
                    ['11', 'eleven'],
                    ['12', 'twelve'],
                    ['13', 'thirteen'],
                    ['14', 'fourteen'],
                    ['15', 'fifteen'],
                    ['16', 'sixteen'],
                    ['17', 'seventeen'],
                    ['18', 'eighteen'],
                    ['19', 'nineteen'],
                    ['20', 'twenty'],
                    ['30', 'thirty'],
                    ['40', 'forty'],
                    ['50', 'fifty']
    ]);
    let arr = str.split(":")
    let result = [];
    if(arr[0] === "00" && arr[1] === "00"){
     return "midnight";
    }
    if(arr[0] === "12" && arr[1] === "00"){
    return "noon"
    }
    let minute = arr[1].split("");
    let hour = result.push(hourMap.get(arr[0]))
    if(minute[0] === "0"){
        result.push(zeroToNineMap.get(minute[0]))
    }
    if(minute[0] === "1"){
       result.push(minuteMap.get(arr[1]))
    }
    if(minute[0] === "2" || "3" || "4" || "5"){
      result.push(minuteMap.get(`${minute[0]}0`))
      result.push(zeroToNineMap.get(minute[1]))
    }
    if(arr[0] >=12 ){
    result.push("pm")
    }
    else{
    result.push("am")
    }
    return result.join(" ")
    }
    timeWord("13:48")