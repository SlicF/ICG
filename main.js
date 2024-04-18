import * as THREE from "three";
import { initControls } from '/controls.js';
import { or } from "three/examples/jsm/nodes/Nodes.js";

let objects = [];

function init() {
   const hud = document.getElementById('hud');
   const hudDocument = hud.contentWindow.document;

   const velocityElement = hudDocument.getElementById('velocity');
   const xElement = hudDocument.getElementById('x');
   const yElement = hudDocument.getElementById('y');
   const zElement = hudDocument.getElementById('z');
   const vxElement = hudDocument.getElementById('vx');
   const vyElement = hudDocument.getElementById('vy');
   const vzElement = hudDocument.getElementById('vz');
   const scene = new THREE.Scene();

   let light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
   light.position.set(0.5, 1, 0.75);
   scene.add(light);

   const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.0001, 500);
   var yHeight = 6;
   camera.position.set(0, yHeight, 15);
   camera.lookAt(0, yHeight, 0);

   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);


   // Adiciona o ouvinte de eventos
   window.addEventListener('resize', onWindowResize, false);

   const controls = initControls(camera, renderer.domElement);


   let geometry = new THREE.BoxGeometry(1000, 6, 1000);
   let material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: true,
   });
   let plane = new THREE.Mesh(geometry, material);
   plane.position.set(0, -3, 0);
   scene.add(plane);
   objects.push(plane);

   //cube
   let cubeGeometry = new THREE.BoxGeometry(12, 6, 12);
   let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });


   // let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
   // cube.position.set(0, 2.5, 0);
   // scene.add(cube);
   // objects.push(cube);
   // generate a series of cubes
   for (let i = 0; i < 10; i++) {
      let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(i * 24, i * 8, i * 24); // increase y position for each cube
      scene.add(cube);
      objects.push(cube);
   }

   // movement
   let moveForward = false;
   let moveBackward = false;
   let moveLeft = false;
   let moveRight = false;
   let canJump = false;
   let isCrouched = false;

   let prevTime = performance.now();
   let velocity = new THREE.Vector3();
   let direction = new THREE.Vector3();
   let vertex = new THREE.Vector3();
   let color = new THREE.Color();
   let jumpPower = 40;

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
               if (canJump === true) velocity.y += jumpPower;
               canJump = false;
               break;
            case 16:
               isCrouched = true;
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
            case 16:
               isCrouched = false;
               break;
         }
      },
      false
   );

   function collisionDetection() {
      let originPoint = controls.getObject().position.clone();
      let collisionDirections = [] // 1 = forward, 2 = backward, 3 = left, 4 = right, 5 = up, 6 = down

      if (isCrouched)
         originPoint.y = originPoint.y - yHeight / 4;
      else
         originPoint.y = originPoint.y - yHeight / 2;

      //set hitbox size
      if (isCrouched)
         var hitbox = new THREE.Box3().setFromCenterAndSize(originPoint, new THREE.Vector3(1, yHeight / 2, 1));
      else
         var hitbox = new THREE.Box3().setFromCenterAndSize(originPoint, new THREE.Vector3(1, yHeight, 1));

      let hitboxX = hitbox.max.x - hitbox.min.x;
      let hitboxY = hitbox.max.y - hitbox.min.y;
      let hitboxZ = hitbox.max.z - hitbox.min.z;

      for (let i = 0; i < objects.length; i++) {
         let object = objects[i];
         let objectHitbox = new THREE.Box3().setFromObject(object);
         let objectHitboxX = objectHitbox.max.x - objectHitbox.min.x;
         let objectHitboxY = objectHitbox.max.y - objectHitbox.min.y;
         let objectHitboxZ = objectHitbox.max.z - objectHitbox.min.z;
         if (hitbox.intersectsBox(objectHitbox)) {
            console.log(objectHitbox.min.y, hitbox.max.y);
            switch (true) {
               case object.position.y > originPoint.y:
                  //top
                  collisionDirections.push([i, 5]);
                  break;
               case object.position.y < originPoint.y:
                  //bottom
                  collisionDirections.push([i, 6]);
                  break;
               case objectHitbox.min.z < hitbox.max.z || objectHitbox.max.z < hitbox.min.z || (objectHitbox.min.z < hitbox.max.z && objectHitbox.max.z > hitbox.min.z):
                  if (object.position.x > originPoint.x) {
                     //left
                     collisionDirections.push([i, 3]);
                  }
                  if (object.position.x < originPoint.x) {
                     //right
                     collisionDirections.push([i, 4]);
                  } 
               case objectHitbox.min.x < hitbox.max.x || objectHitbox.max.x < hitbox.min.x || (objectHitbox.min.x < hitbox.max.x && objectHitbox.max.x > hitbox.min.x):
                  if (object.position.z > originPoint.z) {
                     //forward
                     collisionDirections.push([i, 1]);
                  }
                  if (object.position.z < originPoint.z) {
                     //backward
                     collisionDirections.push([i, 2]);
                  }

            }
         }
      }
      return collisionDirections;
   }

   function animate() {


      let collidingObjects = collisionDetection();

      let time = performance.now();
      let delta = (time - prevTime) / 1000;

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);



      velocity.y -= 100 * delta;

      controls.getObject().position.y += velocity.y * delta; // new behavior
      if (collidingObjects.length === 0) {
         if (isCrouched) {
            if (((moveForward || moveBackward) && direction.x != 0) && (moveLeft || moveRight && direction.z != 0)) {
               velocity.z -= direction.z * 7.0 * delta / 2 ** (1 / 2);
               velocity.x -= direction.x * 7.0 * delta / 2 ** (1 / 2);
            }
            else if (moveForward || moveBackward)
               velocity.z -= direction.z * 7.0 * delta;
            else if (moveLeft || moveRight)
               velocity.x -= direction.x * 7.0 * delta;
         }
         else {
            if (((moveForward || moveBackward) && direction.x != 0) && (moveLeft || moveRight && direction.z != 0)) {
               velocity.z -= direction.z * 15.0 * delta / 2 ** (1 / 2);
               velocity.x -= direction.x * 15.0 * delta / 2 ** (1 / 2);
            }
            else if (moveForward || moveBackward)
               velocity.z -= direction.z * 15.0 * delta;
            else if (moveLeft || moveRight)
               velocity.x -= direction.x * 15.0 * delta;
         }
      }
      else {
         for (let i = 0; i < collidingObjects.length; i++) {
            let object = objects[collidingObjects[i][0]];
            let objectHitbox = new THREE.Box3().setFromObject(object);
            if (collidingObjects[i][1] === 6) {
               if (!isCrouched) {
                  velocity.x -= velocity.x * 15.0 * delta;
                  velocity.z -= velocity.z * 15.0 * delta;
                  if (((moveForward || moveBackward) && direction.x != 0) && (moveLeft || moveRight && direction.z != 0)) {
                     velocity.z -= direction.z * 750.0 * delta / 2 ** (1 / 2);
                     velocity.x -= direction.x * 750.0 * delta / 2 ** (1 / 2);
                  }
                  else if (moveForward || moveBackward)
                     velocity.z -= direction.z * 750.0 * delta;
                  else if (moveLeft || moveRight)
                     velocity.x -= direction.x * 750.0 * delta;

                  if (controls.getObject().position.y < object.position.y + (objectHitbox.max.y - objectHitbox.min.y) / 2 + yHeight) {
                     velocity.y = 0;
                     controls.getObject().position.y = object.position.y + (objectHitbox.max.y - objectHitbox.min.y) / 2 + yHeight;
                     canJump = true;
                  }
               }
               else {
                  velocity.x -= velocity.x * 20.0 * delta;
                  velocity.z -= velocity.z * 20.0 * delta;
                  if (((moveForward || moveBackward) && direction.x != 0) && (moveLeft || moveRight && direction.z != 0)) {
                     velocity.z -= direction.z * 400.0 * delta / 2 ** (1 / 2);
                     velocity.x -= direction.x * 400.0 * delta / 2 ** (1 / 2);
                  }
                  else if (moveForward || moveBackward)
                     velocity.z -= direction.z * 400.0 * delta;
                  else if (moveLeft || moveRight)
                     velocity.x -= direction.x * 400.0 * delta;
                  if (controls.getObject().position.y < object.position.y + (objectHitbox.max.y - objectHitbox.min.y) / 2 + yHeight / 2) {
                     velocity.y = 0;
                     controls.getObject().position.y = object.position.y + (objectHitbox.max.y - objectHitbox.min.y) / 2 + yHeight / 2;
                     canJump = true;
                  }
               }
            }
            if (collidingObjects[i][1] === 5) {
               if (controls.getObject().position.y > object.position.y - (objectHitbox.max.y - objectHitbox.min.y) / 2) {
                  velocity.y = 0;
                  controls.getObject().position.y = object.position.y - (objectHitbox.max.y - objectHitbox.min.y) / 2;
               }
            }
            if (collidingObjects[i][1] === 1) {
               console.log('colliding with forward');

            }
            if (collidingObjects[i][1] === 2) {
               console.log('colliding with backward');

            }
            if (collidingObjects[i][1] === 3) {
               console.log('colliding with left');

            }
            if (collidingObjects[i][1] === 4) {
               console.log('colliding with right');

            }
         }
      }




      const horizontalVelocity = new THREE.Vector3(velocity.x, 0, velocity.z);
      velocityElement.textContent = `Velocity: ${horizontalVelocity.length().toFixed(2)}`;
      xElement.textContent = ` X: ${controls.getObject().position.x.toFixed(2)} `;
      yElement.textContent = ` Y: ${controls.getObject().position.y.toFixed(2)} `;
      zElement.textContent = ` Z: ${controls.getObject().position.z.toFixed(2)} `;
      hud.contentWindow.postMessage({ velocity: horizontalVelocity.length().toFixed(2) }, '*');
      //display x, y, z in the hud divs with id x, y, z
      hud.contentWindow.postMessage({ x: controls.getObject().position.x.toFixed(2) }, '*');
      hud.contentWindow.postMessage({ y: controls.getObject().position.y.toFixed(2) }, '*');
      hud.contentWindow.postMessage({ z: controls.getObject().position.z.toFixed(2) }, '*');
      //display vx, vy, vz in the hud divs with id vx, vy, vz
      vxElement.textContent = ` VX: ${velocity.x.toFixed(2)} `;
      vyElement.textContent = ` VY: ${velocity.y.toFixed(2)} `;
      vzElement.textContent = ` VZ: ${velocity.z.toFixed(2)} `;

      prevTime = time;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
   }

   function onWindowResize() {
      // Atualiza o aspecto da câmera
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Atualiza o tamanho do renderizador
      renderer.setSize(window.innerWidth, window.innerHeight);
   }

   animate();

}

init();

