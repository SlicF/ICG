import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { initControls } from '/controls.js';


let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let vertex = new THREE.Vector3();
let color = new THREE.Color();

let yHeight = 6;

export function animate(scene, camera, renderer, controls) {
    // Your existing animate implementation
    let time = performance.now();
    let delta = (time - prevTime) / 1000;

    if (velocity.y == 0) {
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        if (moveForward || moveBackward)
            velocity.z -= direction.z * 1000.0 * delta;
        if (moveLeft || moveRight)
            velocity.x -= direction.x * 1000.0 * delta;
    }

    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);

    controls.moveRight(-velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    controls.getObject().position.y += velocity.y * delta; // new behavior

    if (controls.getObject().position.y < yHeight) {
        velocity.y = 0;
        controls.getObject().position.y = yHeight;
        canJump = true;
    }

    prevTime = time;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

export function setupMovement(scene, camera, renderer, controls) {
    // Setup event listeners for keydown and keyup
    // Call animate function
    document.addEventListener(
        "keydown",
        function (event) {
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
        },
        false
    );

    document.addEventListener(
        "keyup",
        function (event) {
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
        },
        false
    );

    
}
