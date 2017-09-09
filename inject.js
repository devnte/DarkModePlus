const globiCssStyleId = 'globi-css'
const globiCssFilePath = path.join(__dirname, 'custom.css')

function applyCustomCss() {
  fs.readFile(globiCssFilePath, 'utf8', (err, css) => {
    if (err) {
      alert (`Error reading file "${globiCssFilePath}": ${err}`, 'Globi CSS')
    }
    else {
      let style = document.querySelector(`#${globiCssStyleId}`)

      if (style) {
        style.innerHTML = css
      }
      else {
        style = document.createElement('style')
        style.id = globiCssStyleId
        style.innerHTML = css
        document.head.appendChild(style)
      }

      console.info('Custom CSS applied!')
    }
  })
}

global.globi = { applyCustomCss: applyCustomCss }

applyCustomCss()
