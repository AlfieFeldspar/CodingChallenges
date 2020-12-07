/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 INPUT:
 [{x:1, y:1},{x:2, y:3},{x:3,y:3},{x:3,y:4},{x:4,y:5}]

 */
function getCount(objects) {
    return objects.filter((object)=> (object.x===object.y)).length
}