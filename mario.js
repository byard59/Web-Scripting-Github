
printPyramid(5);
// TODO #2
// Take in user input for the height
let height = prompt("Height?");

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
let space = ".";
let brick = "#";
let layer = space+space+brick+brick;
let rows = 8;
let str = '';
for(let i=0; i<rows; i++){
	str = "";
	for(let j=0; j<rows+1; j++){
		str += "#";
	}
console.log(str);
}
console.log(space(9)+brick(2));
console.log(space(8)+brick(3));
console.log(space(7)+brick(4));
console.log(space(6)+brick(5));
console.log(space(5)+brick(6));
console.log(space(4)+brick(7));
console.log(space(3)+brick(8));
console.log(space(2)+brick(9));
console.log(space + brick(10));
    // TODO #1
    // print that pyramid!
console.log(printPyramid);
}

