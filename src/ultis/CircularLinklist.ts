export class CircularLinkList extends Array {
  pointer = -1
  current() {
    if (this.pointer < this.length && this.pointer >= 0)
      return this[this.pointer]
    else {
      this.pointer = 0
      return this[this.pointer]
    }
  }
  next() {
    if (this && Array.isArray(this)) {
      let pointer = ++this.pointer
      if (pointer < this.length && pointer >= 0) return this[pointer]
      else {
        if (this.length > 0) {
          this.pointer = 0
          return this[this.pointer]
        } else {
          return undefined;
        }
      }
    }
  }
}
