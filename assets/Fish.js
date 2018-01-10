
class Fish {
  constructor (p, canvasWidth, canvasHeight, image) {
    this.p = p

    this.canvasWidth = canvasWidth

    this.canvasHeight = canvasHeight

    this.location = this.p.createVector(this.p.random(canvasWidth), this.p.random(canvasHeight))

    this.velocity = this.p.createVector(this.p.random(0.1, 0.7), 0)

    this.acceleration = this.p.createVector(0, 0)

    this.fishImage = image

    this.width = image.width

    this.height = image.height

    this.directionMap = {
      RIGHT: 'right',
      LEFT: 'left'
    }

    this.direction = Math.random() <= 0.5
      ? this.directionMap.LEFT
      : this.directionMap.RIGHT
  }

  resizeCanvasSize (canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
  }

  display () {
    this.p.push()
    this.p.imageMode(this.p.CENTER)

    if (this.direction === this.directionMap.RIGHT) {
      this.p.image(this.fishImage, this.location.x, this.location.y)
    }
    if (this.direction === this.directionMap.LEFT) {
      this.p.scale(-1, 1)
      this.p.image(this.fishImage, -this.location.x, this.location.y)
    }

    this.p.pop()
    this.edge()
  }

  edge () {
    if (this.location.x > this.canvasWidth + (this.width / 2)) {
      this.location.x = 0 + (this.width / 2) * -1
      this.location.y = this.p.random(100, this.canvasHeight + 100)
    }
    if (this.location.x + (this.width / 2) < 0) {
      this.location.x = this.canvasWidth + (this.width / 2)
      this.location.y = this.p.random(100, this.canvasHeight + 100)
    }
  }

  update () {
    // 左向きの魚は左に移動
    if (this.direction === this.directionMap.LEFT) {
      if (Math.sign(this.velocity.x) !== -1) {
        this.velocity.mult(-1, 0)
      }
    }
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  swim () {
    this.update()
    this.display()
  }

  applyForce (force) {
    this.acceleration.add(force)
  }
}

export default Fish
