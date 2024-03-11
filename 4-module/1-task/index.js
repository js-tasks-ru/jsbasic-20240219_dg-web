function makeFriendsList(friends) {
  if (friends) {
    let res = document.createElement('ul')
    for (item in friends) {
      let elem = document.createElement('li')
      elem.innerText = friends[item].firstName + ' ' + friends[item].lastName
      res.appendChild(elem)
    }
    return res
  }
}
