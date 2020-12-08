/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    // deconstruction allows these variables to be assigned
    let [A, P] = expressions;
    // grab the constant of each equation
    let constant = Math.sqrt(P*P - (16*A))/4; 
    // bc constraints tell us variables are pos, the first will be smaller  
    return [P/4-constant,P/4+constant];
}
// The editor's code passes the final array to a template literal, but that is irrelevant to solving the problem.