/*
Author: Thomas Weir
Title: JavaScript Homework 2
Data: 2021-02-21
*/
let instructors = ['Carter', 'Cusack', 'Murray', 'Ryan', 'Pieroni'];
console.log('The third item is: ${instructors[2]}');
instructors[3] = 'Burchill';
console.log('The fourth item is: ${instructors[3]}');
let firstElement = instructors.shift();
console.log('The item removed was: ' + firstElement);
instructors.shift();
console.log('\nThe items currently in the instructors array are:\n');
for (let i = 0; i < instructors.length; i++)
{
    console.log(instructors[i]);
}
instructors.unshift('Murphy');
console.log(instructors.push('Croney'));
console.log('\nThe items currently in the instructors array are: \n');
for (let i = 0; i < instructors.length; i++)
{
    console.log(instructors[i]);
}
instructors.sort();
console.log('\nThe items currently in the instructors array are:\n');
for (let i in instructors)
{
    console.log(instructors[i]);
}
let instructorsCopy = instructors.slice(2, 5);
instructorsCopy.pop();
console.log('\nThe items currently in the instructorsCopy array are:\n');
instructorsCopy.forEach((instructor) =>
{
    console.log(instructor);
});