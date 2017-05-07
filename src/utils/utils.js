export function objToArray(obj) {
  return Object.keys(obj).map(
    key => {
      return {
        id: key,
        ...obj[key]
      }
    }
  )
}
