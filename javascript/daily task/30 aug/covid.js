covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]
]

//1
let highpos = covid_data.reduce((a, b) => a[2] > b[2] ? a : b)
console.log(highpos[1]);

console.log('--------------------');


//2
let highdose = covid_data.reduce((a, b) => a[5] > b[5] ? a : b)
console.log("highest cases :" + highdose[1]);

console.log('--------------------');

//3
let dcase = covid_data.reduce((a, b) => a[3] < b[3] ? a : b)
console.log("highest casualities :" + dcase[1]);

console.log('--------------------');

//4
let sort = covid_data.sort((a, b) => b[2] - a[2]  )
console.log(sort);

console.log('--------------------');

//5
let pos15 = covid_data.some((a, b) => a[2] > 1500)
console.log(pos15);

console.log('--------------------');

//6
let dose1 = covid_data.sort((a, b) => a[5] - b[5]);
console.log("sorted :" + dose1);
console.log(dose1);

console.log('--------------------');

//7
console.log('details of thrissur :' + covid_data[2]);
