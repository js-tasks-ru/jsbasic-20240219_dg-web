function highlight(table) {
  for (let i=0; i < table.tBodies[0].rows.length; i++){
    let current = table.tBodies[0].rows[i]

    if (current.cells[3].dataset.available) {
      switch (current.cells[3].dataset.available) {
          case true:
              current.classList.add('available')
              break;
          case false: 
              current.classList.add('unavailable')
              break;
          }
        }
    else {
      current.hidden = 'true'
    }

    switch (current.cells[2].textContent) {
        case 'm':
            current.classList.add('male')
            break;
        default:
            current.classList.add('female')
            break;
    }
    (current.cells[1].textContent < 18) ? current.style.textDecoration = 'line-through' : null
  }
}
