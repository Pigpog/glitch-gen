# glitch-gen
Image corrupter made with gifs and videos in mind.

### About
glitch-gen is a node module that generates corrupt-but-still-viewable copies of any JPEG.

It has two functions (so far):
### Increasing
The "corrupt-ness" strength of the image increases over with every new frame.

![increasing sample](https://github.com/Pigpog/glitch-gen/blob/master/samples/increasing.gif)

```
glitch.increasing(path, outputName,increment,peakStrength)
```
path: String : the path to the input file. Jpegs only.

outputName: String: The file name of the output files.

increment: Integer : the amount to increase the strength by each frame.

peakStrength: Integer : Where to stop. WARNING: If it is too high, it can cause an infinite loop. Strength is relative to image resolution.

### Static
The "corrupt-ness" strength stays the same as it generates new frames.

![static-sample](https://github.com/Pigpog/glitch-gen/blob/master/samples/static.gif)

```
glitch.static(path,outputName,count,strength)
```
path: String : the path to the input file. Jpegs only.

outputName: String: The file name of the output files.

count: Integer: The number of frames to generate.

strength: How many bytes to remove. WARNING: If it is too high, it can cause an infinite loop. Strength is relative to image resolution.

### Installation
Clone this repository. Run `npm install` in the cloned directory.
