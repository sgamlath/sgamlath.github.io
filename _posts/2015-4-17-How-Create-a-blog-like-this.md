---
layout: post
title: How to create and host a simple, blog-aware, static site (like this).
---

Proccess requires a github account (which you can have for free) and about 30 mins of free time. This is made possible by FOSS tool called [jekyll](http://jekyllrb.com/).

1. Sign up for free github account (if you haven't already).

2. Fork [jekyll-now](https://github.com/barryclark/jekyll-now) repository. (Just press the fork button on top right of the page).

3. Rename the forked repository to "yourusername.github.io".(you can access rename from settings page of the repository) For example if your username is "abcd" your repository name should be "abcd.github.io".

4. Now visit "http://yourusername.github.io". You should find your blog you just created there (It could be take up to 10 mins as Github suggests). If not check the repository settings page. If there is a error you could see that in page with built error notification.

	Easy right?

5. Now edit the "_config.yml" file in your repository to make that blog personalized (this file is pretty self-explanatory). And commit the changes.

6. Publishing the first post. Edit the "/_posts/2014-3-3-Hello-World.md" by replacing the placeholder content with your own.

7. If you own a domain name edit the "CNAME" file and got to your domain name registrar and add a CNAME DNS record. So you can visit the blog you just created in "www.yourdomainname.com".

	type: CNAME

	host: www.yourdomainname.com

	answer: yourusername.github.io

	TTL: 300

8. Now you better learn on git(if you haven't already) in order to continue adding blog posts.

This is the [link](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/) for the guide I followed which is more explanatory.


[Jekyll](http://jekyllrb.com/)


[Github](https://github.com/)





