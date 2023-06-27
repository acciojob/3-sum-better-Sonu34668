function threeSum(arr, target) {
let closestSum = Infinity;
	let minDiff = Infinity;
	arr.sort((a,b) => a-b);
	for(let i=0; i<arr.length-2; i++){
		let left=i+1;
		let right = arr.length - 1;
		while(left<right){
			const sum = arr[i]+arr[left] + arr[right];
			const diff = Math.abs(sum - target);
			if(diff<mindiff){
				minDiff=diff;
				closestSum=sum;
			}
			if(sum<target){
				left++;
			}
			else{
				right--;
			}
		}
	}
	return closestSum;
  
}

module.exports = threeSum;
