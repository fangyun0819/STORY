
let dragSource = document.querySelector('#drag-source')
dragSource.addEventListener('dragstart', dragStart)

function dragStart (e) {
  console.log('dragStart')
  e.dataTransfer.setData('text/plain', e.target.id)
}

let dropTarget = document.querySelector('#target-container')
dropTarget.addEventListener('drop', dropped)
dropTarget.addEventListener('dragenter', cancelDefault)
dropTarget.addEventListener('dragover', cancelDefault)

function dropped (e) {
  console.log('dropped')
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain')
  e.target.appendChild(document.querySelector('#' + id))
}

function cancelDefault (e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}

export 