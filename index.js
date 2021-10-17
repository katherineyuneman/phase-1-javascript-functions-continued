function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(saturdayFun());
console.log(mondayWork());



function wrapAdjective(emphatic = "*") {
    return function(adjective = "special"){
        return (`You are ${emphatic}${adjective}${emphatic}!`);
    };
};
console.log(wrapAdjective()());



