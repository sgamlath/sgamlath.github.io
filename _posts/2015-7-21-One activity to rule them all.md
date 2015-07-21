---
layout: post
title: One activity to rule them all.
---

This is a post about current architecture of the Train Buddy application. It has only one activity and multiple fragments for work and UI. Communication done via interfaces. Fragments are independent with each and they all communicate through the activity. It makes it easier to debug and maintain the code. loosely coupled, high cohesive classes is considered as a good in SE. Also It's easier to share the data structures, easier to save the state through the life cycle of the application. And it makes it possible to keep the application logic in that single class.

While this structure has it's own perks there are some problems too. Like all things in world this also is a trade of between good and bad things. As the comlexity/size of the application grows it will inevitably result a spaghetti code in the main activity. which could be lethal for the well being of the application. As a solution for this I think using dependency injection could result much shorter code. But I haven't tried it yet. And also all the fragment transitions had to manually handled while with separate activities they were handled by the OS, here it's not the case. so providing a sound navigation for the user is just short of a nightmare. when you got a navigation drawer it only cause more trouble. because navigation drawer is a part of the application bar and application bar is a part of the activity. There is only one appbar for the entire application. It's a good thing if the navigation drawer is allowed everywhere but that just confuses the user. so it's just shown in the top level UI fragments. and to handle this I had done fare number of ugly hacks. I'm pretty sure there had to be a better way which is still not known to me. since you have only one app bar if you want to change it's layout in some fragments(like having a collapsing toolbar) you are just out of luck.

So as you can see the bad out weights the good in my post. Mainly because I'm using it currently. People tend to see bad things of things they have and good things in things they haven't. The effect of green grass. So the bottom line here in my opinion, this structure is great if your application is simple but not so great when it grows.

<div align="center"><img src="{{ site.baseurl }}/assets/one_ring.jpg" style="width: 400px;"></div>
