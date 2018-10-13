---
title: How to use
---

<br>
<h1 id="howtousemustread">How to use (MUST READ)</h1>

<p>This is not the usual Hugo theme you can download and start
adding contents right away. But don't get scared, you won't need to read
all this document in order to create your site. Unless you aim to create
something very customized, you just need to read the basics.
Making the theme a SPA comes with some essential features
you need to know before starting to build your website.</p>

<br>
<h2 id="prerequisites">Prerequisites</h2>

<p>The only thing you need in order to use this theme is Hugo.
If you still don't have it, you can find a complete installation guide
<a href="https://gohugo.io/getting-started/installing/">here</a>.</p>

<p>I highly recommend <em>Hugo 0.48</em> or higher, but it may work with older versions
superior to 0.43. If you have any trouble with your Hugo version using this
theme, I invite you to open an issue on Github so I can help you.</p>

<br>
<h2 id="installation">Installation</h2>

<p>You can find the Hugo's theme installation guide
<a href="https://gohugo.io/themes/installing-and-using-themes/">here</a>. But those
are the basic steps you should be following (assuming you already installed
Hugo):</p>

<p>Open a terminal wherever you want to create your new site. Invoke Hugo
to do so using the following command (your Hugo base command may be different):</p>

<pre><code>hugo new site NAME_OF_YOUR_SITE
</code></pre>

<p>Navigate to the <code>themes</code> folder of your site from the terminal:</p>

<pre><code>cd NAME_OF_YOUR_SITE
cd themes
</code></pre>

<p>Clone this repository inside the <code>themes</code> folder your are in:</p>

<pre><code>git clone https://github.com/SAGGameDeveloper/hugo-minimalist-spa
</code></pre>

<p>Go to the root folder of your site, open the <code>config.toml</code> file and
set the theme with the following line:</p>

<pre><code>theme = "hugo-minimalist-spa"
</code></pre>

<p>That's all! You can now go and test your new site. To do so,
open a terminal in the root folder of your site and use:</p>

<pre><code>hugo server -w
</code></pre>

<p>To see your new site, you just have to go to <code>localhost:1313</code> in
your web browser. This is the local server that will be hosting
your website, as long as you keep that terminal opened.</p>

<br>
<h2 id="contents">Contents</h2>

<p>Adding content to your site is very straightforward, just putting your `.md` files into
the `content` folder will do (keep reading).</p>

<p>
Take into account that if you change the contents,
the individual URL's of each content tab will mostly sure change. So if you just
reload your browser your URL may still be pointing to the past tabs names. That will
cause the reload to partly or completely fail. So make sure your URL is the right one
if you change your content files/filenames.
</p>

<h3 id="addingcontent">Adding content</h3>

<p>To add custom content you need add your MarkDown files to the
<code>content</code> default folder of your site. All the content of your page
will be loaded from here, and it MUST be on Markdown (<code>.md</code>).</p>

<p>Do not add any other files/folders into <code>content</code>. If you do,
the theme will still treat it as a Markdown file, causing
major problems with your final HTML. Also, I highly recommend not
to use spaces or special characters in your filenames, that could
cause critical bugs with the URL's and the loading of your files.</p>

<p>Inside you markdown files you can write HTML if you want,
it will be added to the final <code>index.html</code> automatically. If you
need to use routes to elements inside your HTML, remember that paths
are relative to the final <code>index.html</code> file.</p>

<h3 id="titlingcontent">Titling content</h3>

<p>There are two ways to title your content. You can use the filename 
(NOT RECOMMENDED); just create your Markdown file and name it the
way you want. Or you can set a custom title inside the Markdown file 
(RECOMMENDED); start your file with the following snippet, and set the
title to the one you want:</p>

<pre><code class="markdown language-markdown">---
title: Your title goes here
---
</code></pre>

<h3 id="orderingcontent">Ordering content</h3>

<p>The navigation bar will automatically order your contents alphabetically
by filename (not title!). So if you use the filename as title, you cannot
only manually order your pages, but you could also cause bugs with the
URL (depending on the characters you use).</p>

<p>If you want to manually order your content, I recommend you to name your
files alphabetically with the order you want (letters better than
numbers), then setting the title inside the Markdown as explained before.</p>

<br>
<h2 id="configuration">Configuration</h2>

<p>To be able to configure your own website parameters (such as the website title),
you need to have your own <code>config.toml</code> (or the Hugo supported language
your prefer) in your website's root.</p>

<p>To modify the author, title and language just write it down normally. Using <code>toml</code>:</p>

<pre><code class="toml language-toml">author = "Me"
languageCode = "en-us"
title = "My website's title"
</code></pre>

<p>To modify the description you need to do it within the <code>params</code> section. Using <code>toml</code>:</p>

<pre><code class="toml language-toml">[params]
    description = "This is my website"
</code></pre>

<br>
<h2 id="socialmedia">Social media</h2>

<p>Modifying the social media icons is quite simple, the moment you add your own, the
theme default social media will disappear. Here you can see a list of supported icons:</p>

<<<<<<< HEAD
<p><img src="https://raw.githubusercontent.com/SAGGameDeveloper/hugo-minimalist-spa/master/images/available_icons.png" alt="alt text" title="Available icons" /></p>
=======
<p><img src="https://raw.githubusercontent.com/SAGGameDeveloper/hugo-minimalist-spa/master/available_icons.png" alt="Available icons" title="Available icons" /></p>
>>>>>>> 00862df4207f7f3b54a48f1d36ef94a73bee6a10

<p>To add your social media just create a <code>social-media.toml</code> (or the Hugo supported language
your prefer) inside your <code>data/</code> folder, in your website's root directory. Then write down
every social media you want with the following syntax (or equivalent if not using <code>toml</code>):</p>

<pre><code class="toml language-toml">[github]
    source = "images/social_media/github.svg"
    target = "https://www.github.com"

[name_of_another_socialmedia]
    source = "path_to_the_icon"
    target = "socialmedia_url"
</code></pre>

<p>All of the supported icons are in <code>images/social_media/</code>, with its name being the name
of the social media (without spaces and caps) plus the <code>.svg</code> extension.</p>

<p>If you want to add custom icons or custom social-media, you just have to add your images
to the <code>static/images/social_media/</code> folder of your own website. Remember that the path to
the source does not start in the <code>static/</code> folder, since it disappears after building your
page with Hugo.</p>

<h3 id="orderingsocialmedia">Ordering social media</h3>

<p>Social media elements are sorted alphabetically by the name you give them. If you want to
keep a certain order, I recommend you to put a number before the name of each element, such
as this (in <code>toml</code>):</p>

<pre><code class="toml language-toml">[2-github]
    source = "images/social_media/github.svg"
    target = "https://www.github.com"

[1-instagram]
    source = "images/social_media/instagram.svg"
    target = "https://www.instagram.com"
</code></pre>

<p>In this case, instagram would be the first social media element, while github would appear
right after it. Declaration order does not matter, you can place the elements as you wish in
the document.</p>

<br>
<h2 id="customimports">Custom imports</h2>

<p>You can import your own files adding one layout to your page. To do so, create a file
named <code>custom_imports.html</code> and put it inside the <code>layouts/partials/</code> folder (create it
if you don't have one) of your website.</p>

<br>
<h2 id="styling">Styling</h2>

<p>Hugo minimalist SPA allows you to customize many aspects of its appearance.</p>

<h3 id="colors">Colors</h3>

<p>You can set custom colors for the theme so you can make it look as you want.</p>

<p>To do so, start by creating a <code>theme_style.toml</code> inside <code>data</code> folder in the root of your
website. The whole theme is based on 5 colors, so those are the ones you can set. In <code>toml</code>:</p>

<pre><code># HEADER/NAVBAR COLORS

color_header = "#111111"                #Background color of the header
color_navbar = "#474747"                 #Background color of the navbar

color_social_media = "#1f84b6"             #Color of the social media icons
color_social_media_hover = "#FFB865"     #Color of the social media icons on hover

color_navbar_elements = "white"         #Color of the navbar elements
color_navbar_elements_hover = "#FFC98A" #Color of the navbar elements on hover


# MAIN CONTENT COLORS

color_text = "black"                       #Color of normal text

color_h1 = "#5863b8"                     #Color of the h1 elements
color_h2 = "#505792"                     #Color of the h2 elements
color_h3 = "#464c7d"                     #Color of the h3 elements

color_link = "#1f84b6"                    #Color of the main content links
color_link_hover = "#FFB865"            #Color of the main content links on hover
</code></pre>

<p>Those variables are directly passed to the SASS files, so you can use any CSS supported
color you want.</p>

<p>The background of the main content is not a color but an image. You can replace it with
your own webpage static files as with any other element, just put a <code>background.png</code> in
the <code>static/images</code> folder of your site and Hugo will use it automatically. If you want
to use a color instead, you will need to modify the SASS file named <code>_main_content.scss</code>,
located inside <code>assets/sass/partials</code>. Replace the <code>background: url(...);</code> statement with
<code>background-color: 'your-color';</code>.</p>

<h3 id="fontsimagesandotherstaticfiles">Fonts, images and other static files</h3>

<p>Hugo uses <a href="https://www.behance.net/gallery/56973217/Less-Sans-Minimal-Typeface-Free-Download">Less Sans</a>
(created by <a href="https://www.behance.net/blugraphic">Wassim Awadallah</a>) as its default font.
You can add your custom fonts using the <code>custom_imports.html</code> explained before, but that would
require you to change the SASS source files to use this new font. If you don't want to get
into that mess, you can just rename your font to <code>default.otf</code>, <code>default-light.otf</code> and
<code>default-bold.otf</code> respectively. Then put those files into your <code>static/fonts</code> folder (create
it if you don't have one) and the will be automatically used as the default font.</p>

<p>To change the logo you need to do the same process, name your logo file (must be a <code>.png</code>) as
<code>logo.png</code>. Then place it inside your <code>static/images/</code> folder (create it if you don't have one)
and it will be automatically used.</p>

<p>Your static folder is yours, so you can place any asset you might want to use inside, but only
those mentioned in this document have native theme support and will be automatically used. Remember
that every asset included in <code>static/</code> will be served into the final building, even if you never use it.</p>

<h3 id="sassandcss">SASS and CSS</h3>

<p>You can add your custom CSS as you would do with your normal site, then import it using the
custom imports explained before, </p>

<p>Hugo minimalist SPA is built using only SASS, so if you want to modify it I recommend you to read
the source files. I do not recommend at all to modify the compiled CSS, that won't keep the modifications
the next time you build your website, and it will probably be much harder to do.</p>

<p>You can find the SASS source files in the theme <code>assets/sass/</code> folder. In this case, imports are made
by the SASS compiler, so Hugo won't look in your <code>assets</code> folder before it does in the theme's. So,
if you want to customize the SASS, the simplest option is to modify the theme's files. This is not a practice
I would recommend in normal situations at all, but due to Hugo limitations there's no better way to do
it without getting too deep.</p>

<br>
<h1 id="advancedmodifications">Advanced modifications</h1>

<p>You can modify the core source of the theme directly if you want, here you will find some important
aspects to take into account if you do so.</p>

<br>
<h2 id="javascriptspacore">JavaScript SPA core</h2>

<p>The single page application core of this theme is made using JavaScript and JQuery (only for the AJAX requests).
If you want to modify it, you can find the code on <code>static/js</code>. There are other ways of achieving the same result
without JavaScript using Hugo's pipelines. I didn't find them very pleasant, but if you do,
you can create your own SPA implementation and delete the JavaScript source.</p>

<br>
<h2 id="layouts">Layouts</h2>

<p>The layouts in this theme are not only used to build the final HTML's, but they also set the id's of
some elements using Hugo functions. Those id's are later used by the JavaScript code to make the AJAX
requests. This way the id's for the content can be set dynamically. At the same time, the JavaScript
code is able to find the files to be loaded without using external configuration files.</p>

<p>The Go implementation that does this can be found in <code>navbar.html</code> and <code>main_content.html</code> (in <code>layouts/partials/</code> folder).
They use the filename and custom title (if there's any) to inject the proper id's into the final HTML. Those id's are then
used by the client side JavaScript to request the correct files from the <code>content</code> folder.</p>

<p>Due to Hugo limitations, the custom titles cannot be directly injected into the navigation bar for their use.
To skip this problem, I use a temporal <code>&lt;div&gt;</code> whose id is the custom title. This <code>&lt;div&gt;</code> is set in the <code>single.html</code> layout,
which has direct access to the <code>.Title</code> through Hugo. The JavaScript router then takes the id (if it's not empty, which means
a custom title has been set), and uses it to set the navigation bar proper names. After that it extracts the inner HTML of
the temporal <code>&lt;div&gt;</code>, created by the single layout, to finally get disposed of it.</p>
<br>