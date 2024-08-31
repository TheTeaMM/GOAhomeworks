// 1 
function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }
//2
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (fuelLeft * mpg >= distanceToPump) {
      return true
    }
    else {
      return false
    }
  };

// 3 
const quarterOf = (month) => {
    if(month===3){
      return 1
    } else if(month===8){
      return 3
    } else if(month===11){
      return 4
    } else if(month===5){
      return 2
    } else if(month===12){
      return 4
    } else if (month===1){
      return 1
    } else if(month===9){
      return 3
    } else if (month===2){
      return 1
    } else if (month===10){
      return 4
    }else if (month===6){
      return 2
    }else if (month===4){
      return 2
    }else if (month===7){
      return 3
    }
  }
//4 
function testEven(n) {
    if (n%2===0) {
      return true
    }
    else {
      return false
    }
  }