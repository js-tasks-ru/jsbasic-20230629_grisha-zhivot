let showSalary = (users, age) => {
  let arr = users.filter(item => item.age <= age)
  let result = []
  for(let i = 0 ; i < arr.length ; i += 1) {
    result[i] = String(`${arr[i].name}, ${arr[i].balance}`);
    // if(i + 1 == arr.length) {
    //   result[i] = String(`${arr[i].name}, ${arr[i].balance} `);
    // }
    // else {
    //   result[i] = String(`${arr[i].name}, ${arr[i].balance} \n`);
    // }
  }
  return result.join('\n');
}