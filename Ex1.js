/*
* 1. Given two variables, which are the angles of a triangle.
*    Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).
*/

let triangle_first_angle = 45;
let triangle_second_angle = 90;
const sum_of_the_angles_of_triangle = 180;

triangle_third_angle = sum_of_the_angles_of_triangle - (triangle_first_angle + triangle_second_angle);

console.log(`triangle_third_angle = ${triangle_third_angle}`);
