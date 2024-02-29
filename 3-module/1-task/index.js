function namify(users) {
  if(users) {
    users.forEach((user, i) => {
      for(key in user) {
        (key == 'name') ? users.splice(i, 1, user[key]) : null
      }
    })
    return users
  }
}
