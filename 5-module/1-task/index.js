function hideSelf() {
  document.body.querySelectorAll('.hide-self-button').forEach(button => {
    button.addEventListener('click', ()=> {
      button.hidden=true
    })
  })
}
