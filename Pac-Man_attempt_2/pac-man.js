// ░█████╗░░█████╗░███╗░░██╗██╗░░░██╗░█████╗░░██████╗
// ██╔══██╗██╔══██╗████╗░██║██║░░░██║██╔══██╗██╔════╝
// ██║░░╚═╝███████║██╔██╗██║╚██╗░██╔╝███████║╚█████╗░
// ██║░░██╗██╔══██║██║╚████║░╚████╔╝░██╔══██║░╚═══██╗
// ╚█████╔╝██║░░██║██║░╚███║░░╚██╔╝░░██║░░██║██████╔╝
// ░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░

// ██████╗░███████╗░█████╗░██╗░░░░░███████╗██████╗░░█████╗░████████╗██╗░█████╗░███╗░░██╗░██████╗
// ██╔══██╗██╔════╝██╔══██╗██║░░░░░██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔════╝
// ██║░░██║█████╗░░██║░░╚═╝██║░░░░░█████╗░░██████╔╝███████║░░░██║░░░██║██║░░██║██╔██╗██║╚█████╗░
// ██║░░██║██╔══╝░░██║░░██╗██║░░░░░██╔══╝░░██╔══██╗██╔══██║░░░██║░░░██║██║░░██║██║╚████║░╚═══██╗
// ██████╔╝███████╗╚█████╔╝███████╗███████╗██║░░██║██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║██████╔╝
// ╚═════╝░╚══════╝░╚════╝░╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// ──────────────────────────────────────────────────────────────────────────────────────────────────────────
// ─██████████████─██████─────────██████████████─██████████████─██████████████─██████████████─██████████████─
// ─██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
// ─██░░██████████─██░░██─────────██░░██████░░██─██░░██████████─██░░██████████─██░░██████████─██░░██████████─
// ─██░░██─────────██░░██─────────██░░██──██░░██─██░░██─────────██░░██─────────██░░██─────────██░░██─────────
// ─██░░██─────────██░░██─────────██░░██████░░██─██░░██████████─██░░██████████─██░░██████████─██░░██████████─
// ─██░░██─────────██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
// ─██░░██─────────██░░██─────────██░░██████░░██─██████████░░██─██████████░░██─██░░██████████─██████████░░██─
// ─██░░██─────────██░░██─────────██░░██──██░░██─────────██░░██─────────██░░██─██░░██─────────────────██░░██─
// ─██░░██████████─██░░██████████─██░░██──██░░██─██████████░░██─██████████░░██─██░░██████████─██████████░░██─
// ─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
// ─██████████████─██████████████─██████──██████─██████████████─██████████████─██████████████─██████████████─
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────




class Boundary {
    static width = 40;
    static height = 40;
    constructor({ position }) {
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw() {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}


class Player {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.radius = 13
    }

    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "yellow"
        context.fill();
        context.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}



class Pellet {
    constructor({ position }) {
        this.position = position
        this.radius = 3
    }

    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "white"
        context.fill();
        context.closePath();
    }
}

class PowerUp {
    constructor({ position }) {
        this.position = position
        this.radius = 10
    }

    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "white"
        context.fill();
        context.closePath();
    }
}



class Ghost {
    static speed = 2
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.radius = 15
        this.prevColisions = [];
        this.speed = 2
        this.scared = false ;
    }

    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.scared ? 'blue' : "red";
        context.fill();
        context.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}




// ██████╗░███████╗░█████╗░██╗░░░░░░█████╗░██████╗░░█████╗░████████╗██╗░█████╗░███╗░░██╗░██████╗
// ██╔══██╗██╔════╝██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔════╝
// ██║░░██║█████╗░░██║░░╚═╝██║░░░░░███████║██████╔╝███████║░░░██║░░░██║██║░░██║██╔██╗██║╚█████╗░
// ██║░░██║██╔══╝░░██║░░██╗██║░░░░░██╔══██║██╔══██╗██╔══██║░░░██║░░░██║██║░░██║██║╚████║░╚═══██╗
// ██████╔╝███████╗╚█████╔╝███████╗██║░░██║██║░░██║██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║██████╔╝
// ╚═════╝░╚══════╝░╚════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░

const map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', ' ', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', ' ', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'p', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]
    ;

const pellets = [];
const powerUps = [];
const boundaries = [];
const player = new Player({ position: { x: Boundary.width + Boundary.width / 2, y: Boundary.height + Boundary.height / 2 }, velocity: { x: 0, y: 0 } });
const ghosts = [
    new Ghost({ position: { x: Boundary.width * 6 + Boundary.width / 2, y: Boundary.height + Boundary.height / 2 }, velocity: { x: Ghost.speed, y: 0 } }),
    new Ghost({ position: { x: Boundary.width * 1 + Boundary.width / 2, y: Boundary.height * 5 + Boundary.height / 2 }, velocity: { x: Ghost.speed, y: 0 } }),
    new Ghost({ position: { x: Boundary.width * 1 + Boundary.width / 2, y: Boundary.height * 9 + Boundary.height / 2 }, velocity: { x: Ghost.speed, y: 0 } })
];


const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }

}

let lastKey = '';
let score = -10;



// ███████╗██╗░░░██╗███╗░░██╗░█████╗░████████╗██╗░█████╗░███╗░░██╗░██████╗
// ██╔════╝██║░░░██║████╗░██║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔════╝
// █████╗░░██║░░░██║██╔██╗██║██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║╚█████╗░
// ██╔══╝░░██║░░░██║██║╚████║██║░░██╗░░░██║░░░██║██║░░██║██║╚████║░╚═══██╗
// ██║░░░░░╚██████╔╝██║░╚███║╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║██████╔╝
// ╚═╝░░░░░░╚═════╝░╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░





function circleCollidesWithRect({ circle, rect }) {
    const padding = Boundary.width / 2 - circle.radius - 1;
    return (circle.position.y - circle.radius + circle.velocity.y <= rect.position.y + rect.height + padding &&
        circle.position.x + circle.radius + circle.velocity.x >= rect.position.x - padding &&
        circle.position.y + circle.radius + circle.velocity.y >= rect.position.y - padding &&
        circle.position.x - circle.radius + circle.velocity.x <= rect.position.x + rect.width + padding)
}

function animate() {

    animationID = window.requestAnimationFrame(animate)

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (keys.w.pressed && lastKey === 'w') {
        player.velocity.y = -5;
    } else if (keys.a.pressed && lastKey === 'a') {
        player.velocity.x = -5;
    } else if (keys.s.pressed && lastKey === 's') {
        player.velocity.y = 5;
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 5;
    }

    boundaries.forEach(boundary => {
        boundary.draw();

        if (player.position.y - player.radius + player.velocity.y + 3 <= boundary.position.y + boundary.height &&
            player.position.x + player.radius + player.velocity.x >= boundary.position.x &&
            player.position.y + player.radius + player.velocity.y - 3 >= boundary.position.y &&
            player.position.x - player.radius + player.velocity.x <= boundary.position.x + boundary.width) {

            player.velocity.x = 0;
            player.velocity.y = 0;
        }
    });

    player.update();
    player.velocity.y = 0;
    player.velocity.x = 0;

    ghosts.forEach((ghost,index) => {
        ghost.update();


        if (Math.hypot(ghost.position.y - player.position.y, ghost.position.x - player.position.x) < ghost.radius + player.radius && !ghost.scared) {
            cancelAnimationFrame(animationID);
            alert("you lose");
            localStorage.setItem('currentscore', JSON.stringify(score));
            console.log(JSON.parse(localStorage.getItem('currentscore')) || []);
            window.location.href = 'leaderboard.html';
        }

        if (Math.hypot(ghost.position.y - player.position.y, ghost.position.x - player.position.x) < ghost.radius + player.radius && ghost.scared) {
            ghosts.splice(index, 1);
            score += 1000 ;
        }

        const collisions = [];
        boundaries.forEach(boundary => {

            if (!collisions.includes('right') && circleCollidesWithRect({ circle: { ...ghost, velocity: { x: ghost.speed, y: 0 } }, rect: boundary })) {

                collisions.push('right');
            }

            if (!collisions.includes('left') && circleCollidesWithRect({ circle: { ...ghost, velocity: { x: -ghost.speed, y: 0 } }, rect: boundary })) {
                collisions.push('left');
            }

            if (!collisions.includes('up') && circleCollidesWithRect({ circle: { ...ghost, velocity: { x: 0, y: -ghost.speed } }, rect: boundary })) {
                collisions.push('up');;
            }

            if (!collisions.includes('down') && circleCollidesWithRect({ circle: { ...ghost, velocity: { x: 0, y: ghost.speed } }, rect: boundary })) {
                collisions.push('down');
            }
        });
        if (collisions.length > ghost.prevColisions.length) {
            ghost.prevColisions = collisions;
        }
 /*warning*/        if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevColisions)) {



            if (ghost.velocity.x > 0) {
                ghost.prevColisions.push('right');
            } else if (ghost.velocity.x < 0) {
                ghost.prevColisions.push('left');
            } else if (ghost.velocity.y < 0) {
                ghost.prevColisions.push('up');
            } else if (ghost.velocity.y > 0) {
                ghost.prevColisions.push('down');
            }

            const pathWays = ghost.prevColisions.filter(collision => {
                return !collisions.includes(collision);
            })


            const direction = pathWays[Math.floor(Math.random() * pathWays.length)];


            switch (direction) {
                case "down":
                    ghost.velocity.y = ghost.speed;
                    ghost.velocity.x = 0;
                    break;
                case "up":
                    ghost.velocity.y = -ghost.speed;
                    ghost.velocity.x = 0;
                    break;
                case "right":
                    ghost.velocity.y = 0;
                    ghost.velocity.x = ghost.speed;
                    break;
                case "left":
                    ghost.velocity.y = 0;
                    ghost.velocity.x = -ghost.speed;
                    break;

                default:
                    break;
            }
            ghost.prevColisions = [];
        }





    });


    // for (let i = pellets.length - 1; i > 0; i--) {
    //     const pellet = pellets[i] 
    //     pellet.draw();

    //     if (Math.hypot(pellet.position.y - player.position.y, pellet.position.x - player.position.x) < pellet.radius + player.radius) {
    //         pellets.splice(index, 1);
    //     }

    // }

    pellets.forEach((pellet, index) => {
        pellet.draw();

        if (Math.hypot(pellet.position.y - player.position.y, pellet.position.x - player.position.x) < pellet.radius + player.radius) {
            pellets.splice(index, 1);
            score += 10 ;
            document.getElementById('scorecount').innerHTML = score;
        }
    });

    // player collides with powerup

    powerUps.forEach((powerUp, index) => {
        powerUp.draw();

        if (Math.hypot(powerUp.position.y - player.position.y, powerUp.position.x - player.position.x) < powerUp.radius + player.radius) {
            powerUps.splice(index, 1);
            score += 100 ;

            ghosts.forEach(ghost => {
                ghost.scared = true;

                setTimeout(() => {
                    ghost.scared = false;
                }, 3000);
            });
        }
    });

    // pellets.forEach((element, index) => {
    //     element.draw();
    //     if (Math.hypot(element.position.x - player.position.x, element.position.y - player.position.y) < player.radius + element.radius) {

    //         points.splice(index, 1);
    //         score++;
    //         // console.log(score);
    //     }
    // })



    // if (keys.w.pressed && lastKey === 'w') {
    //     player.velocity.y = -5  ;
    // }else if (keys.a.pressed && lastKey === 'a'){
    //     player.velocity.x = -5 ;
    // }else if (keys.s.pressed && lastKey === 's'){
    //     player.velocity.y = 5 ;
    // }else if (keys.d.pressed && lastKey === 'd'){
    //     player.velocity.x = 5 ;
    // }

    if ((pellets.length === 0 || ghosts.length === 0) && score > 10) {
        alert('you won the game');
        cancelAnimationFrame(animationID);
        localStorage.setItem('currentscore', JSON.stringify(score));
        console.log(JSON.parse(localStorage.getItem('currentscore')) || []);
        window.location.href = 'leaderboard.html';
    }

}
animate();



map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '-':
                boundaries.push(new Boundary({ position: { x: Boundary.height * j, y: Boundary.height * i } }))
                break;

            case ' ':
                pellets.push(new Pellet({ position: { x: Boundary.width * j + Boundary.width / 2, y: Boundary.height * i + Boundary.height / 2 } }))
                break;

            case 'p':
                powerUps.push(new PowerUp({ position: { x: Boundary.width * j + Boundary.width / 2, y: Boundary.height * i + Boundary.height / 2 } }))
                break;
        }
    });
});



// ██╗░░░░░██╗██╗░░░██╗███████╗  ░█████╗░░█████╗░██████╗░███████╗
// ██║░░░░░██║██║░░░██║██╔════╝  ██╔══██╗██╔══██╗██╔══██╗██╔════╝
// ██║░░░░░██║╚██╗░██╔╝█████╗░░  ██║░░╚═╝██║░░██║██║░░██║█████╗░░
// ██║░░░░░██║░╚████╔╝░██╔══╝░░  ██║░░██╗██║░░██║██║░░██║██╔══╝░░
// ███████╗██║░░╚██╔╝░░███████╗  ╚█████╔╝╚█████╔╝██████╔╝███████╗
// ╚══════╝╚═╝░░░╚═╝░░░╚══════╝  ░╚════╝░░╚════╝░╚═════╝░╚══════╝




window.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;

        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;

        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;

        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'w':
            keys.w.pressed = false;
            break;

        case 'a':
            keys.a.pressed = false;
            break;

        case 's':
            keys.s.pressed = false;
            break;

        case 'd':
            keys.d.pressed = false;
            break;
        default:
            break;
    }
})

















// function updateGameState() {
//     // Update game state (e.g., check if a pellet is eaten or a ghost is destroyed)

//     // Check win condition
//     if (pellets.length <= 0 && ghosts.length <= 0) {
//         alert('you won the game');
//         // Reload the page after the alert is closed
//         setTimeout(reloadPage, 1000); // Reload after 1 second
//     }
// }