//this code is for the market and vendor create pages and allow for proper formatting of a phone number.
const normalizePhone = (value, previousValue) => {
    if (!value) {
      return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
      console.log('hi')
      if (onlyNums.length === 3) {
        return onlyNums + '-'
      }
      if (onlyNums.length === 6) {
        return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-'
      }
    }
    if (onlyNums.length <= 3) {
      return onlyNums
    }
    if (onlyNums.length <= 6) {
      return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
    }
    return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
  }
  
  export default normalizePhone