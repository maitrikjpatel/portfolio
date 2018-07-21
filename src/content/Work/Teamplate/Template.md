---
title: "Title"
role: "Development, Design, Product Design, Branding, UX Prototyping, Design System" 
tools: "CSS, html, Javascript, Jade, SASS ..."
link: "www.sony.co.uk" 
publish: "true" 
category: "work, note, medium"
date:  "2015-05-28T22:40:32.169Z"
image: ""
---

### Start Markdown file here

---

##Tasks
Understanding Markdown format and writing skills. 

---
##Steps

---
##Source

# Mou

![Mou icon](http://mouapp.com/Mou_128.
png)

---
## Overview

---
##Mou##, the missing Markdown editor for *web developers*.

---
### Syntax

---
#### Strong and Emphasize 

---
##strongZ or __strong__ ( Cmd + B )

*emphasize* or _emphasize_ ( Cmd + I )

---
##Sometimes I want a lot of text to be bold.
Like, seriously, a _LOT_ of text
---
#### Blockquotes

> Right angle brackets &gt; are used for block quotes.

---
#### Links and Email

An email <example@example.com> link.

Simple inline link <http://chenluois.com>, another inline link [Smaller](http://smallerapp.com), one more inline link with title [Resize](http://resizesafari.com "a Safari extension").

A [reference style][id] link. Input id, then anywhere in the doc, define the link with corresponding id:

[id]: http://mouapp.com "Markdown editor on Mac OS X"

Titles ( or called tool tips ) in the links are optional.

---
#### Images

An inline image ![Smaller icon](http://smallerapp.com/favicon.ico "Title here"), title is optional.

A ![Resize icon][2] reference style image.

[2]: http://resizesafari.com/favicon.ico "Title"

---
#### Inline code and Block code

Inline code are surround by `backtick` key. To create a block code:

	Indent each line by at least 1 tab, or 4 spaces.
    var Mou = exactlyTheAppIwant; 

---
####  Ordered Lists

Ordered lists are created using "1." + Space:

1. Ordered list item
2. Ordered list item
3. Ordered list item

---
#### Unordered Lists

Unordered list are created using "*" + Space:

* Unordered list item
* Unordered list item
* Unordered list item 

Or using "-" + Space:

- Unordered list item
    - Unordered list item
        - Unordered list item

---
#### Hard Linebreak

End a line with two or more spaces will create a hard linebreak, called `<br />` in HTML. ( Control + Return )  
Above line ended with 2 spaces.

---
#### Horizontal Rules

Three or more asterisks or dashes:

*
---

- - - -

---
#### Headers

Setext-style:

This is H1
==========

This is H2
----------

atx-style:

# This is H1
---
## This is H2
---
### This is H3
---
#### This is H4
---
##### This is H5
---
###### This is H6

---
### Extra Syntax

---
#### Footnotes

Footnotes work mostly like reference-style links. A footnote is made of two things: a marker in the text that will become a superscript number; a footnote definition that will be placed in a list of footnotes at the end of the document. A footnote looks like this:

That's some text with a footnote.[^1]

[^1]: And that's the footnote.

---
#### Strikethrough

Wrap with 2 tilde characters:

~~Strikethrough~~

---
#### Fenced Code Blocks

Start with a line containing 3 or more backticks, and ends with the first line with the same number of backticks:

```
Fenced code blocks are like Stardard Markdown’s regular code
blocks, except that they’re not indented and instead rely on
a start and end fence lines to delimit the code block.
```

---
#### Tables

A simple table looks like this:

First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell

If you wish, you can add a leading and tailing pipe to each line of the table:

| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |

Specify alignement for each column by adding colons to separator lines:

First Header | Second Header | Third Header
:----------- | :-----------: | -----------:
Left         | Center        | Right
Left         | Center        | Right


How to add youtube videos

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>


[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

---
##URL

- [Best 75 tools] (http://mashable.com/2013/06/24/markdown-tools/)
- [Marked] (http://marked2app.com/)
- [Mou] (http://mouapp.com/)
