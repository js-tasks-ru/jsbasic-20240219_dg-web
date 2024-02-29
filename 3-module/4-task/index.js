function showSalary(users, age) {
  if(users.find(item => item)) {
    let res = []
    users.forEach(el => {
      (el.age <= age) ? res.push(el.name + ', ' + el.balance) : null 
    });
    return res.join("\n")
  }
}
