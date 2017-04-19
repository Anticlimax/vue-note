;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M901.444608 401.168384 623.50336 401.168384 623.50336 123.222016c0-30.671872-24.870912-55.586816-55.584768-55.586816L456.733696 67.6352c-30.73024 0-55.583744 24.916992-55.583744 55.586816l0 277.946368L123.198464 401.168384c-30.727168 0-55.580672 24.869888-55.580672 55.589888l0 111.177728c0 30.732288 24.861696 55.58784 55.580672 55.58784l277.952512 0 0 277.946368c0 30.734336 24.86272 55.589888 55.583744 55.589888l111.183872 0c30.724096 0 55.584768-24.863744 55.584768-55.589888L623.50336 623.522816l277.946368 0c30.726144 0 55.585792-24.86784 55.585792-55.58784L957.03552 456.757248C957.036544 426.036224 932.166656 401.168384 901.444608 401.168384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wujiaoxingshixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M780.608 647.552c11.584 53.632 21.76 102.208 30.592 145.664 4.096 18.304 7.808 36.672 11.2 54.976 3.392 18.304 6.656 34.944 9.664 49.92 3.072 14.912 5.632 27.648 7.68 38.208 2.048 10.56 3.392 17.152 4.096 19.84 2.048 13.568-1.024 22.592-9.152 27.008-8.128 4.416-17.344 6.656-27.52 6.656-3.392 0-8.32-1.216-14.784-3.584-6.464-2.368-11.392-4.224-14.784-5.632l-266.112-154.816c-48.256 28.544-92.096 54.016-131.52 76.416-17.024 9.536-33.792 19.008-50.496 28.544-16.64 9.472-31.744 18.304-45.376 26.496-13.568 8.128-25.344 14.912-35.2 20.352-9.856 5.44-16.448 8.832-19.904 10.176-6.784 3.392-13.76 4.608-20.864 3.584-7.168-1.024-13.632-3.584-19.392-7.616-5.76-4.096-10.048-9.024-12.736-14.784-2.752-5.76-3.392-11.712-2.048-17.856 0.704-2.688 2.368-9.344 5.12-19.84 2.688-10.496 5.76-23.104 9.152-37.696 3.392-14.592 7.296-30.72 11.712-48.384 4.416-17.664 9.024-35.648 13.76-54.016 10.176-42.112 21.76-89.6 34.688-142.592C208.256 613.952 172.224 583.04 140.288 555.904 126.72 544.32 113.28 532.928 100.032 521.728 86.784 510.528 74.88 500.352 64.32 491.2c-10.56-9.152-19.2-16.64-25.984-22.4-6.784-5.76-10.56-9.024-11.2-9.664-8.128-7.488-15.104-15.808-20.928-24.96C0.448 424.96-1.792 415.68-0.384 406.144c1.344-9.536 5.12-16.96 11.2-22.4 6.144-5.44 12.928-8.832 20.416-10.176L346.24 345.024l117.248-272.96c4.096-10.88 9.856-20.224 17.344-28.032C488.32 36.224 498.496 32.32 511.424 32.32c6.784 0 12.736 1.536 17.856 4.608 5.12 3.072 9.344 6.656 12.736 10.688 3.392 4.096 6.272 8.128 8.64 12.224 2.368 4.096 4.224 7.488 5.632 10.176l114.176 272.96 315.072 29.568c13.568 3.392 23.104 7.488 28.544 12.224 5.44 4.736 8.128 12.224 8.128 22.4 0 9.536-2.88 17.856-8.64 24.96-5.76 7.168-13.056 15.808-21.888 25.984L780.608 647.552zM780.608 647.552"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cheng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M799.43168 974.7968l-288.9984-289.03424-294.51776 294.48192c-48.80384 48.80384-127.14496 49.4592-174.99648 1.59744-47.93344-47.92832-47.19104-126.21824 1.60256-175.01696l294.51264-294.4768L47.95392 223.232C0.11264 175.3856 0.768 97.05984 49.60256 48.2304c48.74752-48.73728 127.14496-49.4592 174.98624-1.6128l289.01888 289.05472 294.51264-294.4768c48.74752-48.7424 127.1808-49.49504 175.02208-1.64352 47.88736 47.89248 47.09376 126.32064-1.63328 175.04768l-294.51264 294.4768 289.01888 289.05984c47.90784 47.91296 47.08864 126.25408-1.6384 174.98624-48.76288 48.896-127.08864 49.536-174.94528 1.67424z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)