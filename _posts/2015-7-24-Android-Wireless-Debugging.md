---
layout: post
title: Android Wireless Debugging.
---

Few weeks ago I came to know about this cool feature of wireless ADB (Android Debug Bridge). Following method doesn't need root access to device. If you have done any development in android I'm sure you already have used adb. As the name suggests it let you build a bridge between computer and android device. So you can control your device from the computer. adb has many uses other than debugging. just issue command adb to find out all of them. If you haven't already installed adb you'll have to install adb before continuing. On ubuntu or ubuntu variation command to install adb is "sudo apt-get install android-tools-adb".

To do this your computer and device has to be in a same wireless network. if you are not create a wireless access point from computer and from your device, connect to that access point. then connect the device through a usb cable to computer and follow these steps

1.Make sure adb is running in USB mode on host.

$ adb usb

2.Connect to the device over USB. (your devices should be listed as output of following command)

$ adb devices

3.Restart host adb in tcpip mode.

$ adb tcpip 5555

4.Find out the IP address of the Android device: Settings -> About tablet -> Status -> IP address. Remember the IP address, of the form #.#.#.#.

5.Connect adb host to device:

$ adb connect #.#.#.#

6.Remove USB cable from device, and confirm you can still access device:(if the device is not listed issue the command in 5th step again)

$ adb devices

if you got unable to connect error in step 5, try the same connect command few times. If the error is persitent kill the adb server "$ adb kill-server" and start again from step 1. If you still get the error try different port in step 3, for example "$ adb tcpip 5556". Then you got to change the connect command in step 4 to "$ adb connect #.#.#.#:5556".

Happy debugging !!!

<div align="center"><img src="{{ site.baseurl }}/assets/debugging.gif" style="width: 700px;"></div>

Source :[http://developer.android.com/tools/help/adb.html](http://developer.android.com/tools/help/adb.html)
