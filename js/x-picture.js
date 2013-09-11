(function () {
  Polymer('x-picture', {
    src: '',
    srcset: '',
    title: '',
    alt: '',
    created: function () {
        var sources, img, findMatchedMedia, getDensity, getSrcFromElement, xPicture;

        this.currentSrc = '';
        this.media = '';
        sources = this.getElementsByTagName('source');
        img = this.$.the;

        // Retain a reference.
        xPicture = this;
        getSrcFromElement = function (el) {
            var deviceRatio, src, srcs, srcset, imgDPR, min = 1, max = 1;
            if (el) {
                // srcset wins if it exists
                if (srcset = el.getAttribute('srcset')) {
                    // next prefer srcset, parsed for pixel density

                    /*
                     * if window.devicePixelRatio is undefined assume dpr === 1
                     * When defined, win.dpr is always a number, therefore
                     * it can be parsed as an int.
                     * If it is < 1 (it never is) it should be treated as 1.
                     * If it is a float, it will be floored.
                     * If it is higher than the highest defined srcset, it will use
                     * the highest defined srcset.
                     */
                    deviceRatio = parseInt(window.devicePixelRatio, 10) || 1;
                    srcs = srcset.replace(/^\s*|\s*$/g, '').split(',');
                    for (var i = srcs.length - 1; i >= 0; i--) {
                        src = srcs[i].replace(/^\s*|\s*$/g, '').split(' ');

                        // return if we have an exact match
                        if (src[1].match(deviceRatio + 'x')) {
                            return src[0];
                        }

                        // Prep for edge cases.
                        imgDPR = (src[1]) ? parseInt(src[1].replace('x', ''), 10): 1;

                        if (imgDPR > max) {
                            max = [src[0], imgDPR];
                        }
                        if (imgDPR < min) {
                            min = [src[0], imgDPR];
                        }
                  
                    }
                
                    // Edge case when dpr is out of range supplied in srcset.
                    if (deviceRatio > max[1]) {
                        return max[0];
                    } else if (deviceRatio < min[1]) {
                        return min[0];
                    }
                } else if (el.src) {
                    return el.src;

                // next check srcset
                } else {

                    // If there is no src or srcset on the element, no vaild url can exist
                    return '';
                }
            }
        };

        findMatchedMedia = function () {
            var source, i, len, media, mediaLess;

            // Check for srcset, src or media on the x-picture element itself first.
            if (xPicture.srcset || xPicture.src) {
                return xPicture;
            }

            /*
             * So the question is do we want the first matched media vis-a-vis <video>,
             * or the last match vis-a-vis CSS. I feel like the use of <picture> is more
             * akin in spirit to CSS than <video>. So to encourage a mobile first approach
             * have similar behavior to CSS media query behavior, the last match wins. 
             */

            // Backwards to return as early as possible on last source order match.
            for (i = sources.length-1; i >= 0; i-- ) {
                source = sources[i];
                media = source.getAttribute('media');
                if (window.matchMedia && window.matchMedia(media).matches) {
                    xPicture.media = media;
                    return source;
                } else if (!media) {
                    // If no media matches, then the last source with no media attr wins,
                    // We can't break as there may be a media match up stream which always
                    // wins over no media so don't overwrite the first medialess source.
                    mediaLess = mediaLess || source;
                }
            }
            return mediaLess;
        };
        img.src = getSrcFromElement(findMatchedMedia());
        this.currentSrc = img.src;
        window.addEventListener('resize', function (e) {
            img.src = getSrcFromElement(findMatchedMedia());
        });
    }
  });
})();