import * as THREE from 'three';
import { initControls } from './controls.js';
import { or } from "three/examples/jsm/nodes/Nodes.js";


let objects = [];

function init() {

   const hud = document.getElementById('hud');
   const ControlsHud = document.getElementById('hud_controls');
   const hudDocument = hud.contentWindow.document;
   const ControlsHudDocument = ControlsHud.contentWindow.document;

   let hudShowing = true;
   let gamePaused = false;

   let hardMode = localStorage.getItem('hardMode') === 'true' ? true : false;
   if (!localStorage.getItem('hardMode')) {
      localStorage.setItem('hardMode', hardMode.toString());
   }

   function hideHud() {
      if (hudShowing) {
         hideControlsElement.style.display = 'block';
         pauseElement.style.display = 'block';
         jumpElement.style.display = 'block';
         crouchElement.style.display = 'block';
         forwardElement.style.display = 'block';
         backwardElement.style.display = 'block';
         leftElement.style.display = 'block';
         rightElement.style.display = 'block';
         hardElement.style.display = 'block';

         hudShowing = false;
      } else {
         hideControlsElement.style.display = 'none';
         pauseElement.style.display = 'none';
         jumpElement.style.display = 'none';
         crouchElement.style.display = 'none';
         forwardElement.style.display = 'none';
         backwardElement.style.display = 'none';
         leftElement.style.display = 'none';
         rightElement.style.display = 'none';
         hardElement.style.display = 'none';

         hudShowing = true;
      }
   }




   const velocityElement = hudDocument.getElementById('velocity');
   const xElement = hudDocument.getElementById('x');
   const yElement = hudDocument.getElementById('y');
   const zElement = hudDocument.getElementById('z');
   const vxElement = hudDocument.getElementById('vx');
   const vyElement = hudDocument.getElementById('vy');
   const vzElement = hudDocument.getElementById('vz');
   const timeElement = hudDocument.getElementById('time');
   const hardModeElement = hudDocument.getElementById('hardMode');
   const scene = new THREE.Scene();
   let timer = 0;
   let timerStart = false;

   const hideControlsElement = ControlsHudDocument.getElementById('h');
   const pauseElement = ControlsHudDocument.getElementById('p');
   const jumpElement = ControlsHudDocument.getElementById('space');
   const crouchElement = ControlsHudDocument.getElementById('shift');
   const forwardElement = ControlsHudDocument.getElementById('w');
   const backwardElement = ControlsHudDocument.getElementById('s');
   const leftElement = ControlsHudDocument.getElementById('a');
   const rightElement = ControlsHudDocument.getElementById('d');
   const hardElement = ControlsHudDocument.getElementById('enter');

   // Carregue a imagem
   const loader = new THREE.TextureLoader();
   const texture = loader.load('/sky.jpg');

   // Crie a esfera
   const skyboxGeometry = new THREE.SphereGeometry(500, 32, 32);
   const skyboxMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
   const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

   // Defina a prioridade de renderização da skybox
   skybox.renderOrder = -Infinity;

   // Adicione a esfera à cena
   scene.add(skybox);


   let HemisphereLight = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.1);
   scene.add(HemisphereLight);

   let light = new THREE.PointLight(0xffffff, 500000, 1000000, 1);
   light.position.set(-100000, 100000, -100000);
   light.castShadow = true;
   light.shadow.camera.near = 0.1;
   scene.add(light);

   const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.0001, 500);
   var yHeight = 6;
   camera.position.set(0, yHeight, 15);
   camera.lookAt(0, yHeight, 0);

   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setClearColor(0x000000, 0);
   renderer.antialias = true;


   // Adiciona o ouvinte de eventos
   window.addEventListener('resize', onWindowResize, false);

   const controls = initControls(camera, renderer.domElement);


   let geometry = new THREE.BoxGeometry(4000, 3, 4000);
   let material = new THREE.MeshLambertMaterial({
      color: 0x1fdf1f,
      wireframe: false,
   });
   let plane = new THREE.Mesh(geometry, material);
   plane.position.set(0, -3, 0);
   //receives shadows
   plane.castShadow = true;
   plane.receiveShadow = true;
   scene.add(plane);
   objects.push(plane);

   //cube
   let cubeGeometry = new THREE.BoxGeometry(13, 4, 13);
   let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0f0f });
   let firstBlockPosition = new THREE.Vector3(0, 4, 0);
   let lastBlockPosition = new THREE.Vector3(0, 4, 0);
   let cubePosition = new THREE.Vector3(0, 0, 0);

   let level = 1;
   renderLevel(level);
   //1st level
   //switch case for levels
   function renderLevel(level) {
      let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      switch (level) {
         case 1:
            for (let i = 0; i < 11; i++) {
               cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
               cubePosition.set(0, i * 6 + 4, -i * 36); // increase y position for each cube
               cube.position.set(cubePosition.x, cubePosition.y, cubePosition.z); // increase y position for each cube
               cube.castShadow = true;
               cube.receiveShadow = true
               scene.add(cube);
               objects.push(cube);
            }
            lastBlockPosition = objects[objects.length - 1].position;
            break;
         case 2:
            //last block from level 1
            firstBlockPosition = lastBlockPosition;
            cube.position.set(firstBlockPosition.x, firstBlockPosition.y, firstBlockPosition.z);
            cube.castShadow = true;
            scene.add(cube);
            objects.push(cube);

            for (let i = 0; i < 12; i++) {
               cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
               cubePosition.set(firstBlockPosition.x + 16 * Math.sin(i * 4), firstBlockPosition.y + i * 5, firstBlockPosition.z + -i * 35)
               cube.position.set(cubePosition.x, cubePosition.y, cubePosition.z); // increase x position for each cube
               cube.castShadow = true;
               scene.add(cube);
               objects.push(cube);
            }
            lastBlockPosition = objects[objects.length - 1].position;
            break;
         case 3:
            //last block from level 2
            firstBlockPosition = lastBlockPosition;
            cube.position.set(firstBlockPosition.x, firstBlockPosition.y, firstBlockPosition.z);
            cube.castShadow = true;
            scene.add(cube);
            objects.push(cube);

            for (let i = 0; i < 13; i++) {
               cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
               cubePosition.set(firstBlockPosition.x + 42 * Math.cos(i) - 6, firstBlockPosition.y + i * 6, - 42 * Math.sin(i) + firstBlockPosition.z - 36)
               cube.position.set(cubePosition.x, cubePosition.y, cubePosition.z); // increase x position for each cube
               cube.castShadow = true;
               scene.add(cube);
               objects.push(cube);
            }
            lastBlockPosition = objects[objects.length - 1].position;
            break;

         case 4:
            //last block from level 3
            firstBlockPosition = lastBlockPosition;
            cube.position.set(firstBlockPosition.x, firstBlockPosition.y, firstBlockPosition.z);
            cube.castShadow = true;
            scene.add(cube);
            objects.push(cube);

            for (let i = 0; i < 14; i++) {
               cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
               cubePosition.set(firstBlockPosition.x + 42 * Math.cos(i) - 6, firstBlockPosition.y + 4.5 * Math.sin(i) + 1.5 * i, + firstBlockPosition.z - i * 36)
               cube.position.set(cubePosition.x, cubePosition.y, cubePosition.z); // increase x position for each cube
               cube.castShadow = true;
               scene.add(cube);
               objects.push(cube);
            }
            lastBlockPosition = objects[objects.length - 1].position;
            break;
         case 5:
            //last block from level 4
            firstBlockPosition = lastBlockPosition;
            cube.position.set(firstBlockPosition.x, firstBlockPosition.y, firstBlockPosition.z);
            cube.castShadow = true;
            scene.add(cube);
            objects.push(cube);

            for (let i = 0; i < 15; i++) {
               cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
               cubePosition.set(firstBlockPosition.x + - 42 * Math.sin(i), firstBlockPosition.y + 4 * Math.sin(i) + 2 * i, + firstBlockPosition.z - i * 39)
               cube.position.set(cubePosition.x, cubePosition.y, cubePosition.z); // increase x position for each cube
               cube.castShadow = true;
               scene.add(cube);
               objects.push(cube);
            }
            lastBlockPosition = objects[objects.length - 1].position;
            break;

         default:
            console.log('Done!');
            if (timerStart === true) {
               stopTimer();
            }
            //reload page
            location.reload();
            break;
      }
   }

   function startTimer() {
      timer = 0;
      setInterval(() => {
         timer++;
      }, 100);
      timerStart = true;
   }

   function pauseResume() {
      if (timerStart === true) {
         timer = timer;
         setInterval(() => {
            timer--;
         }, 100);
         timerStart = false;
      } else {
         setInterval(() => {
            timer++;
         }, 100);
         timerStart = true;
      }
   }

   function stopTimer() {
      timerStart = false;

      //stop timer and save time in local storage
      timer = timer;
      setInterval(() => {
         timer--;
      }, 100);

      //if there is times in local Storage, add to the array else create a new array
      let times = JSON.parse(localStorage.getItem('times')) || [];
      times.push({ time: timer, hardMode: hardMode });
      localStorage.setItem('times', JSON.stringify(times));

   }

   function nextLevel() {

      //if player reaches the last block of the level
      if (((lastBlockPosition.z - 6.5 < controls.getObject().position.z) && (controls.getObject().position.z < lastBlockPosition.z + 6.5)) && ((lastBlockPosition.x - 6.5 < controls.getObject().position.x) && (controls.getObject().position.x < lastBlockPosition.x + 6.5)) && (lastBlockPosition.y + 3 < controls.getObject().position.y)) {
         //clear last level objects
         for (let i = 0; i < 10 + level; i++) {
            scene.remove(objects[objects.length - 1]);
            objects[0].remove(objects.length - 1);
         }
         level++;
         renderLevel(level);
      }
   }

   function respawn() {
      //if player is below the first block of the level
      let firstBlock = objects[objects.length - 10 - level];
      let firstBlockPos = firstBlockPosition;
      if (controls.getObject().position.y < firstBlockPos.y - 20) {
         //respawn player at the beginning of the level
         controls.getObject().position.set(firstBlockPos.x, firstBlockPos.y + 20, firstBlockPos.z);
         velocity.x = 0;
         velocity.y = 0;
         velocity.z = 0;
      }
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
   let jumpPower = 40;
   let absVx = 0;
   let absVz = 0;
   let alpha = 0;
   let theta = Math.PI;
   let figma = theta - alpha;
   let absV = 0;

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
            case 80: // p
               pauseGame();
               break;
            //h for hide hud
            case 72: // h
               hideHud();
               break;
            //Enter for hard mode
            case 13: // Enter
               hardModeToggle();
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

   function pauseGame() {
      if (gamePaused) {
         gamePaused = false;
         //hide pause.html
         const pause = document.getElementById('pause');
         pause.style.display = 'none';
         pauseResume();
         animate();
      } else {
         gamePaused = true;
         //show pause.html
         const pause = document.getElementById('pause');
         pause.style.display = 'block';
      }
   }

   function hardModeToggle() {
      if (timer === 0) {
         //if hardmode is true, set to false and vice versa
         if (hardMode) {
            hardMode = false;
         } else {
            hardMode = true;
         }
         localStorage.setItem('hardMode', hardMode.toString());
      }
      else {
         if (hardMode) {
            hardMode = false;
            localStorage.setItem('hardMode', hardMode.toString());
            location.reload();
         } else {
            hardMode = true;
            localStorage.setItem('hardMode', hardMode.toString());
            location.reload();
         }
      }
   }

   function collisionDetection() {
      let originPoint = controls.getObject().position.clone();
      let collisionDirections = [] // 1 = forward, 2 = backward, 3 = left, 4 = right, 5 = up, 6 = down


      if (isCrouched)
         originPoint.y = originPoint.y - yHeight / 4;
      else
         originPoint.y = originPoint.y - yHeight / 2;

      //set hitbox size
      if (isCrouched)
         var hitbox = new THREE.Box3().setFromCenterAndSize(originPoint, new THREE.Vector3(1.2, yHeight / 2, 1.2));
      else
         var hitbox = new THREE.Box3().setFromCenterAndSize(originPoint, new THREE.Vector3(1.2, yHeight, 1.2));

      let hitboxY = hitbox.max.y - hitbox.min.y;

      for (let i = 0; i < objects.length; i++) {
         let object = objects[i];
         let objectHitbox = new THREE.Box3().setFromObject(object);

         //relative position of the object
         let relativePosX = originPoint.x - object.position.x;
         let relativePosZ = originPoint.z - object.position.z;

         //absolute value of the relative position
         let absRelativePosX = Math.abs(relativePosX);
         let absRelativePosZ = Math.abs(relativePosZ);

         if (hitbox.intersectsBox(objectHitbox)) {
            if ((objectHitbox.min.y > originPoint.y + hitboxY / 2) || (objectHitbox.max.y <= originPoint.y)) {
               if (object.position.y > originPoint.y) {
                  collisionDirections.push([i, 5]);
               }
               if (object.position.y <= originPoint.y) {
                  collisionDirections.push([i, 6]);
               }
            }
            else if ((objectHitbox.min.y < originPoint.y < objectHitbox.max.y)) {
               if (hitbox.max.x > objectHitbox.min.x && hitbox.min.x < objectHitbox.max.x) {
                  if ((absRelativePosX < absRelativePosZ)) {
                     if (object.position.z > originPoint.z) {
                        collisionDirections.push([i, 1]);
                     }
                     if (object.position.z < originPoint.z) {
                        collisionDirections.push([i, 2]);
                     }
                  }
               }
               if (hitbox.max.z > objectHitbox.min.z && hitbox.min.z < objectHitbox.max.z) {
                  if (absRelativePosZ < absRelativePosX) {
                     if (object.position.x > originPoint.x) {
                        collisionDirections.push([i, 3]);
                     }
                     if (object.position.x < originPoint.x) {
                        collisionDirections.push([i, 4]);
                     }
                  }
               }
            }

         }
      }
      return collisionDirections;
   }

   function animate() {
      //if game is paused, stop the animation
      if (gamePaused) {
         pauseResume();
         return;
      }
      if (!hardMode) {
         respawn();
      }

      nextLevel();

      //if player is on top of the first block of the level 1 start timer
      if (level === 1 && timerStart === false) {
         if ((objects[objects.length - 10 - level].position.x - 6.5 < controls.getObject().position.x) && (controls.getObject().position.x < objects[objects.length - 10 - level].position.x + 6.5) && (objects[objects.length - 10 - level].position.z - 6.5 < controls.getObject().position.z) && (controls.getObject().position.z < objects[objects.length - 10 - level].position.z + 6.5) && (objects[objects.length - 10 - level].position.y + 3 < controls.getObject().position.y)) {
            startTimer();
         }
      }



      let collidingObjects = collisionDetection();

      let cameraAngleArray = camera.getWorldDirection(new THREE.Vector3());


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
               //cancel movement if in direction of the object
               if (absVz > 0) {
                  absVz = 0;
                  absV = Math.sqrt(absVx ** 2 + absVz ** 2);
                  velocity.x = absV * Math.sin(alpha);
                  velocity.z = -absV * Math.cos(alpha);
               }


            }
            if (collidingObjects[i][1] === 2) {
               //cancel movement if in direction of the object
               if (absVz < 0) {
                  absVz = 0;
                  absV = Math.sqrt(absVx ** 2 + absVz ** 2);
                  velocity.x = absV * Math.sin(alpha);
                  velocity.z = -absV * Math.cos(alpha);
               }


            }
            if (collidingObjects[i][1] === 3) {
               //cancel movement if in direction of the object
               if (absVx > 0) {
                  absVx = 0;
                  absV = Math.sqrt(absVx ** 2 + absVz ** 2);
                  velocity.x = absV * Math.sin(alpha);
                  velocity.z = -absV * Math.cos(alpha);
               }

            }
            if (collidingObjects[i][1] === 4) {
               //cancel movement if in direction of the object
               if (absVx < 0) {
                  absVx = 0;
                  absV = Math.sqrt(absVx ** 2 + absVz ** 2);
                  velocity.x = absV * Math.sin(alpha);
                  velocity.z = -absV * Math.cos(alpha);
               }
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
      //timer in mm:ss:ds
      let milliseconds = timer % 10;
      let seconds = Math.floor(timer / 10) % 60;
      let minutes = Math.floor(timer / 600) % 60;
      timeElement.textContent = `Time: ${minutes}:${seconds}:${milliseconds}`;

      hardModeElement.textContent = `Hard Mode: ${hardMode}`;

      absV = Math.sqrt(velocity.x ** 2 + velocity.z ** 2);

      alpha = Math.acos(velocity.z / absV);

      theta = Math.acos(cameraAngleArray.z);

      figma = alpha - theta;

      absVx = absV * Math.sin(figma);
      absVz = -absV * Math.cos(figma);

      //round to 2 decimal places
      absVx = Math.round(absVx * 100) / 100;
      absVz = Math.round(absVz * 100) / 100;

      //skybox position equals the position of the player
      skybox.position.copy(controls.getObject().position);


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

