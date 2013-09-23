[x-picture](http://uniqname.github.io/x-picture/)

A Polymer implementation of the proposed [&lt;picture&gt;](http://picture.responsiveimages.org/) element.

```html
<x-picture alt="Description of content for accessability">
        <source srcset="http://www.fillmurray.com/300/600 1x, 
                        http://www.fillmurray.com/600/1200 2x" />
        <source srcset="http://www.fillmurray.com/400/600 1x, 
                        http://www.fillmurray.com/800/1200 2x" 
                        media="(min-width:400px)" />
        <source srcset="http://www.fillmurray.com/500/600 1x, 
                        http://www.fillmurray.com/1000/1200 2x" 
                        media="(min-width:500px)" />
        <source srcset="http://www.fillmurray.com/600/600 1x, 
                        http://www.fillmurray.com/1200/1200 2x" 
                        media="(min-width:600px)" />
        <source srcset="http://www.fillmurray.com/700/600 1x, 
                        http://www.fillmurray.com/1400/1200 2x" 
                        media="(min-width:700px)" />
        <!-- This is a fallback for no javascript, not a fallback for no <picture /> support. 
        That's what the prollyfill does ;) -->
        <noscript>
            <img src="http://www.placecage.com/c/800/800" alt="Nic Cage" lazyload>
        </noscript>
        <p>Paradoxally, I am invisible AND accessible.</p>
</x-picture>
```
