import "./css/index.css"
import IMask from "imask";

const ccBgColor01 = document.querySelector('.cc-bg svg > g > g > g:nth-child(1) > ellipse')
const ccBgColor02 = document.querySelector('.cc-bg svg > g > g > g:nth-child(2) > ellipse')
const ccBgColor03 = document.querySelector('.cc-bg svg > g > g > g:nth-child(3) > ellipse')
const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img')

function setCardType(type) {
  const colors = {
    default: ['#556180', '#8798CC', '#B0D3F0'],
    mastercard: ['#F79410', '#EB001B', '#EB001B'],
    maestro: ['#CC2131', '#3A9BD9', '#777777'],
    visa: ['#315881', '#315881', '#DFA43B'],
    discover: ['#564F53', '#F48720', '#D05B2E'],
    americanexpress: ['#0077A6', '#FFFFFF', '#0077A6'],
    diners: ['#383E93', '#FFFFFF', '#383E93'],
    jcb: ['#00873F', '#E60039', '#004E94'],
    unionpay: ['#007B84', '#00447C', '#E21836'],
    bitabyss: ['#2B0053', '#8954BB', '#5C00B2'],
    rocketseat: ['#412B73', '#9060FF', '#4D26A9'],
  }

  ccBgColor01.setAttribute('fill', colors[type][0])
  ccBgColor02.setAttribute('fill', colors[type][1])
  ccBgColor03.setAttribute('fill', colors[type][2])
  ccLogo.setAttribute('src', `cc-${type}.svg`)
}

globalThis.setCardType = setCardType

const securityCode = document.querySelector('#security-code')
const securityCodePattern = {
  mask: '0000'
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector('#expiration-date')
const expirationDatePattern = {
  mask: 'MM{/}YY',
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    },
    MM: {
      mask: IMask.MaskedRange,
      from: '1',
      to: '12'
    }
  }
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

const cardNumber = document.querySelector('#card-number')
const cardNumberPattern = {
  mask: [
    {
      mask: '0000 0000 0000 0000',
      regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
      cardType: 'mastercard'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
      cardType: 'maestro'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^4\d{0,15}/,
      cardType: 'visa'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
      cardType: 'discover'
    },
    {
      mask: '0000 000000 00000',
      regex: /^3[47]\d{0,13}/,
      cardType: 'americanexpress'
    },
    {
      mask: '0000 000000 0000',
      regex: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
      cardType: 'diners'
    },
    {
      mask: '0000 000000 00000',
      regex: /^(?:2131|1800)\d{0,11}/,
      cardType: 'jcb'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^(?:35\d{0,2})\d{0,12}/,
      cardType: 'jcb'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^62\d{0,14}/,
      cardType: 'unionpay'
    },
    {
      mask: '00 0000000000 000 0',
      regex: /^33\d{0,14}/,
      cardType: 'rocketseat'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^32\d{0,14}/,
      cardType: 'bitabyss'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^\d{0,16}/,
      cardType: 'default',
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex);
    });

    setCardType(foundMask.cardType)
    return foundMask ? foundMask : foundMask
  }
}
const cardNumberMasked = IMask(cardNumber, cardNumberPattern)


const cardHolders = [
  {
    number: '340205135769127',
    holder: 'Shenara Kharsack',
    exp: '0826',
    cvc: '9425'
  },
  {
    number: '4006694331279766',
    holder: 'Naira Pagnotto',
    exp: '1227',
    cvc: '900'
  },
  {
    number: '5197591701768285',
    holder: 'Demet Hagos',
    exp: '0127',
    cvc: '316'
  },
  {
    number: '36075672565926',
    holder: 'Vitoria Sabbagh',
    exp: '01/30',
    cvc: '244'
  },
  {
    number: '5756636580630406119',
    holder: 'Nicolai Azevedo',
    exp: '0428',
    cvc: '3565'
  },
  {
    number: '3551116246512287',
    holder: 'Tensuke Masuyama',
    exp: '0629',
    cvc: '727'
  },
  {
    number: '6223311525738620',
    holder: 'Qian Miao',
    exp: '1225',
    cvc: '909'
  },
  {
    number: '3264128256037379',
    holder: 'LEONARDO MACIEL',
    exp: '0332',
    cvc: '4287'
  },
  {
    number: '3376253873283894',
    holder: 'Mayk Brito',
    exp: '1232',
    cvc: '2378'
  },
  {
    number: '6516594082506185',
    holder: 'Livia HOLT ',
    exp: '0730',
    cvc: '223'
  },
  {
    number: '3142424242424237',
    holder: 'John Doe',
    exp: '0123',
    cvc: '777'
  }
]