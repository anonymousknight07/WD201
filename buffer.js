// Buffer- holds the data to be loaded in the memory for the streams
// Syntax- const variable_name= new Buffer("string","character encoding(utf-8) is the default value")

const buffer = new Buffer.from("Spiderman");

console.log(buffer.toJSON());//Gives the unicode character code
console.log(buffer)// raw binary data- nodeJS prints the hexadecimal value instead of binary value

console.log(buffer.toString());//Gives the string value

buffer.write("supermani");//buffer has limited memory and hence if the memory isnt sufficient only a part of the buffer is changed.

console.log(buffer.toString());

