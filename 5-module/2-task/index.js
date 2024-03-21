function toggleText() {
  let button = document.querySelector('.toggle-text-button')
  if(button) {
    button.onclick = ()=>{
      let text = document.getElementById('text');
      if (text.hidden == true) {
        text.hidden = false
      } else {
        text.hidden = true
      }
    }
  }
}
