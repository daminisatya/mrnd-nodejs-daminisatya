
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0;
	for (var i=0;i<arrayOfNums.length;i++)
	{
		sum+=arrayOfNums[i];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var dis=[];
	var len=arrayOfNums.length;
	for (var j=0; j<len ;j++)
	{
		for(var k=0;k<dis.length;k++)
		{
			if(arrayOfNums[j]==dis[k])
			{
				break;
			}
		}
		if(k==dis.length)
		{
			dis.push(arrayOfNums[j])
		}
	}
	var sum=0;
	var i=0;
	for(i in dis)
	{
		sum=sum+dis[i];
	}
	return sum;
}

exports.ReverseString = function(str){
	var i=0;
	var len=str.length;
	var temp='';
	for(i=len-1;i>=0;i--)
	{
		temp+=str[i];
	}
	return temp;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

	var i=0
	var len=arrayOfStrings.length

}