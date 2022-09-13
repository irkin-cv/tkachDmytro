export default class Enum {
  getValues () {
    const properties = Object.getOwnPropertyNames(this)
    const result = []

    for (const property of properties) {
      result.push(this[property])
    }

    return result
  }

  hasValue (value) {
    return this.getValues().includes(value)
  }
}
