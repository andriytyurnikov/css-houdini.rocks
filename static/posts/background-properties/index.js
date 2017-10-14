module.exports = () => {
  // force repaint
  document.getElementById('el').style.backgroundImage = 'none'
  setTimeout(() => {
    document.getElementById('el').style.backgroundImage = 'paint(background)'
  }, 0)
  // ranges
  ;['opacity', 'rotate'].forEach(type => {
    document.getElementById('background' + type).addEventListener('input', (e) => {
      let value = e.target.value
      if (type === 'rotate') {
        value += 'deg'
      }
      document.getElementById('el').style.setProperty('--background-' + type, value)
      document.getElementById('value' + type).innerHTML = value
    })
  })
  // ranges
  ;['blur', 'grayscale', 'hue-rotate'].forEach(type => {
    document.getElementById('background' + type).addEventListener('input', (e) => {
      let value = e.target.value
      if (type === 'blur') {
        value += 'px'
      }
      if (type === 'grayscale') {
        value += '%'
      }
      if (type === 'hue-rotate') {
        value += 'deg'
      }
      document.getElementById('el').style.setProperty('--' + type, value)
      document.getElementById('value' + type).innerHTML = value
    })
  })
}
