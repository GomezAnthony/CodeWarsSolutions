function reverseList(list) {
    let arr = []
    for(let i = list.length-1; i >= 0; i--){
      arr.push(i)
    }
    return arr
  }


  let a = [1,2,3,4]
  console.log(reverseList(a))