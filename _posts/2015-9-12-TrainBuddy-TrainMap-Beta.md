---
layout: post
title: Train Buddy - TrainMap Beta.
---

After being in alpha state for about a month Train Buddy v2 (with TrainMap) is moving to beta today.

For those who didn't know what's the TrainMap is, your initial guess is correct. It's a map of trains (in Srilanka). The way it work is, it gets the status data from application users (only when they allow) in the train and share it with all the application users. Since the status (location/speed) of users in train being same with the status of the train, all the users now have a real-time map of trains.

There are few changes (since alpha) worth mentioning.

1. The location marker header now displays the destination and speed(km/h value) of the train.
2. Users can set the destination(string of length 3) of the train.
3. Back-end deletes the records not updated for 5 minutes. So users won't have to deal with stale statuses.
4. Time interval between two communications with the back-end is user configurable through settings screen.

Since the TrainMap needs both GPS and Mobile coverage to function correctly there are some areas where the statuses will not get updated. Also in the middle of train the GPS reception seems to be poor in some devices. But for overall application seems to be working OK. So far I was only being able to test the application with few devices/users only. And even from those few users getting feedback is harder than developing the application. :)

<div align="center"><img src="{{ site.baseurl }}/assets/trainmap/one_marker.png" style="width: 300px;">   <img src="{{ site.baseurl }}/assets/trainmap/two_markers.png" style="width: 300px;"></div>

You can get the beta version from the link below.

[play.google.com/apps/testing/com.kasungamlath.trainbuddy](https://play.google.com/apps/testing/com.kasungamlath.trainbuddy)

I would love to hear about your experience even it's terrible. You can give me your feedback through,

* this page itself as a comment
* this [community page](https://plus.google.com/communities/111728508620143036732) reserved for this application testers
* or even through social media/email is fine.

Happy train stalking...
