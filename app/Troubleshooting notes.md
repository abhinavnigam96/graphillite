Troubleshooting notes

* Had to get the Starlink object from the sample repo, and then convert it.
* When using Canvas in my code, was getting TypeError: gl.texImage3D is not a function (it is undefined). To fix this, had to change the Open GL ES API level setting on the emulator and then restart. 