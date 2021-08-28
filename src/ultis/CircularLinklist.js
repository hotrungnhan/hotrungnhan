export class CircularLinkList extends Array {
  constructor(ctx, ...value) {
    super(value)
    this.ctx = ctx
    this._pointer = -1
  }
  current() {
    if (this.pointer < this.length && this.pointer >= 0)
      return this[0][this.pointer]
    else {
      this.pointer = 0
      return this[0][this.pointer]
    }
  }
  get pointer() {
    return this._pointer
  }
  set pointer(val) {
    this._pointer = val
    if (this.ctx.update) {
      this.ctx.update()
    }
  }
  get sda() {
    ++this.pointer
    if (this.ctx.update) {
      this.ctx.update()
    }
    return this.pointer
  }
  next() {
    if (this && Array.isArray(this)) {
      let pointer = ++this.pointer
      if (pointer < this.length && pointer >= 0) return this[0][pointer]
      else {
        if (this.length > 0) {
          this.pointer = 0
          return this[0][pointer]
        } else {
          throw Error("Linklist in't contain any element")
        }
      }
    }
  }
}
