## The Sock Kingdom - A Next.js Prismic Site

### Purpose

Develop a basic website using Prismic and Next.js that uses layouts, dynamic routes, and file-based routing. Also, internationlize content using Prismic locales and create a language switcher.

### About the website

The Sock Kingdom website contains three blog posts about buying socks which are displayed on the homepage using a Recent Posts slice. There is also a Posts page which uses pagination to show all blog posts.

The HTML serializer was used to render `h2` elements as Pig Latin via the [`piglatin`](https://github.com/montanaflynn/piglatin) module and code snippet field as a `code` element via the codespan custom label.

Other modules used included [`date-fns`](https://date-fns.org) to render the blog post publication date, [`react-select`](https://react-select.com/home) to create the language switcher select element, and [`flag-icons`](https://www.npmjs.com/package/flag-icons) to display the language icons.

The blog post content was generated via [ChatGPT](https://openai.com/blog/chatgpt) and author profiles using [AI Writer](https://tools.picsart.com/text/ai-writer). All blog post images were taken from [Unsplash](https://unsplash.com).

### Screenshot

![The Sock Kingdom Website screenshot](https://github.com/louisefindlay23/sk-next/assets/26024131/f90a3b4b-94ad-452c-9188-617e3717fda9)
