;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M430.306908 844.989977c-215.618802 0-391.005298-175.386496-391.005298-391.004275 0-215.618802 175.386496-391.023718 391.005298-391.023718 215.617779 0 391.005298 175.404915 391.005298 391.023718C821.311183 669.604504 645.924687 844.989977 430.306908 844.989977zM430.306908 120.18322c-184.066179 0-333.785086 149.736303-333.785086 333.803505 0 184.066179 149.718907 333.783039 333.785086 333.783039 184.02934 0 333.784062-149.717883 333.784062-333.783039C764.089947 269.919523 614.336248 120.18322 430.306908 120.18322z"  ></path>' +
    '' +
    '<path d="M930.9083 959.394586c-13.1853 0-26.523073-4.583388-37.328164-13.933337l-209.807447-181.196829c-23.914666-20.639063-26.523073-56.773028-5.885034-80.68974 20.638039-23.916712 56.773028-26.599821 80.688717-5.887081l209.80847 181.197852c23.914666 20.638039 26.524097 56.772005 5.886057 80.690764C962.946994 952.688861 947.00286 959.394586 930.9083 959.394586z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiala" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M783.52 370.752 512 642.272 240.48 370.752 195.232 416 512 732.768 828.768 416Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye02" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.009721 65.913199c-191.626365 0-346.963223 155.337881-346.963223 346.963223s346.963223 545.210379 346.963223 545.210379 346.942757-353.585037 346.942757-545.210379S703.615621 65.913199 512.009721 65.913199zM521.924535 561.591465c-98.54541 0-178.439018-79.896678-178.439018-178.459484 0-98.522897 79.893608-178.418552 178.439018-178.418552 98.541317 0 178.436972 79.895655 178.436972 178.418552C700.361507 481.694787 620.465852 561.591465 521.924535 561.591465z"  ></path>' +
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