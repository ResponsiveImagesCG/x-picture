[x-picture](http://uniqname.github.io/x-picture/)

A Polymer implementation of the proposed [&lt;picture&gt;](http://picture.responsiveimages.org/) element.

<pre><code>
    &lt;x-picture alt="Description of content for accessability"&gt;
        &lt;source srcset="http://www.fillmurray.com/300/600 1x, 
                        http://www.fillmurray.com/600/1200 2x" /&gt;
        &lt;source srcset="http://www.fillmurray.com/400/600 1x, 
                        http://www.fillmurray.com/800/1200 2x" 
                        media="(min-width:400px)" /&gt;
        &lt;source srcset="http://www.fillmurray.com/500/600 1x, 
                        http://www.fillmurray.com/1000/1200 2x" 
                        media="(min-width:500px)" /&gt;
        &lt;source srcset="http://www.fillmurray.com/600/600 1x, 
                        http://www.fillmurray.com/1200/1200 2x" 
                        media="(min-width:600px)" /&gt;
        &lt;source srcset="http://www.fillmurray.com/700/600 1x, 
                        http://www.fillmurray.com/1400/1200 2x" 
                        media="(min-width:700px)" /&gt;
        &lt;img src="http://www.placecage.com/c/800/800" alt="Nic Cage" lazyload&gt;
        &lt;p&gt;Paradoxally, I am invisible AND accessible.&lt;/p&gt;
    &lt;/x-picture&gt;
</code></pre>
