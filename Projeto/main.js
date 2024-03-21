import * as THREE from "three";
import { PointerLockControls } from "https://threejs.org/examples/jsm/controls/PointerLockControls.js";
import { initControls } from 'controls.js';
import { initMovement } from 'movement.js';

let objects = [];

function init() {
 var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
 var yHeight = 6;
 camera.position.set(0, yHeight, 15);
 camera.lookAt(0, yHeight, 0);

 let scene = new THREE.Scene();
 let light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
 light.position.set(0.5, 1, 0.75);
 scene.add(light);

 let renderer = new THREE.WebGLRenderer();
 document.getElementById("WebGL-output").appendChild(renderer.domElement);

 let controls = initControls(camera, renderer.domElement);
 initMovement(controls);

 let geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
 let material = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: true});
 let plane = new THREE.Mesh(geometry, material);
 plane.rotation.x = -Math.PI / 2;
 scene.add(plane);
 objects.push(plane);

 renderer.setClearColor(0xffffff);
 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize(window.innerWidth, window.innerHeight);

 function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
 }

 animate();
}

init();

