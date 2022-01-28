let canvas = document.getElementById('myCanvas')
let c = canvas.getContext('2d')
let gravity = 0.7
let frames = 0
const imageEnemies = ["assets/images/enemies/jelly.gif"]
const enemies = []

class Obstacles {
    constructor(y) {
        this.y = y
        this.x = 1600
        this.width = 50
        this.height = 50
        this.image = new Image()
        this.image.src = "./assets/images/enemies/jelly.gif"
    }
    draw() {
        this.x--
        c.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}



class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "assets/images/background.gif"
    }
    draw() {
        this.x--;
        if (this.x < -canvas.width) {
            this.x = 0;
        }
        c.drawImage(this.image, this.x, this.y, this.width, this.height)
        c.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        )
    }

}

class Character {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    //metodos

    collision(item) {
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Enemy extends Character {
    constructor(x, y, w, h, img, spaceship) {
        super(x, y, w, h, img, spaceship)
    }
}

class Enemy2 extends Character {
    constructor(x, y, w, h, img, spaceship) {
        super(x, y, w, h, img)
        this.plankton1 = new Image()
        this.plankton1.src = "assets/images/enemies/plankton/Plank1.png"
        this.plankton2 = new Image()
        this.plankton2.src = "assets/images/enemies/plankton/Plank2.png"
        this.plankton3 = new Image()
        this.plankton3.src = "assets/images/enemies/plankton/Plank3.png"
        this.plankton4 = new Image()
        this.plankton4.src = "assets/images/enemies/plankton/Plank4.png"
        this.plankton5 = new Image()
        this.plankton5.src = "assets/images/enemies/plankton/Plank5.png"
        this.plankton6 = new Image()
        this.plankton6.src = "assets/images/enemies/plankton/Plank6.png"

        this.image2 = this.plankton1
    }
    draw() {
        if (frames % 10 === 0) {
            if (this.image2 === this.plankton1) {
                this.image2 = this.plankton2
            } else if (this.image2 === this.plankton2) {
                this.image2 = this.plankton3
            } else if (this.image2 === this.plankton3) {
                this.image2 = this.plankton4
            } else if (this.image2 === this.plankton4) {
                this.image2 = this.plankton5
            } else if (this.image2 === this.plankton5) {
                this.image2 = this.plankton6
            } else if (this.image2 === this.plankton6) {
                this.image2 = this.plankton1
            }
        }
        c.drawImage(this.image2, this.x, this.y, this.width, this.height)
    }
}



const plank = new Enemy2(1000, 400, 120, 120)

class Player {
    constructor() {

        this.position = {
            x: 100,
            y: -10
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 200
        this.height = 200

        //WALK
        this.bobWalk1 = new Image()
        this.bobWalk1.src = "assets/images/bob/bobWalk/bobWalk1.png"
        this.bobWalk2 = new Image()
        this.bobWalk2.src = "assets/images/bob/bobWalk/bobWalk2.png"
        this.bobWalk3 = new Image()
        this.bobWalk3.src = "assets/images/bob/bobWalk/bobWalk3.png"
        this.bobWalk4 = new Image()
        this.bobWalk4.src = "assets/images/bob/bobWalk/bobWalk4.png"
        this.bobWalk5 = new Image()
        this.bobWalk5.src = "assets/images/bob/bobWalk/bobWalk5.png"
        this.bobWalk6 = new Image()
        this.bobWalk6.src = "assets/images/bob/bobWalk/bobWalk6.png"

        //PUNCH
        this.bobPunch1 = new Image()
        this.bobPunch1.src = "assets/images/bob/bobPunch/bobPunch1.png"
        this.bobPunch2 = new Image()
        this.bobPunch2.src = "assets/images/bob/bobPunch/bobPunch2.png"
        this.bobPunch3 = new Image()
        this.bobPunch3.src = "assets/images/bob/bobPunch/bobPunch3.png"
        this.bobPunch4 = new Image()
        this.bobPunch4.src = "assets/images/bob/bobPunch/bobPunch4.png"
        this.bobPunch5 = new Image()
        this.bobPunch5.src = "assets/images/bob/bobPunch/bobPunch5.png"

        //DIE
        this.bobDie1 = new Image()
        this.bobDie1.src = "assets/images/bob/bobDie/bobDie1.png"
        this.bobDie2 = new Image()
        this.bobDie2.src = "assets/images/bob/bobDie/bobDie2.png"
        this.bobDie3 = new Image()
        this.bobDie3.src = "assets/images/bob/bobDie/bobDie3.png"
        this.bobDie4 = new Image()
        this.bobDie4.src = "assets/images/bob/bobDie/bobDie4.png"
        this.bobDie5 = new Image()
        this.bobDie5.src = "assets/images/bob/bobDie/bobDie5.png"
        this.bobDie6 = new Image()
        this.bobDie6.src = "assets/images/bob/bobDie/bobDie6.png"
        this.bobDie7 = new Image()
        this.bobDie7.src = "assets/images/bob/bobDie/bobDie7.png"

        //STAND
        this.bobStand1 = new Image()
        this.bobStand1.src = "assets/images/bob/bobStand/bobStand1.png"
        this.bobStand2 = new Image()
        this.bobStand2.src = "assets/images/bob/bobStand/bobStand2.png"
        this.bobStand3 = new Image()
        this.bobStand3.src = "assets/images/bob/bobStand/bobStand3.png"
        this.bobStand4 = new Image()
        this.bobStand4.src = "assets/images/bob/bobStand/bobStand4.png"
        this.bobStand5 = new Image()
        this.bobStand5.src = "assets/images/bob/bobStand/bobStand5.png"
        this.bobStand6 = new Image()
        this.bobStand6.src = "assets/images/bob/bobStand/bobStand6.png"

        //WIN
        this.bobWin1 = new Image()
        this.bobWin1.src = "assets/images/bob/bobWin/bobWin1.png"
        this.bobWin2 = new Image()
        this.bobWin2.src = "assets/images/bob/bobWin/bobWin2.png"
        this.bobWin3 = new Image()
        this.bobWin3.src = "assets/images/bob/bobWin/bobWin3.png"
        this.bobWin4 = new Image()
        this.bobWin4.src = "assets/images/bob/bobWin/bobWin4.png"
        this.bobWin5 = new Image()
        this.bobWin5.src = "assets/images/bob/bobWin/bobWin5.png"
        this.bobWin6 = new Image()
        this.bobWin6.src = "assets/images/bob/bobWin/bobWin6.png"
        this.bobWin7 = new Image()
        this.bobWin7.src = "assets/images/bob/bobWin/bobWin7.png"
        this.bobWin8 = new Image()
        this.bobWin8.src = "assets/images/bob/bobWin/bobWin8.png"
        this.bobWin9 = new Image()
        this.bobWin9.src = "assets/images/bob/bobWin/bobWin9.png"
        this.bobWin10 = new Image()
        this.bobWin10.src = "assets/images/bob/bobWin/bobWin10.png"
        this.bobWin11 = new Image()
        this.bobWin11.src = "assets/images/bob/bobWin/bobWin11.png"
        this.bobWin12 = new Image()
        this.bobWin12.src = "assets/images/bob/bobWin/bobWin12.png"
        this.bobWin13 = new Image()
        this.bobWin13.src = "assets/images/bob/bobWin/bobWin13.png"
        this.bobWin14 = new Image()
        this.bobWin14.src = "assets/images/bob/bobWin/bobWin14.png"
        this.bobWin15 = new Image()
        this.bobWin15.src = "assets/images/bob/bobWin/bobWin15.png"
        this.bobWin16 = new Image()
        this.bobWin16.src = "assets/images/bob/bobWin/bobWin16.png"
        this.bobWin17 = new Image()
        this.bobWin17.src = "assets/images/bob/bobWin/bobWin17.png"
        this.bobWin18 = new Image()
        this.bobWin18.src = "assets/images/bob/bobWin/bobWin18.png"
        this.bobWin19 = new Image()
        this.bobWin19.src = "assets/images/bob/bobWin/bobWin19.png"
        this.bobWin20 = new Image()
        this.bobWin20.src = "assets/images/bob/bobWin/bobWin20.png"

        //this.image = this.bobWin1
        //this.image = this.bobDie1
        //this.image = this.bobPunch1
        this.image = this.bobStand1
        //this.image = this.bobWalk1

    }

    draw() {
        /*  if (frames % 10 === 0){
              if (this.image === this.bobWalk1) {
                  this.image = this.bobWalk2
              }else if (this.image === this.bobWalk2) {
                  this.image = this.bobWalk3
              }else if (this.image === this.bobWalk3) {
                  this.image = this.bobWalk4
              }else if (this.image === this.bobWalk4) {
                  this.image = this.bobWalk5
              }else if (this.image === this.bobWalk5) {
                  this.image = this.bobWalk6
              }else if (this.image === this.bobWalk6) {
                  this.image = this.bobWalk1
              }
          }  */


        /*if (frames % 10 === 0){
            if (this.image === this.bobPunch1) {
                this.image = this.bobPunch2
            }else if (this.image === this.bobPunch2) {
                this.image = this.bobPunch3
            }else if (this.image === this.bobPunch3) {
                this.image = this.bobPunch4
            }else if (this.image === this.bobPunch4) {
                this.image = this.bobPunch5
            }else if (this.image === this.bobPunch5) {
                this.image = this.bobPunch1
            }    
        }  
        */

        /*if (frames % 10 === 0){
             if (this.image === this.bobDie1) {
                 this.image = this.bobDie2
             }else if (this.image === this.bobDie2) {
                 this.image = this.bobDie3
             }else if (this.image === this.bobDie3) {
                 this.image = this.bobDie4
             }else if (this.image === this.bobDie4) {
                 this.image = this.bobDie5
             }else if (this.image === this.bobDie5) {
                 this.image = this.bobDie6
             }else if (this.image === this.bobDie6) {
                 this.image = this.bobDie7
             }else if (this.image === this.bobDie7) {
                 this.image = this.bobDie1
             }
         }  */


        if (frames % 10 === 0) {
            if (this.image === this.bobStand1) {
                this.image = this.bobStand2
            } else if (this.image === this.bobStand2) {
                this.image = this.bobStand3
            } else if (this.image === this.bobStand3) {
                this.image = this.bobStand4
            } else if (this.image === this.bobStand4) {
                this.image = this.bobStand5
            } else if (this.image === this.bobStand5) {
                this.image = this.bobStand6
            } else if (this.image === this.bobStand6) {
                this.image = this.bobStand1
            }
        }
        /*
                if (frames % 10 === 0){
                    if (this.image === this.bobWin1) {
                        this.image = this.bobWin2
                    }else if (this.image === this.bobWin2) {
                        this.image = this.bobWin3
                    }else if (this.image === this.bobWin3) {
                        this.image = this.bobWin4
                    }else if (this.image === this.bobWin4) {
                        this.image = this.bobWin5
                    }else if (this.image === this.bobWin5) {
                        this.image = this.bobWin6
                    }else if (this.image === this.bobWin6) {
                        this.image = this.bobWin7
                    }else if (this.image === this.bobWin7) {
                        this.image = this.bobWin8
                    }else if (this.image === this.bobWin8) {
                        this.image = this.bobWin9
                    }else if (this.image === this.bobWin9) {
                        this.image = this.bobWin10
                    }else if (this.image === this.bobWin10) {
                        this.image = this.bobWin11
                    }else if (this.image === this.bobWin11) {
                        this.image = this.bobWin12
                    }else if (this.image === this.bobWin12) {
                        this.image = this.bobWin13
                    }else if (this.image === this.bobWin13) {
                        this.image = this.bobWin14
                    }else if (this.image === this.bobWin14) {
                        this.image = this.bobWin15
                    }else if (this.image === this.bobWin15) {
                        this.image = this.bobWin16
                    }else if (this.image === this.bobWin16) {
                        this.image = this.bobWin17
                    }else if (this.image === this.bobWin17) {
                        this.image = this.bobWin18
                    }else if (this.image === this.bobWin18) {
                        this.image = this.bobWin19
                    }else if (this.image === this.bobWin19) {
                        this.image = this.bobWin20
                    }else if (this.image === this.bobWin20) {
                        this.image = this.bobWin1
                    }    
                } */
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y



        /*Cuando pasa el width de la pantalla*/
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }
    }
}

class Platform {
    constructor({ x, y }) {
        this.position = {
            x: x,
            y: y,
        }
        this.image = new Image();
        this.image.src = "assets/images/platform2.png"
        this.width = this.image.width
        this.height = this.image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let player = new Player()
let platforms = []


let fondo = new Background()
player.update()

scrollOffset = 0

function init() {
    class Background {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.width = canvas.width;
            this.height = canvas.height;
            this.image = new Image();
            this.image.src = "assets/images/background.gif"
        }

        //metodos (lo que hará el background)
        draw() {
            this.x--;
            if (this.x < -canvas.width) {
                this.x = 0;
            }
            c.drawImage(this.image, this.x, this.y, this.width, this.height)
            c.drawImage(
                this.image,
                this.x + this.width,
                this.y,
                this.width,
                this.height
            )
        }

    }

    class Character {
        constructor(x, y, w, h, img) {
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
        }
        //metodos

        collision(item) {
            return (
                this.x < item.x + item.width &&
                this.x + this.width > item.x &&
                this.y < item.y + item.height &&
                this.y + this.height > item.y
            )
        }
    }

    class Enemy extends Character {
        constructor(x, y, w, h, img) {
            super(x, y, w, h, img)
        }
    }

    class Enemy2 extends Character {
        constructor(x, y, w, h, img) {
            super(x, y, w, h, img)
            this.plankton1 = new Image()
            this.plankton1.src = "assets/images/enemies/plankton/Plank1.png"
            this.plankton2 = new Image()
            this.plankton2.src = "assets/images/enemies/plankton/Plank2.png"
            this.plankton3 = new Image()
            this.plankton3.src = "assets/images/enemies/plankton/Plank3.png"
            this.plankton4 = new Image()
            this.plankton4.src = "assets/images/enemies/plankton/Plank4.png"
            this.plankton5 = new Image()
            this.plankton5.src = "assets/images/enemies/plankton/Plank5.png"
            this.plankton6 = new Image()
            this.plankton6.src = "assets/images/enemies/plankton/Plank6.png"

            this.image2 = this.plankton1
        }

        draw() {
            if (frames % 10 === 0) {
                if (this.image2 === this.plankton1) {
                    this.image2 = this.plankton2
                } else if (this.image2 === this.plankton2) {
                    this.image2 = this.plankton3
                } else if (this.image2 === this.plankton3) {
                    this.image2 = this.plankton4
                } else if (this.image2 === this.plankton4) {
                    this.image2 = this.plankton5
                } else if (this.image2 === this.plankton5) {
                    this.image2 = this.plankton6
                } else if (this.image2 === this.plankton6) {
                    this.image2 = this.plankton1
                }
            }
            c.drawImage(this.image2, this.x, this.y, this.width, this.height)
        }
    }


    class FireBall {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.width = 30
            this.height = 30
            this.image = new Image()
            this.image.src = "assets/images/enemies/plankton/fireball.png"
        }
        draw() {
            if (frames % 100 === 0){
                bullets.push(new FireBall(plank.x, plank.y))
                this.x -= 10
                c.drawImage(this.image, this.x, this.y, this.width, this.height)
            }
        }
    }


    const fireball = new FireBall()
    const plank = new Enemy2(1000, 400, 120, 120)

    class Player {
        constructor() {

            this.position = {
                x: 100,
                y: -10
            }
            this.velocity = {
                x: 0,
                y: 1
            }
            this.width = 200
            this.height = 200

            //WALK
            this.bobWalk1 = new Image()
            this.bobWalk1.src = "assets/images/bob/bobWalk/bobWalk1.png"
            this.bobWalk2 = new Image()
            this.bobWalk2.src = "assets/images/bob/bobWalk/bobWalk2.png"
            this.bobWalk3 = new Image()
            this.bobWalk3.src = "assets/images/bob/bobWalk/bobWalk3.png"
            this.bobWalk4 = new Image()
            this.bobWalk4.src = "assets/images/bob/bobWalk/bobWalk4.png"
            this.bobWalk5 = new Image()
            this.bobWalk5.src = "assets/images/bob/bobWalk/bobWalk5.png"
            this.bobWalk6 = new Image()
            this.bobWalk6.src = "assets/images/bob/bobWalk/bobWalk6.png"

            //PUNCH
            this.bobPunch1 = new Image()
            this.bobPunch1.src = "assets/images/bob/bobPunch/bobPunch1.png"
            this.bobPunch2 = new Image()
            this.bobPunch2.src = "assets/images/bob/bobPunch/bobPunch2.png"
            this.bobPunch3 = new Image()
            this.bobPunch3.src = "assets/images/bob/bobPunch/bobPunch3.png"
            this.bobPunch4 = new Image()
            this.bobPunch4.src = "assets/images/bob/bobPunch/bobPunch4.png"
            this.bobPunch5 = new Image()
            this.bobPunch5.src = "assets/images/bob/bobPunch/bobPunch5.png"

            //DIE
            this.bobDie1 = new Image()
            this.bobDie1.src = "assets/images/bob/bobDie/bobDie1.png"
            this.bobDie2 = new Image()
            this.bobDie2.src = "assets/images/bob/bobDie/bobDie2.png"
            this.bobDie3 = new Image()
            this.bobDie3.src = "assets/images/bob/bobDie/bobDie3.png"
            this.bobDie4 = new Image()
            this.bobDie4.src = "assets/images/bob/bobDie/bobDie4.png"
            this.bobDie5 = new Image()
            this.bobDie5.src = "assets/images/bob/bobDie/bobDie5.png"
            this.bobDie6 = new Image()
            this.bobDie6.src = "assets/images/bob/bobDie/bobDie6.png"
            this.bobDie7 = new Image()
            this.bobDie7.src = "assets/images/bob/bobDie/bobDie7.png"

            //STAND
            this.bobStand1 = new Image()
            this.bobStand1.src = "assets/images/bob/bobStand/bobStand1.png"
            this.bobStand2 = new Image()
            this.bobStand2.src = "assets/images/bob/bobStand/bobStand2.png"
            this.bobStand3 = new Image()
            this.bobStand3.src = "assets/images/bob/bobStand/bobStand3.png"
            this.bobStand4 = new Image()
            this.bobStand4.src = "assets/images/bob/bobStand/bobStand4.png"
            this.bobStand5 = new Image()
            this.bobStand5.src = "assets/images/bob/bobStand/bobStand5.png"
            this.bobStand6 = new Image()
            this.bobStand6.src = "assets/images/bob/bobStand/bobStand6.png"

            //WIN
            this.bobWin1 = new Image()
            this.bobWin1.src = "assets/images/bob/bobWin/bobWin1.png"
            this.bobWin2 = new Image()
            this.bobWin2.src = "assets/images/bob/bobWin/bobWin2.png"
            this.bobWin3 = new Image()
            this.bobWin3.src = "assets/images/bob/bobWin/bobWin3.png"
            this.bobWin4 = new Image()
            this.bobWin4.src = "assets/images/bob/bobWin/bobWin4.png"
            this.bobWin5 = new Image()
            this.bobWin5.src = "assets/images/bob/bobWin/bobWin5.png"
            this.bobWin6 = new Image()
            this.bobWin6.src = "assets/images/bob/bobWin/bobWin6.png"
            this.bobWin7 = new Image()
            this.bobWin7.src = "assets/images/bob/bobWin/bobWin7.png"
            this.bobWin8 = new Image()
            this.bobWin8.src = "assets/images/bob/bobWin/bobWin8.png"
            this.bobWin9 = new Image()
            this.bobWin9.src = "assets/images/bob/bobWin/bobWin9.png"
            this.bobWin10 = new Image()
            this.bobWin10.src = "assets/images/bob/bobWin/bobWin10.png"
            this.bobWin11 = new Image()
            this.bobWin11.src = "assets/images/bob/bobWin/bobWin11.png"
            this.bobWin12 = new Image()
            this.bobWin12.src = "assets/images/bob/bobWin/bobWin12.png"
            this.bobWin13 = new Image()
            this.bobWin13.src = "assets/images/bob/bobWin/bobWin13.png"
            this.bobWin14 = new Image()
            this.bobWin14.src = "assets/images/bob/bobWin/bobWin14.png"
            this.bobWin15 = new Image()
            this.bobWin15.src = "assets/images/bob/bobWin/bobWin15.png"
            this.bobWin16 = new Image()
            this.bobWin16.src = "assets/images/bob/bobWin/bobWin16.png"
            this.bobWin17 = new Image()
            this.bobWin17.src = "assets/images/bob/bobWin/bobWin17.png"
            this.bobWin18 = new Image()
            this.bobWin18.src = "assets/images/bob/bobWin/bobWin18.png"
            this.bobWin19 = new Image()
            this.bobWin19.src = "assets/images/bob/bobWin/bobWin19.png"
            this.bobWin20 = new Image()
            this.bobWin20.src = "assets/images/bob/bobWin/bobWin20.png"

            //this.image = this.bobWin1
            //this.image = this.bobDie1
            //this.image = this.bobPunch1
            //this.image = this.bobStand1
            this.image = this.bobWalk1

        }



        draw() {

            if (frames % 10 === 0) {
                if (this.image === this.bobWalk1) {
                    this.image = this.bobWalk2
                } else if (this.image === this.bobWalk2) {
                    this.image = this.bobWalk3
                } else if (this.image === this.bobWalk3) {
                    this.image = this.bobWalk4
                } else if (this.image === this.bobWalk4) {
                    this.image = this.bobWalk5
                } else if (this.image === this.bobWalk5) {
                    this.image = this.bobWalk6
                } else if (this.image === this.bobWalk6) {
                    this.image = this.bobWalk1
                }
            }

            /*if (frames % 10 === 0){
                 if (this.image === this.bobDie1) {
                     this.image = this.bobDie2
                 }else if (this.image === this.bobDie2) {
                     this.image = this.bobDie3
                 }else if (this.image === this.bobDie3) {
                     this.image = this.bobDie4
                 }else if (this.image === this.bobDie4) {
                     this.image = this.bobDie5
                 }else if (this.image === this.bobDie5) {
                     this.image = this.bobDie6
                 }else if (this.image === this.bobDie6) {
                     this.image = this.bobDie7
                 }else if (this.image === this.bobDie7) {
                     this.image = this.bobDie1
                 }
             }   */

            /*
            if (frames % 10 === 0){
                if (this.image === this.bobStand1) {
                    this.image = this.bobStand2
                }else if (this.image === this.bobStand2) {
                    this.image = this.bobStand3
                }else if (this.image === this.bobStand3) {
                    this.image = this.bobStand4
                }else if (this.image === this.bobStand4) {
                    this.image = this.bobStand5
                }else if (this.image === this.bobStand5) {
                    this.image = this.bobStand6
                }else if (this.image === this.bobStand6) {
                    this.image = this.bobStand1
                }    
            } */
            /*
                    if (frames % 10 === 0){
                        if (this.image === this.bobWin1) {
                            this.image = this.bobWin2
                        }else if (this.image === this.bobWin2) {
                            this.image = this.bobWin3
                        }else if (this.image === this.bobWin3) {
                            this.image = this.bobWin4
                        }else if (this.image === this.bobWin4) {
                            this.image = this.bobWin5
                        }else if (this.image === this.bobWin5) {
                            this.image = this.bobWin6
                        }else if (this.image === this.bobWin6) {
                            this.image = this.bobWin7
                        }else if (this.image === this.bobWin7) {
                            this.image = this.bobWin8
                        }else if (this.image === this.bobWin8) {
                            this.image = this.bobWin9
                        }else if (this.image === this.bobWin9) {
                            this.image = this.bobWin10
                        }else if (this.image === this.bobWin10) {
                            this.image = this.bobWin11
                        }else if (this.image === this.bobWin11) {
                            this.image = this.bobWin12
                        }else if (this.image === this.bobWin12) {
                            this.image = this.bobWin13
                        }else if (this.image === this.bobWin13) {
                            this.image = this.bobWin14
                        }else if (this.image === this.bobWin14) {
                            this.image = this.bobWin15
                        }else if (this.image === this.bobWin15) {
                            this.image = this.bobWin16
                        }else if (this.image === this.bobWin16) {
                            this.image = this.bobWin17
                        }else if (this.image === this.bobWin17) {
                            this.image = this.bobWin18
                        }else if (this.image === this.bobWin18) {
                            this.image = this.bobWin19
                        }else if (this.image === this.bobWin19) {
                            this.image = this.bobWin20
                        }else if (this.image === this.bobWin20) {
                            this.image = this.bobWin1
                        }    
                    } */
            /*
            if (frames % 10 == 0){
                if (this.image === this.bobPunch1) {
                    this.image = this.bobPunch2
                }else if (this.image === this.bobPunch2) {
                    this.image = this.bobPunch3
                }else if (this.image === this.bobPunch3) {
                    this.image = this.bobPunch4
                }else if (this.image === this.bobPunch4) {
                    this.image = this.bobPunch5
                }else if (this.image === this.bobPunch5) {
                    this.image = this.bobPunch1
                }  */

            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }



        update() {
            this.draw()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y


            /*Cuando pasa el width de la pantalla*/
            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
                this.velocity.y += gravity
            }
        }
    }

    class Platform {
        constructor({ x, y, image }) {
            this.position = {
                x: x,
                y: y,
            }
            this.image = new Image();
            this.image.src = "assets/images/platform2.png"
            this.width = this.image.width
            this.height = this.image.height
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y)
        }
    }




    player = new Player
    platforms = [new Platform({
        x: 0, y: 600, image: this.image
    }), new Platform({
        x: 4500, y: 600, image: this.image
    }), new Platform({
        x: 7500, y: 600, image: this.image
    })]



    function generateObstacles() {
        if (!(frames % 100 === 0)) return
        const randomPosition =Number( Math.floor(Math.random() * (c.height - 0 + 1) + 0))
        const jelly = new Obstacles(randomPosition)
        enemies.push(jelly)
        console.log(randomPosition)
    }
    
        

    function printObstacles() {
        for(let obstacle of enemies) {
            obstacle.draw()
        }
    }



    player.update()

    scrollOffset = 0

    

}

function generateObstacles() {
    if (!(frames % 100 === 0)) return
    const randomPosition =Number( Math.floor(Math.random() * (700 - 0 + 1) + 0))
    const jelly = new Obstacles(randomPosition)
    enemies.push(jelly)
}

function printObstacles() {
    for(let obstacle of enemies) {
        obstacle.draw()
    }
}

function animate() {

    frames++
    
    generateObstacles()

    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    fondo.draw()
    platforms.forEach((platform) => {
        platform.draw()
    })

    console.log(enemies)
    
    plank.draw()
    player.update()
    printObstacles()
    


    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach((platform) => {
                platform.position.x -= 5
            })

        } else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
                platform.position.x += 5
            })
        }
    }




    //Platform collision detection
    platforms.forEach((platform) => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })

    



    if (scrollOffset > 2000) {
        console.log('you win')
    }

    if (player.position.y > canvas.height) {
        init()
    }
}



init()
animate()

addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 37:
            keys.left.pressed = true
            break

        case 40:
            player.velocity.y += 20
            break

        case 39:
            keys.right.pressed = true
            break

        case 38:
            player.velocity.y -= 15
            break
    }
})

addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 37:
            keys.left.pressed = false
            break

        case 40:
            player.velocity.y += 20
            break

        case 39:
            keys.right.pressed = false
            break
    }
})


