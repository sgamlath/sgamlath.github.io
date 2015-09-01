---
layout: post
title: Train Buddy v2 (with Location Tracking).
---

Just before the end of semester vacation I released a beta of train buddy with location tracking service. Once a user started it through the train map screen it'll access the location data of the device and will post them to the back-end once every predefined time interval.

For now it only posts latitude, longitude and user set destination code to the back-end. So the data is anonymous. Nothing is posted to link the location with the one who is reporting it. Also the data is not persistent in the back-end. While the service is running the same data record will be updated per user. And when the service is stopped that record will be deleted. So the data isn't historical and at the given time only the real time data is kept in back-end. Users can get these data from the train map screen. It will display as one marker per one location reported with the destination code as the title.

<div align="center"><img src="{{ site.baseurl }}/assets/location_tracking.png" style="width: 400px;"></div></br>

For the service to post the location updates to the back-end both location and data connection should be active in the device. So this will cause a battery drain to some extent. I calculated 15% of battery level reduction with constantly running the service for one and half hours in a session. and when the signal reception is low the device get heated because the device radio is constantly trying to receive the signals. I think the battery drain and the heating issue can be reduced by fine tunning the interval of posting the data. It posts once per every 5 seconds in the current configuration. I only tested the system with only two devices. So have no idea how the system will work with multiple devices reporting the location at once.

Then there is also problem of getting locations when in middle of the train. Because GPS doesn't work well in indoors. It works great near doors and windows but in the middle of the train it struggles to connect to the GPS.

I'm hopping to release a production version once those kinks got sorted out. So guys you'll be able to stalk the trains in near future.

I also added push notifications in the beta version. it will be used for emergency notifications which is still being implemented.

Get the Beta from [Google Play](https://play.google.com/apps/testing/com.kasungamlath.trainbuddy)

UPDATE :It seems OK with reporting multiple locations.
