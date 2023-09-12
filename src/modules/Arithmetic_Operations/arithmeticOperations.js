function subtractInArray(numbers) {
    return numbers.reduce((acc,curr) => {
        return Number(acc) - Number(curr);
    });
}

function addInArray(numbers) {
    return numbers.reduce((acc,curr) => {
        return Number(acc) + Number(curr);
    });
}

function multiplyInArray(numbers) {
    return numbers.reduce((acc,curr) => {
        return Number(acc) * Number(curr);
    },1);
}

function divisionInArray(numbers) {
    return numbers.reduce((acc,curr) => {
        return Number(acc) / Number(curr);
    })
}

export {addInArray,subtractInArray,multiplyInArray,divisionInArray};