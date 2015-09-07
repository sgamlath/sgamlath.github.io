---
layout: post
title: Train Buddy Documentation.
---

This is a summarized, comprehensive description about Train Buddy application.

What is train buddy?

It's basically a combination of two application.

One is the schedule application. Here users can lookup the train schedule from official ICTA railway services API. Though it's being official, note that some of data it returns is erroneous. Some of trains even travel faster than time. There is no simple fix for this other that rewriting the API and fill a database with correct data. Even if I'll be able to build the API. Filling it with correct data can't be done by a one person but group of train commuters with a considerable good will. So until such user-base is present, all the users will have to enjoy the time travel trains.

Regarding the API there is another issue. It usually goes down on Sunday in every week. May be thats because it get overloaded from queries on Sundays because number of people are usually trying to find trains to get back to work. But I personally think the reason is the API is Jew and it's very religious. I tried to partially fix this problem by offering a off-line schedule. Users will have to name his/her frequent two stations in preference screen and then application will take care of the rest.

Now about the second application. It's the Train Map. This is where the interesting stuff happens. If you ever commuted in train there is very good chance you have waited in a railway station more than enough wondering where the fuck is this train. This application answers to try that question with support of set of users with considerable good will. If one of that users is in the train you have being waiting for, you're in luck. The way this work is the users in trains run a service which posts there locations to a central server so the other users will be able to monitor the trains they desire. It's just like in torrents, except here users seed / leech location data.

Those are the two applications the train buddy is consisted with. Now let's go in to the details.
