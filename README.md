# [Hugo minimalist SPA](https://saggamedeveloper.github.io/hugo-minimalist-spa/)
A minimalist [single page application](https://en.wikipedia.org/wiki/Single-page_application) theme for [Hugo](https://github.com/gohugoio/hugo)
(minimum 0.43).

# About
Hugo does not support single page applications natively, so making a theme that does is quite a challenge. This is the main reason I decided to make this theme.

This theme was created using [Hugo 0.48](https://github.com/gohugoio/hugo/releases/tag/v0.48),
and it should work from [0.43](https://github.com/gohugoio/hugo/releases/tag/v0.43) onward. Still, it could give some trouble with versions below 0.48,
so be aware of it if you use older versions. You can always open an
issue if you are unable to make it work, I will be glad to help and
make the necessary enhancements.

# How to use (MUST READ!)
This is not the usual Hugo theme you can download and start
adding contents. Making it single page comes with some limitations
you need to know before starting to build your website.

## Contents
Once you start adding content to your website, the default theme contents
will automatically disappear.

### Adding content
To add custom content you need to create a folder named `tabs/`
inside your page's `content/` folder. All the content of your page
will be loaded from here, and it must be on Markdown (`.md`). Do
not add any other files/folders in the `tabs/` folder. If you do,
the theme will still treat it as a Markdown file, causing
major problems with your final HTML.

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

![alt text](https://raw.githubusercontent.com/SAGGameDeveloper/hugo-minimalist-spa/master/available_icons.png "Available icons")

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

The Go implementation that does this can be found in `navbar.html` and `main_content.html` (in `layouts/partials/` folder),
they use the filename and custom title (if there's any) to inject the proper id's into the final HTML. Those id's are then
used by the client side JavaScript to request the correct files from the `content/tabs` folder.

Due to Hugo limitations, the custom titles cannot be directly injected into the navigation bar for their use.
To skip this problem, I use a temporal `<div>` whose id is the custom title. This `<div>` is set in the `single.html` layout,
which has direct access to the `.Title` through Hugo. The JavaScript router then takes the id (if it's not empty, which means
a custom title has been set), and uses it to set the navigation bar proper names. After that it extracts the inner HTML of
the temporal `<div>`, created by the single layout, to finally get disposed of it.

# Distribution
You can modify this theme as much as you want. If you want to distribute a modified version,
you must publish a link to this repository indicating that I'm the original author. Also, I would
appreciate if you notified me so I can see it.