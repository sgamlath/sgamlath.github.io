---
layout: post
title: TrainBuddy Offline Search.
---

Between writing a service to report the location and providing offline search I choose to implement offline search first. I did so because I thought that would be easier. But sadly I was wrong. I wanted to reuse the currently implemented components as much as possible. But that was proven to be harder than implementing them from the scratch. There were few reasons. I was using static methods, No dependency injection. So though I tried my best to loosely couple the components there were dependencies between components which makes it harder reusing them.

Finally I ended up refactoring the code and changing the flow of application internally. For user it'll look the same but inside there are some major changes. For example now most of the data is shared through the database. While this change causes a little performance reduction, now application is more robust and easier to maintain. Also you will experience a delay on the first run of the application because the database tables are created on the first run of the application. The [library](https://github.com/satyan/sugar) I'm using to utilize the database is creating the tables at the first run of the application and it does so in the main thread. Hence the first start up delay. There is a talk to do that in a separate thread, but until then the delay will remain since I can't control it in the application code.

So now moving to the good part. To use the offline search you'll have to provide the two stations you frequently travel in-between. For example the nearest station to your home and nearest station to the work place. After you set it up the offline caching will start and will save the schedule between those two stations for the coming week. And once finished you can search the schedule between the two stations anytime while staying offline. Time filters also work. (I limited the caching to two stations because that'll address the most of the use cases without confusing the user while keeping the resource use both in devices and API to the minimum).

<div align="center"><img src="{{ site.baseurl }}/assets/offline_search.png" style="width: 300px;"></div></br>

The offline cache will updated once a week. To do this it checks the date of the cache and network availability at the start of application and if the conditions are satisfied it'll run the cache update. Cache will also be updated if you change a frequent station (in settings). There are few other use cases remain to consider when to update the cache. And hopefully they will be addressed in the next production release. This feature is live in the current beta (v1.3). As usually you are welcome to try it. Also I changed the beta testing method to "open". So you'll be able to access the beta version through the following link regardless you were a member of the testing community. You can always contact me with suggestions and bug reports.

Thanks for reading.

tl;dr

Train Buddy beta now works even in offline mode.

[Beta version on Google Play](https://play.google.com/apps/testing/com.kasungamlath.trainbuddy)

[Stable version on Google Play](https://play.google.com/store/apps/details?id=com.kasungamlath.trainbuddy)
