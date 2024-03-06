function namify(users) {
  if(users) {
    users.map((user, i)=>{
      for(key in user) {
        (key == 'name') ? users.splice(i, 1, user[key]) : null
      }
    })
    return users
  }
}
