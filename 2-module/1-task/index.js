function sumSalary(salaries) {
  if(salaries && typeof salaries == 'object') {
    let res = 0;

    for (key in salaries) {
      if(typeof salaries[key] == 'number' && isFinite(salaries[key])) res += salaries[key]
    }

    return res
  }
}
