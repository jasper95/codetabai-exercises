
// flat array of arrays
export const flatArray = (acc, element) => {
 // insert code here: use object spreading
 return []
}

// multiply array
export const multiplyArray = (element, multiplier = 2) => {
  // insert code here
  return 0
}

// filter odd
export const filterOdd = (element) => {
  // insert code here
  return true
}

// sum array
export const sumArray = (acc, element) => {
  // insert code here
  return acc
}

export function bindPrint(school = 'UP') {
  const props = ['first_name', 'last_name', 'address']
  const { age = 7 } = this
  const personal = props
    .reduce((acc, element) => {
      const { [element]: key } = this
      // insert code here
      return acc
    }, '')
  return `${personal}, ${age}, ${school}`
}

export const getUserPostsByEmail = async(email) => {
  const [{ id: userId }] = await
    fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
      .then(response => response.json())

  // GET User's Post By User Id => https://jsonplaceholder.typicode.com/posts?userId=userId
  // insert code here

  return []
}