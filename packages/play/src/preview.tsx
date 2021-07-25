// @ts-nocheck
import React, { forwardRef } from "react"

const Preview = forwardRef(({initialContent, inject}, ref) => {
  return (
    <iframe
      ref={ref}
      title="Preview"
      onLoad={() => {
        inject({
          html: initialContent.html,
          css: initialContent.css,
          js: initialContent.javascript,
        })
      }}
      className="absolute w-full h-full bg-white"
      sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals"
      srcDoc={`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              @import url('https://rsms.me/inter/inter.css');
              html {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
              }
              @supports (font-variation-settings: normal) {
                html { font-family: 'Inter var', sans-serif; }
              }

              *, ::before, ::after {
                box-sizing: border-box;
              }
            
              body {
                @apply bg-black text-white;
              }
            </style>
            <style id="_style">
            </style>
            <script id="_script">
            </script>
            <script>
            var hasHtml = false
            var hasCss = false
            var visible = false
            var hasJs = false
            window.addEventListener('message', (e) => {
              if (typeof e.data.clear !== 'undefined') {
                setHtml()
                setCss()
                setJs()
                checkVisibility()
                return
              }
              if (typeof e.data.css !== 'undefined') {
                setCss(e.data.css)
              }
              if (typeof e.data.html !== 'undefined') {
                setHtml(e.data.html)
              }
              if (typeof e.data.js !== 'undefined') {
                setJs(e.data.js)
              }
              checkVisibility()
            })
            function checkVisibility() {
              if (!visible && hasHtml && hasCss) {
                visible = true
                document.body.style.display = ''
              } else if (visible && (!hasHtml || !hasCss)) {
                visible = false
                document.body.style.display = 'none'
              }
            }
            function setHtml(html) {
              if (typeof html === 'undefined') {
                document.body.innerHTML = ''
                hasHtml = false
              } else {
                document.body.innerHTML = html
                hasHtml = true
              }
            }
            function setCss(css) {
              const style = document.getElementById('_style')
              const newStyle = document.createElement('style')
              newStyle.id = '_style'
              newStyle.innerHTML = typeof css === 'undefined' ? '' : css
              style.parentNode.replaceChild(newStyle, style)
              hasCss = typeof css === 'undefined' ? false : true
            }
            function setJs(js) {
              const _script = document.getElementById('_script')
              const newScript = document.createElement('script')
              newScript.id = '_script'
              newScript.innerHTML = typeof js === 'undefined' ? '' : js
              _script.parentNode.replaceChild(newScript, _script)
              hasJs = typeof js === 'undefined' ? false : true
            }
            </script>
          </head>
          <body>
          </body>
          <script>
          // https://github.com/sveltejs/svelte-repl/blob/master/src/Output/srcdoc/index.html
          // https://github.com/sveltejs/svelte-repl/blob/master/LICENSE
          document.body.addEventListener('click', event => {
            if (event.which !== 1) return;
            if (event.metaKey || event.ctrlKey || event.shiftKey) return;
            if (event.defaultPrevented) return;

            // ensure target is a link
            let el = event.target;
            while (el && el.nodeName !== 'A') el = el.parentNode;
            if (!el || el.nodeName !== 'A') return;

            if (el.hasAttribute('download') || el.getAttribute('rel') === 'external' || el.target) return;

            event.preventDefault();
            window.open(el.href, '_blank');
          });
          </script>
        </html>
      `}
    />
  )
})

export default Preview