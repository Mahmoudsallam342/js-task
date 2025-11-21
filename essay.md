B. Part 2: Essay Questions

q1:forEach is an array method all requests is done in same time parallel and I cant handle async and await or break
using it if i want to apply the func to each item and i dont need async or breaking it
for of is aloop syntax i can break the loop or async await
i use it if i want to break or return and if I used async-await
=============================================================================================
q2: Hoisting
hoisting is the behavior of moving the decleration to the top of scope without initializing
for ex var:
var x=1 // assign value 1 to variable x
same result if I said
var x //decleration without init
x=1 // init value

ex let :
let x = 1
= let x
TDZ
x=1
the block is aware of variable but waiting until decleration and the var is in TDZ until it is decleared

ex const:
the code will not run cause of a syntax error const must decleard with initializing
=============================================================================================

q3:
== is equal value and ignore type
5 == "5" // true
=== equal value and type
5 == "5" //false
=============================================================================================

q4:
try statment used to handle a block when it is executed and if there is an error it throw the error to catch to handle it
=============================================================================================

q5: conversion is convert var to a new var with another data type
methods Number() , parsefloat(),parseint()
x="5"
Number(x)
x=5
or using unary+operator
x="5"
y = +x
y=5
coercion is converting data type to another auto
ex
let x=5
let y="5"
the output of sum is 55 as str datatype cause js consider + as concatentaion operator
let x=5
let y="5"
the output of x-y is 0 as str num
=============================================================================================
