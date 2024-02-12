function checkSpam(str) {
  if(str) {
    let unforgivableCurses = ['1xBet', 'XXX'],
        strRes = String(str).toLowerCase(),
        curseRes
  
    for (let i=0; i < unforgivableCurses.length; i++) {
      curseRes = unforgivableCurses[i].toLowerCase()
      if (strRes.includes(curseRes)) {
        return true
      }
    }
    return false
  } else {
    alert('Проверки - это важно')
  }
}
