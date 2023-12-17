function stringChop(str, size) {
  // your code here
	let part1 = str.substring(0,size);
 	let part2 = str.substring(size+1,str.length-size-3);
 	let subpart1 = part2.substring(0,(size/2)+3);
 	let subpart2 = part2.substring((size/2)+3,part2.length);

   let arr[ part1, subpart1,subpart2 ];
	return arr;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
