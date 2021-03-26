// Your code here
function mapToNegativize(sourceArray){
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * -1) 
    }
    return newArr
}

function mapToNoChange(sourceArray){
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i])
    }
    return newArr
}


function mapToDouble(sourceArray){
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * 2)
    }
    return newArr
}


function mapToSquare(sourceArray){
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] ** 2)
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint){
    let sum = 0
        if(!startingPoint){
            for (let i = 0; i < sourceArray.length; i++){
                sum += sourceArray[i]
            }
            return sum
        }else if (startingPoint){
            for(let i = 0; i < sourceArray.length; i++){
                startingPoint += sourceArray[i]
            }
        
        }
        return startingPoint
}

function reduceToAllTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] === false){
            return false
            }
        }
        return true
}

function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] === true){
            return true
            }
        }
        return false
}