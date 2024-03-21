export function initMovement(controls) {
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    let canJump = false;
   
    let prevTime = performance.now();
    let velocity = new THREE.Vector3();
    let direction = new THREE.Vector3();
   
    document.addEventListener('keydown', function(event) {
       switch (event.keyCode) {
         case 38: // up
         case 87: // w
           moveForward = true;
           break;
         case 37: // left
         case 65: // a
           moveLeft = true;
           break;
         case 40: // down
         case 83: // s
           moveBackward = true;
           break;
         case 39: // right
         case 68: // d
           moveRight = true;
           break;
         case 32: // space
           if (canJump === true) velocity.y += 200;
           canJump = false;
           break;
       }
    }, false);
   
    document.addEventListener('keyup', function(event) {
       switch (event.keyCode) {
         case 38: // up
         case 87: // w
           moveForward = false;
           break;
         case 37: // left
         case 65: // a
           moveLeft = false;
           break;
         case 40: // down
         case 83: // s
           moveBackward = false;
           break;
         case 39: // right
         case 68: // d
           moveRight = false;
           break;
       }
    }, false);
   
    // Add your movement logic here, using the controls object
   }
   