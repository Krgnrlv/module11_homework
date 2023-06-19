export function getPercents(percent, number){
    if (number>=0 && percent>=0){
        if (number === 0){
            return ("Can't divided by zero");
        }else{
            return (`${percent} is ${(percent/100)*number} per cent from ${number}`);
        }
    }else{
        return("invalid data");
    }
}