# [Hugo minimalist SPA](https://sag-dev.github.io/hugo-minimalist-spa/) ![hugo-theme](https://img.shields.io/badge/hugo-theme-brightgreen.svg) ![license](https://img.shields.io/badge/LICENSE-MIT-green.svg)

A minimalist [single page application](https://en.wikipedia.org/wiki/Single-page_application)
theme for [Hugo](https://github.com/gohugoio/hugo), with a clear focus on responsiveness,
simplicity and elegance.

![Theme sample](https://github.com/sag-dev/hugo-minimalist-spa/blob/master/images/screenshot.png "Theme sample")

# About
I love challenges, and making a single page application using Hugo, a static site generator,
seemed like a good one. The SPA core is made using plain Javascript (only JQuery is used
for the Ajax requests). I aim to provide a simple but powerful design anyone can use, either
for personal or professional matters. [Here](https://sag-dev.github.io/Cafe-website-SPA/)
you can see a working site example using this theme.

If you make any website using this theme I encourage you to open an issue, I will be glad
to showcase your site.

# Table of contents

I highly recommend to read the `How to use` section if you want to use
this theme, you may find yourself lost if you don't.

[How to use (MUST READ)](#how-to-use-must-read)
 * [Prerequisites](#prerequisites)
 * [Instalation](#installation)
 * [Contents](#contents)
 	* [Adding content](#adding-content)
 	* [Titling content](#titling-content)
 	* [Ordering content](#ordering-content)
 * [Configuration](#configuration)
 * [Social media](#social-media)
 	* [Ordering social media](#ordering-social-media)
 * [Custom imports](#custom-imports)
 * [Styling](#styling)
 	* [Colors](#colors)
 	* [Fonts, images and other static files](#fonts-images-and-other-static-files)
 	* [SASS and CSS](#sass-and-css)

[Advanced modifications](#advanced-modifications)
 * [Javascript SPA core](#javascript-spa-core)
 * [Layouts](#layouts)

[Distribution](#distribution)
 * [License](#license)
 * [Contributing](#contributing)
 * [Versioning](#versioning)

# How to use (MUST READ)
This is not the usual Hugo theme you can download and start
adding contents right away. But don't get scared, you won't need to read
all this document in order to create your site. Unless you aim to create
something very customized, you just need to read the basics.
Making the theme a SPA comes with some essential features
you need to know before starting to build your website.

## Prerequisites
The only thing you need in order to use this theme is Hugo.
If you still don't have it, you can find a complete installation guide
[here](https://gohugo.io/getting-started/installing/).

I highly recommend *Hugo 0.48* or higher, but it may work with older versions
superior to 0.43. If you have any trouble with your Hugo version using this
theme, I invite you to open an issue on Github so I can help you.

## Installation
You can find the Hugo's theme installation guide
[here](https://gohugo.io/themes/installing-and-using-themes/). But those
are the basic steps you should be following (assuming you already installed
Hugo):

Open a terminal wherever you want to create your new site. Invoke Hugo
to do so using the following command (your Hugo base command may be different):

```
hugo new site NAME_OF_YOUR_SITE
```

Navigate to the `themes` folder of your site from the terminal:

```
cd NAME_OF_YOUR_SITE
cd themes
```

Clone this repository inside the `themes` folder your are in:

```
git clone https://github.com/SAGGameDeveloper/hugo-minimalist-spa
```

Go to the root folder of your site, open the `config.toml` file and
set the theme with the following line:

```
theme = "hugo-minimalist-spa"
```

That's all! You can now go and test your new site. To do so,
open a terminal in the root folder of your site and use:

```
hugo server -w
```

To see your new site, you just have to go to `localhost:1313` in
your web browser. This is the local server that will be hosting
your website, as long as you keep that terminal opened.

## Contents
Adding content to your site is very straightforward, just putting your `.md` files into
the `content` folder will do (keep reading).

Take into account that if you change the contents,
the individual URL's of each content tab will mostly sure change. So if you just
reload your browser your URL may still be pointing to the past tabs names. That will
cause the reload to partly or completely fail. So make sure your URL is the right one
if you change your content files/filenames.

### Adding content
To add custom content you need add your MarkDown files to the
`content` default folder of your site. All the content of your page
will be loaded from here, and it MUST be on Markdown (`.md`).

Do not add any other files/folders into `content`. If you do,
the theme will still treat it as a Markdown file, causing
major problems with your final HTML. Also, I highly recommend not
to use spaces or special characters in your filenames, that could
cause critical bugs with the URL's and the loading of your files.

Inside you markdown files you can write HTML if you want,
it will be added to the final `index.html` automatically. If you
need to use routes to elements inside your HTML, remember that paths
are relative to the final `index.html` file.

### Titling content
There are two ways to title your content. You can use the filename 
(NOT RECOMMENDED); just create your Markdown file and name it the
way you want. Or you can set a custom title inside the Markdown file 
(RECOMMENDED); start your file with the following snippet, and set the
title to the one you want:

```markdown
---
title: Your title goes here
---
```

### Ordering content
The navigation bar will automatically order your contents alphabetically
by filename (not title!). So if you use the filename as title, you cannot
only manually order your pages, but you could also cause bugs with the
URL (depending on the characters you use).

If you want to manually order your content, I recommend you to name your
files alphabetically with the order you want (letters better than
numbers), then setting the title inside the Markdown as explained before.

## Configuration
To be able to configure your own website parameters (such as the website title),
you need to have your own `config.toml` (or the Hugo supported language
your prefer) in your website's root.

To modify the author, title and language just write it down normally. Using `toml`:
```toml
author = "Me"
languageCode = "en-us"
title = "My website's title"
```
To modify the description you need to do it within the `params` section. Using `toml`:
```toml
[params]
	description = "This is my website"
```


## Social media
Modifying the social media icons is quite simple, the moment you add your own, the
theme default social media will disappear. Here you can see a list of supported icons:

![alt text](https://raw.githubusercontent.com/SAGGameDeveloper/hugo-minimalist-spa/master/images/available_icons.png "Available icons")

To add your social media just create a `social-media.toml` (or the Hugo supported language
your prefer) inside your `data/` folder, in your website's root directory. Then write down
every social media you want with the following syntax (or equivalent if not using `toml`):
```toml
[github]
	source = "images/social_media/github.svg"
	target = "https://www.github.com"

[name_of_another_socialmedia]
	source = "path_to_the_icon"
	target = "socialmedia_url"
```
All of the supported icons are in `images/social_media/`, with its name being the name
of the social media (without spaces and caps) plus the `.svg` extension.

If you want to add custom icons or custom social-media, you just have to add your images
to the `static/images/social_media/` folder of your own website. Remember that the path to
the source does not start in the `static/` folder, since it disappears after building your
page with Hugo.

### Ordering social media
Social media elements are sorted alphabetically by the name you give them. If you want to
keep a certain order, I recommend you to put a number before the name of each element, such
as this (in `toml`):

```toml
[2-github]
	source = "images/social_media/github.svg"
	target = "https://www.github.com"

[1-instagram]
	source = "images/social_media/instagram.svg"
	target = "https://www.instagram.com"
```

In this case, instagram would be the first social media element, while github would appear
right after it. Declaration order does not matter, you can place the elements as you wish in
the document.

## Custom imports
You can import your own files adding one layout to your page. To do so, create a file
named `custom_imports.html` and put it inside the `layouts/partials/` folder (create it
if you don't have one) of your website.

## Styling
Hugo minimalist SPA allows you to customize many aspects of its appearance.

### Colors
You can set custom colors for the theme so you can make it look as you want.

To do so, start by creating a `theme_style.toml` inside `data` folder in the root of your
website. The whole theme is based on 5 colors, so those are the ones you can set. In `toml`:
```
# HEADER/NAVBAR COLORS

color_header = "#111111"				#Background color of the header
color_navbar = "#474747" 				#Background color of the navbar

color_social_media = "#1f84b6" 			#Color of the social media icons
color_social_media_hover = "#FFB865" 	#Color of the social media icons on hover

color_navbar_elements = "white" 		#Color of the navbar elements
color_navbar_elements_hover = "#FFC98A" #Color of the navbar elements on hover


# MAIN CONTENT COLORS

color_text = "black"   					#Color of normal text

color_h1 = "#5863b8" 					#Color of the h1 elements
color_h2 = "#505792" 					#Color of the h2 elements
color_h3 = "#464c7d" 					#Color of the h3 elements

color_link = "#1f84b6"					#Color of the main content links
color_link_hover = "#FFB865"			#Color of the main content links on hover
```
Those variables are directly passed to the SASS files, so you can use any CSS supported
color you want.

The background of the main content is not a color but an image. You can replace it with
your own webpage static files as with any other element, just put a `background.png` in
the `static/images` folder of your site and Hugo will use it automatically. If you want
to use a color instead, you will need to modify the SASS file named `_main_content.scss`,
located inside `assets/sass/partials`. Replace the `background: url(...);` statement with
`background-color: 'your-color';`.

### Fonts, images and other static files
Hugo uses [Less Sans](https://www.behance.net/gallery/56973217/Less-Sans-Minimal-Typeface-Free-Download)
(created by [Wassim Awadallah](https://www.behance.net/blugraphic)) as its default font.
You can add your custom fonts using the `custom_imports.html` explained before, but that would
require you to change the SASS source files to use this new font. If you don't want to get
into that mess, you can just rename your font to `default.otf`, `default-light.otf` and
`default-bold.otf` respectively. Then put those files into your `static/fonts` folder (create
it if you don't have one) and the will be automatically used as the default font.

To change the logo you need to do the same process, name your logo file (must be a `.png`) as
`logo.png`. Then place it inside your `static/images/` folder (create it if you don't have one)
and it will be automatically used.

Your static folder is yours, so you can place any asset you might want to use inside, but only
those mentioned in this document have native theme support and will be automatically used. Remember
that every asset included in `static/` will be served into the final building, even if you never use it.

### SASS and CSS
You can add your custom CSS as you would do with your normal site, then import it using the
custom imports explained before, 

Hugo minimalist SPA is built using only SASS, so if you want to modify it I recommend you to read
the source files. I do not recommend at all to modify the compiled CSS, that won't keep the modifications
the next time you build your website, and it will probably be much harder to do.

You can find the SASS source files in the theme `assets/sass/` folder. In this case, imports are made
by the SASS compiler, so Hugo won't look in your `assets` folder before it does in the theme's. So,
if you want to customize the SASS, the simplest option is to modify the theme's files. This is not a practice
I would recommend in normal situations at all, but due to Hugo limitations there's no better way to do
it without getting too deep.

# Advanced modifications
You can modify the core source of the theme directly if you want, here you will find some important
aspects to take into account if you do so.

## JavaScript SPA core
The single page application core of this theme is made using JavaScript and JQuery (only for the AJAX requests).
If you want to modify it, you can find the code on `static/js`. There are other ways of achieving the same result
without JavaScript using Hugo's pipelines. I didn't find them very pleasant, but if you do,
you can create your own SPA implementation and delete the JavaScript source.

## Layouts
The layouts in this theme are not only used to build the final HTML's, but they also set the id's of
some elements using Hugo functions. Those id's are later used by the JavaScript code to make the AJAX
requests. This way the id's for the content can be set dynamically. At the same time, the JavaScript
code is able to find the files to be loaded without using external configuration files.

The Go implementation that does this can be found in `navbar.html` and `main_content.html` (in `layouts/partials/` folder).
They use the filename and custom title (if there's any) to inject the proper id's into the final HTML. Those id's are then
used by the client side JavaScript to request the correct files from the `content` folder.

Due to Hugo limitations, the custom titles cannot be directly injected into the navigation bar for their use.
To skip this problem, I use a temporal `<div>` whose id is the custom title. This `<div>` is set in the `single.html` layout,
which has direct access to the `.Title` through Hugo. The JavaScript router then takes the id (if it's not empty, which means
a custom title has been set), and uses it to set the navigation bar proper names. After that it extracts the inner HTML of
the temporal `<div>`, created by the single layout, to finally get disposed of it.

# Distribution

## License
This project is licensed under the MIT License - see the 
[LICENSE](https://github.com/sag-dev/hugo-minimalist-spa/blob/master/LICENSE) file for details.

## Contributing
If you want to contribute to this theme, you can make a pull request and I will be glad to check it out.

## Versioning
You can modify this theme as much as you want. If you want to distribute a modified version,
you must publish a link to this repository indicating that I'm the original author. Also, I would
appreciate if you notified me so I can see it.
