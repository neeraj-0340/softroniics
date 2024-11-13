function smaller(nums){
    return nums.map(num=>nums.filter(x=>x<=num).length-1);
}
console.log(smaller([8,1,2,2,3]));