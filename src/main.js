import "./css/index.css"

const ccBgColor01 = document.querySelector('.cc-bg svg > g g:nth-child(1) path')
const ccBgColor02 = document.querySelector('.cc-bg svg > g g:nth-child(2) path')
const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img')

function setCardType(type) {
  const colors = {
    visa: ['#315881', '#DFA43B'],
    mastercard: ['#EB001B', '#F79410'],
    cielo: ['#00AEEF', '#5A646E'],
    rocketseat: ['#4D26A9', '#8257E6'],
    bitabyss: ['#9B51E0', '#9B51E0'],
    default: ['#black', '#gray']
  }

  ccBgColor01.setAttribute('fill', colors[type][0])
  ccBgColor02.setAttribute('fill', colors[type][1])
  ccLogo.setAttribute('src', `cc-${type}.svg`)
}

setCardType('default')

globalThis.setCardType = setCardType