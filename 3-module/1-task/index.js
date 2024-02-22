function namify(users) {
  let res = []
  if(users) {
    users.forEach(user => {
      for(key in user) {
        (key == 'name') ? res.push(user[key]) : null
      }
    })
    return res
  }
}
