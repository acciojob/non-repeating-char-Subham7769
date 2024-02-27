function firstNonRepeatedChar(str) {
let arr = new Array(26).fill(0);

	for (let index = 0; index < str.length; index++) {
		if (str[index]>=65&&str[index]<=90) {
		arr[str.charcodeAt(index)-65]++;
		}else if (str[index]>=97&&str[index]<=122) {
		arr[str.charcodeAt(index)-97]++;
		}
		
	}
	for (let index = 0; index < str.length; index++) {
		if (arr[str.charcodeAt(index)]==1) {
			return str[index]
		}
	}

  // If no non-repeated character is found, return null
  return null;
}