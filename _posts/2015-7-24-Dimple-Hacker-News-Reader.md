---
layout: post
title: Dimple - A Hacker News Reader.
---

In the same after exam break that I changed the TrainBuddy (my other android app)'s visual design, I made some changes to Hacker News reader.( In fact changed it's name too).

<div align="center"><img src="{{ site.baseurl }}/assets/dimple.png" style="width: 400px;"></div>

Inspired by the Google Now Story cards design I changed the design of news Item. Altering what I already had was easy. Loading the thumbnail image was the question.

After bit of Googling and tinkering I hacked my own web app to return a 192x192 thumbnail when an url is provided. First it'll try to get the image from web page, if failed will look for apple-touch-icon of the web site, which is basically the site favicon with higher resolution. If that too fails it will return a transparent image. So the bottom line is server will always return a thumbnail no matter what the provided url. I did it like this is to stop the repeated retry requests of ION (image loading library), I used to load the images. The app will first fill the thumbnail placeholder with a random color and first letter of the title. then ION will load the thumbnail from the server on top of that. So even the server failed to find a image from the url, the news Item will look good.

In the previous setup. Whole item list for listview is populated at the beginning with news index values. Then separate items are loaded from the HN API at the time when list items are created. The way android lists work is they only keep items in memory that are visible to user and additional two in memory, one in top and one. Loading items in this way is OK when the data is stored locally. But when data is coming from an external API this is not OK. Users will have to wait until the news item is retrieved and loaded. The app will feel slow and laggy. Not a good UX. So I ended up retrieving news items as the scrolling happens, 20 items at once. And immediately send API requests to these new items. So when the items are created for user the data will hopefully be present in device. And only if this fails user can manually load the items once they were visible to them.

I also added support for sharing items. So now the long press on Item title or long press on thumbnail will open the dialog to share. And news Item title + url will be passed with that share intent. Normal click on title and thumbnail will open the article in device browser while click on 2nd raw which contains the domain age and user will open the article in hn web site where user can read the conversation about the article.

Of course there is still a long way to go for this app. I still have number of functions to implement. But before start doing that I would like to get feed back on the things I already implemented and get them right. Plus I have no idea how the server will hold. So far it served only me.

I have released the application for beta users. You are welcome to join this [G+ community](https://plus.google.com/communities/118167818139031156233), follow the steps listed there, and enjoy the beta version.

Here is the link to application in [Google play](https://play.google.com/store/apps/details?id=com.kasungamlath.hackernews). If you are not a beta user you'll only see the old version of the application.(Even if you joined the above G+ page it could take some time to access the beta version, as notified by Google. So join the community install the old version and once your beta state is activated, you'll get an update notification)

You can provide your valuable feedback in here or in [G+ page](https://plus.google.com/communities/118167818139031156233).

Happy Reading !!!
