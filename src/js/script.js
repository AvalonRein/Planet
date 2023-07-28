import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import earthTexture from '../img/earth.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import marsTexture from '../img/mars.jpg';
import mercuryTexture from '../img/mercury.jpg';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import saturnTexture from '../img/saturn.jpg';
import sunTexture from '../img/sun.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import uranusTexture from '../img/uranus.jpg';
import venusTexture from '../img/venus.jpg';


const renderer = new THREE.WebGL1Renderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);

camera.position.set(-90, 140, 140);
orbit.update();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// const planeGeometry = new THREE.PlaneGeometry(30, 30);
// const planeMasterial = new THREE.MeshStandardMaterial({
//     color: 0xFFFFFF,
//     side: THREE.DoubleSide
// });
// const plane = new THREE.Mesh(planeGeometry, planeMasterial);
// scene.add(plane);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;

// const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

// const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
// const sphereMaterial = new THREE.MeshStandardMaterial({
//     color: 0x0000FF,
//     wireframe: false
// });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(sphere);

// sphere.position.set(-10, 10, 0);
// sphere.castShadow = true;

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// scene.add(directionalLight);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.bottom = -12;

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

// const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper);

// const spotLight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotLight);
// spotLight.position.set(-100, 100, 0);
// spotLight.castShadow = true;
// spotLight.angle = 0.2;

// const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

// scene.fog = new THREE.Fog(0xFFFFFF, 0, 200);
// scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01);

// renderer.setClearColor(0xFFEA00);

// scene.background = textureLoader.load(star);
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

// const box2Geometry = new THREE.BoxGeometry(4, 4, 4);
// const box2Material = new THREE.MeshBasicMaterial({
//     // color: 0x00FF00,
//     // map: textureLoader.load(galaxy)
// });
// const box2MultiMaterial = [
//     new THREE.MeshBasicMaterial({ map: textureLoader.load(star)}),
//     new THREE.MeshBasicMaterial({ map: textureLoader.load(star)}),
//     new THREE.MeshBasicMaterial({ map: textureLoader.load(galaxy)}),
//     new THREE.MeshBasicMaterial({ map: textureLoader.load(star)}),
//     new THREE.MeshBasicMaterial({ map: textureLoader.load(galaxy)}),
//     new THREE.MeshBasicMaterial({ map: textureLoader.load(star)}),
// ]
// const box2 = new THREE.Mesh(box2Geometry, box2MultiMaterial);
// scene.add(box2);
// box2.position.set(0, 15, 10);
// box2.material.map = textureLoader.load(galaxy);

// const plane2Geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
// const plane2Material = new THREE.MeshBasicMaterial({
//     color: 0xFFFFFF, 
//     wireframe: true
// });
// const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
// scene.add(plane2);
// plane2.position.set(10, 10, 15); 

// plane2.geometry.attributes.position.array[0] = 10 * Math.random();
// plane2.geometry.attributes.position.array[1] = 10 * Math.random();
// plane2.geometry.attributes.position.array[2] = 10 * Math.random();
// const lastPointZ = plane2.geometry.attributes.position.array.length - 1;
// plane2.geometry.attributes.position.array[lastPointZ] = 10 * Math.random();

// const sphere2Geometry = new THREE.SphereGeometry(4);

// const vShader = `
//     void main() {
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
// `;

// const fShader = `
//     void main() {
//         gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0);
//     }
// `

// const sphere2Material = new THREE.ShaderMaterial({
//     vertexColors: vShader,
//     fragmentShader: fShader
// });
// const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
// scene.add(sphere2);
// sphere2.position.set(-5, 10, 10);

// const gui = new dat.GUI();

// const options = {
//     sphereColor: '#ffea00',
//     wireframe: false,
//     speed: 0.01,
//     angle: 0.2,
//     penumbra: 0,
//     intensity: 1
// };

// gui.addColor(options, 'sphereColor').onChange(function(e){
//     sphere.material.color.set(e);
// });

// gui.add(options, 'wireframe').onChange(function(e){
//     sphere.material.wireframe = e;
// });

// gui.add(options, 'speed', 0, 0.1);

// gui.add(options, 'angle', 0, 1);
// gui.add(options, 'penumbra', 0, 1);
// gui.add(options, 'intensity', 0, 1);

// let step = 0;
// let speed = 0.01;

// const mousePosition = new THREE.Vector2();

// window.addEventListener('mousemove', function(e) {
//     mousePosition.x = (e.clientX / this.window.innerWidth) * 2 - 1;
//     mousePosition,y = (e.clientY / this.window.innerHeight) * 2 + 1;
// });

// const rayCaster = new THREE.Raycaster();

// const sphereId = sphere.id;
// box2.name = 'theBox';

const textureLoader = new THREE.TextureLoader();

const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
})
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

function createPlanete(size, texture, position, ring){
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    })
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);
    if(ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32);
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        })
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(obj);
    mesh.position.x = position;
    return {mesh, obj}
}

const mercury = createPlanete(3.2, mercuryTexture, 28);
const venus = createPlanete(5.8, venusTexture, 44);
const earth = createPlanete(6, earthTexture, 62);
const mars = createPlanete(4, marsTexture, 78);
const jupiter = createPlanete(12, jupiterTexture, 100);
const saturn = createPlanete(10, saturnTexture, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture
});
const uranus = createPlanete(7, uranusTexture, 176, {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture
});
const neptune = createPlanete(7, neptuneTexture, 200);
const pluto = createPlanete(2.8, plutoTexture, 216);

const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
scene.add(pointLight);

function animate(time) {
    // box.rotation.x = time / 1000;
    // box.rotation.y = time / 1000;

    // step += options.speed;
    // sphere.position.y = 10 * Math.abs(Math.sin(step));
    
    // spotLight.angle = options.angle;
    // spotLight.penumbra = options.penumbra;
    // spotLight.intensity = options.intensity;
    // sLightHelper.update();

    // rayCaster.setFromCamera(mousePosition, camera);
    // const intersects = rayCaster.intersectObjects(scene.children);
    // console.log(intersects);

    // for(let i = 0; i < intersects.length; i++) {
    //     if(intersects[i].object.id === sphereId)
    //     intersects[i].object.material.color.set(0xFF0000);

    //     if(intersects[i].object.name === 'theBox') {
    //         intersects[i].object.rotation.x = time / 1000;
    //         intersects[i].object.rotation.y = time / 1000;
    //     }
    // }

    // plane2.geometry.attributes.position.array[0] = 10 * Math.random();
    // plane2.geometry.attributes.position.array[1] = 10 * Math.random();
    // plane2.geometry.attributes.position.array[2] = 10 * Math.random();
    // plane2.geometry.attributes.position.array[lastPointZ] = 10 * Math.random();
    // plane2.geometry.attributes.position.needsUpdate = true;

    sun.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    mercury.obj.rotateY(0.01);
    venus.mesh.rotateY(0.002);
    venus.obj.rotateY(0.015);
    earth.mesh.rotateY(0.02);
    earth.obj.rotateY(0.01);
    mars.mesh.rotateY(0.018);
    mars.obj.rotateY(0.008);
    jupiter.mesh.rotateY(0.04);
    jupiter.obj.rotateY(0.002);
    saturn.mesh.rotateY(0.038);
    saturn.obj.rotateY(0.0009);
    uranus.mesh.rotateY(0.03);
    uranus.obj.rotateY(0.0004);
    neptune.mesh.rotateY(0.032);
    neptune.obj.rotateY(0.0001);
    pluto.mesh.rotateY(0.008);
    pluto.obj.rotateY(0.00007)
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = this.window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
})

