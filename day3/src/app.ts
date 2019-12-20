import { fromEvent } from 'rxjs'
import { map, tap, takeWhile, takeUntil } from 'rxjs/operators'

// Get INPUT
const input = document.getElementById('input-field')

const isVowelRegEx = (pValue: string) => {
  if (pValue.length == 1) {
    return /[aeiou]/.test(pValue)
  } else {
    return false
  }
}

const displayHtml = (type: string, value: string) => {
  console.log('displayHTML')
  const node = document.createElement('span')
  node.className = 'badge badge-primary'
  const textnode = document.createTextNode(value)

  node.appendChild(textnode)

  document.getElementById(type).appendChild(node)

}

const removeChilds = (type: string) => {
  const list = document.getElementById(type)

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild)
 }
}

const input$ = fromEvent(input, 'input')
.pipe(
  tap((response: any) => {
    console.log('response', response.data)
  }),
  map((event: any) => event.data),
)

input$.subscribe(response => {
  console.log('responseSubscribe', response)
  if (response && response.length > 0) {
    if (isVowelRegEx(response)) {
      displayHtml('vowals', response)
    } else {
      displayHtml('consonants', response)
    }
  } else {
    removeChilds('vowals')
    removeChilds('consonants')
  }
})

