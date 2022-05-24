// https://jsikim1.tistory.com/161

var decimal = 1023;

var binary = decimal.toString(2); // 2진수로
var octal = decimal.toString(8); // 8진수로
var hex = decimal.toString(16); // 16진수로

var binary = "1111111111";
var decimal = parseInt(binary, 2); // 2진수에서 10진수로

var octal = "1777";
var decimal = parseInt(octal, 8); // 8진수에서 10진수로

var hex = "3ff";
var decimal = parseInt(hex, 16); // 16진수에서 10진수로

var binary = "1111111111";
var hex = parseInt(binary, 2).toString(16); // 2진수에서 16진수로

var hex = "3ff";
var octal = parseInt(hex, 16).toString(8); // 16진수에서 8진수로
