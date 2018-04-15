const fs=require('fs');
const Jimp = require("jimp");   //jimp is used to test the outputted files

/*
Maintains a constant "glitch amount"
path : Input file path (string, absolute or relative). For now it should be a jpeg.
outputName : The name of the output files.
count : The number of output files to make.
strength : the number of bytes to remove. Warning: Set too high and it may cause an endless loop! Recommended to stay below 1000.*/
function static(path,outputName,count,strength){
    for(var i=0;i<count;i++){
        var input=fs.readFileSync(path);    //set input to the buffer of the file
        if(!!input){
            for(var j=0; j<strength;j++){
                var index=Math.floor(Math.random() * (input.length - 0) + 0);
                input[index]=""
            }
            fs.writeFileSync("./"+outputName+i+".jpg",input)
            Jimp.read("./"+outputName+i+".jpg").then(function (image) { //try to open the file in jimp
            }).catch(function (err) {   //if you cant open...
                i--                     //go back to the same index so we can try that again.
            });
        }else{
            throw("Input file cannot be empty.")
        }
    }
}

/*
Increases the glitchyness until the peakStrength is exceeded.
increment : How much more you want the image glitched each frame
peakStrength: the highest amount of glitch you want. Warning: Set too high and it may cause an endless loop! Recommended to stay below 1000.
*/
function increasing(path, outputName,increment,peakStrength){
    for (var i=0;i<peakStrength;i+=increment){
        static(path,outputName+i,1,i)
    }
}

exports.increasing=increasing
exports.static=static