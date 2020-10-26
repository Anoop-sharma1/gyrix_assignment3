class ArrayOperations {

    constructor() {

    }

    printEvenNo(arrayElement) {
        console.log("Even Numbers in the Array are as Follow :");
        console.log();
        for(let i=0 ; i<arrayElement.length ; i++) {
            if(arrayElement[i] % 2 == 0) {
                console.log(arrayElement[i]);
            }
        }
        console.log();
    }

    printOddNo(arrayElement) {
        console.log("Odd Numbers in the Array are as Follow :");
        console.log();
        for(let i=0 ; i<arrayElement.length ; i++) {
            if(arrayElement[i] % 2 != 0) {
                console.log(arrayElement[i]);
            }
        }
        console.log();
    }

    printPerfectNo(arrayElement) {
        console.log("perfect Numbers are as Follow : ");
        console.log();
        for(let i = 0; i < arrayElement.length ; i++) {
            let sum = 0 ;         
            for(let j=1 ; j <= arrayElement[i] / 2 ; j++){
                if(arrayElement[i] % j === 0){
                    sum = sum + j ;
                }
                if(sum == arrayElement[i] && sum != 0) {  
                    console.log(arrayElement[i]);
                }
            }
        }
        console.log();
    }

    searchNo(arrayElement, num) {
       let count = 0; 
       let l = 0;
       for(let i = 0; i < arrayElement.length ; i++) {
           if(arrayElement[i] == num){
               count = 1;
               l = i;
           }
       }

       if(count == 1) {
        console.log("Element Found : ", arrayElement[l]);
       }
       else {
           console.log("Element not Found : ");
       }

       console.log();
    }

}

let arrayElement = [10 , 6, 8 , 28 , 9 , 17 , 19];
let arrObj = new ArrayOperations();

arrObj.printEvenNo(arrayElement);
arrObj.printOddNo(arrayElement);
arrObj.printPerfectNo(arrayElement);
arrObj.searchNo(arrayElement , 8);