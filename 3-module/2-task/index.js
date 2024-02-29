function filterRange(arr, a, b) {
    let res = []
    arr.forEach(el => {
      (a <= el && el <= b) ? res.push(el) : null
    })
    return res
}