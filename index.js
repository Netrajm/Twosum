const numsarry = [1,3,9,2];
const target = 11;

const Twosum = function (nums, target){

  const nummap = {};

  for(let p = 0; p < nums.length; p++){

    const mapvalue = nummap[nums[p]];
    if(mapvalue > 0){
      return [p, mapvalue];
    }else{
      const numtofind = target - nums[p];
      nummap[numtofind] = p;
    }
  }
return null;
}

console.log(Twosum(numsarry, target));