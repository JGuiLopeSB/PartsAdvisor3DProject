/*Parts Advisor 3d by João Guilherme Lopes Büttembender

CPF: 039285.320-57

Cell: 55 53 999715415

E-mail: guibiittembender@hotmail.com
*/
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const main_canvas = document.getElementById("main_canvas");
const n = 4
let cwidth = 2100 / n;
let cheight = 1595 / n;
main_canvas.setAttribute("width", cwidth + "px" );
main_canvas.setAttribute("height", cheight + "px" );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, main_canvas.clientWidth / main_canvas.clientHeight, 0.1, 1000);
const direction = new THREE.Vector3(60,20,0);
var hemiLight = new THREE.PointLight( 0xFFFFFF, 50);
  hemiLight.position.set(0,0,-5);
  scene.add(hemiLight);
  var light = new THREE.DirectionalLight( 'white', 1 );
  scene.add( light );
  const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft grey light
  scene.add(ambientLight);
    
  const renderer = new THREE.WebGLRenderer({ antialias: true , canvas: main_canvas,alpha: true});
  renderer.setSize(main_canvas.clientWidth , main_canvas.clientHeight);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.20; //suavizar movimento objeto
  controls.enablePan = true;
  controls.minDistance = 0.1; //minimo distancia camera
  controls.maxDistance = 100; //maximo distancia camera
  controls.maxPolarAngle = Infinity; //maximo posição pra baixo
  controls.autoRotate = false;
  renderer.setClearColor(0xd6d4d4);//cor do fundo total
  
  document.getElementById("max").addEventListener("click", function(){
  document.getElementById("one").style.top = 1000 + 'px';
  document.getElementById("sex").style.top = 1000 + 'px';

  document.getElementById("min").style.left = 5 + 'px';
  document.getElementById("max").style.left = 5 + 'px';
  document.getElementById("min").style.top = 560 + 'px';
  document.getElementById("max").style.top = 560 + 'px';

  document.getElementById("main_canvas").style.left = 0 + 'px';
  document.getElementById("main_canvas").style.left = 0 + 'px';
  document.getElementById("main_canvas").style.top = 0 + 'px';
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth , window.innerHeight);});

  document.getElementById("min").addEventListener("click", function(){  

  document.getElementById("one").style.top = 490 + 'px';
  document.getElementById("sex").style.top = 490 + 'px';
   
  document.getElementById("min").style.top = 490 + 'px';
  document.getElementById("max").style.top = 490 + 'px';

  document.getElementById("main_canvas").style.left = 30 + 'px';
  document.getElementById("main_canvas").style.top = 109 + 'px';
  document.getElementById("main_canvas").style.width = 525 + 'px';
  document.getElementById("main_canvas").style.height = 398 + 'px';

  const main_canvas2 = document.getElementById("main_canvas");

  camera.aspect = main_canvas2.clientWidth / main_canvas2.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(main_canvas2.clientWidth , main_canvas2.clientHeight);});
    
  const loader = new GLTFLoader();
    loader.load('public/parts/tratorpronto.gltf', function(gltf){
      console.log('loading model');
      const mesh1 = gltf.scene;
      const checkbox2 = document.getElementById('check1');
    
      mesh1.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh1.scale.setScalar(0.005);
      mesh1.position.set(0, -0.5, 0);
      
      scene.add(mesh1);
      
      document.getElementById("check1").addEventListener("click", function(){
      
        mesh1.visible = !mesh1.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox2.checked = false;
        
        mesh1.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox2.checked = true;
        mesh1.visible = true;});
    
      
  });
  const loader2 = new GLTFLoader();
    loader2.load('public/parts/vidros.gltf', function(gltf){
      console.log('loading model');
      const mesh2 = gltf.scene;
      const checkbox = document.getElementById('check2');
    
      mesh2.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh2.scale.setScalar(0.005);
      mesh2.position.set(0, -0.5, 0);
    
      scene.add(mesh2);
      document.getElementById("check2").addEventListener("click", function(){
        
        
        mesh2.visible = !mesh2.visible;
        });
      document.getElementById("one").addEventListener("click", function(){ 
        
        checkbox.checked = false;
        mesh2.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox.checked = true;
        mesh2.visible = true;});
    
      
  });
  const loader3 = new GLTFLoader();
    loader3.load('public/parts/filtro.gltf', function(gltf){
      console.log('loading model');
      const mesh3 = gltf.scene;
      const checkbox3 = document.getElementById('check3');
    
      mesh3.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh3.scale.setScalar(0.005);
      mesh3.position.set(0, -0.5, 0);
    
      scene.add(mesh3);
      document.getElementById("check3").addEventListener("click", function(){
    
        mesh3.visible = !mesh3.visible;
        });
      document.getElementById("one").addEventListener("click", function(){ 
        
        checkbox3.checked = false;
        mesh3.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox3.checked = true;
        mesh3.visible = true;});
      
  });
  const loader4 = new GLTFLoader();
    loader4.load('public/parts/bracoapoio.gltf', function(gltf){
      console.log('loading model');
      const mesh4 = gltf.scene;
      const checkbox4 = document.getElementById('check4');
    
      mesh4.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh4.scale.setScalar(0.005);
      mesh4.position.set(0, -0.5, 0);
    
      scene.add(mesh4);
      document.getElementById("check4").addEventListener("click", function(){
    
        mesh4.visible = !mesh4.visible;
        });
      document.getElementById("one").addEventListener("click", function(){ 
        
        checkbox4.checked = false;
        mesh4.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox4.checked = true;
        mesh4.visible = true;});
      
    });

    const loader5 = new GLTFLoader();
    loader5.load('public/parts/descarga.gltf', function(gltf){
      console.log('loading model');
      const mesh5 = gltf.scene;
      const checkbox5 = document.getElementById('check5');
    
      mesh5.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh5.scale.setScalar(0.005);
      mesh5.position.set(0, -0.5, 0);
      
      scene.add(mesh5);
      
      document.getElementById("check5").addEventListener("click", function(){
      
        mesh5.visible = !mesh5.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox5.checked = false;
        
        mesh5.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox5.checked = true;
        mesh5.visible = true;});
});
const loader6 = new GLTFLoader();
    loader6.load('public/parts/gps.gltf', function(gltf){
      console.log('loading model');
      const mesh6 = gltf.scene;
      const checkbox6 = document.getElementById('check6');
    
      mesh6.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh6.scale.setScalar(0.005);
      mesh6.position.set(0, -0.5, 0);
      
      scene.add(mesh6);
      
      document.getElementById("check6").addEventListener("click", function(){
      
        mesh6.visible = !mesh6.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox6.checked = false;
        
        mesh6.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox6.checked = true;
        mesh6.visible = true;});
});
const loader7 = new GLTFLoader();
    loader7.load('public/parts/reservatoriooleo.gltf', function(gltf){
      console.log('loading model');
      const mesh7 = gltf.scene;
      const checkbox7 = document.getElementById('check7');
    
      mesh7.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh7.scale.setScalar(0.005);
      mesh7.position.set(0, -0.5, 0);
      
      scene.add(mesh7);
      
      document.getElementById("check7").addEventListener("click", function(){
      
        mesh7.visible = !mesh7.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox7.checked = false;
        
        mesh7.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox7.checked = true;
        mesh7.visible = true;});
});
const loader8 = new GLTFLoader();
    loader8.load('public/parts/bombaoleo.gltf', function(gltf){
      console.log('loading model');
      const mesh8 = gltf.scene;
      const checkbox8 = document.getElementById('check8');
    
      mesh8.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh8.scale.setScalar(0.005);
      mesh8.position.set(0, -0.5, 0);
      
      scene.add(mesh8);
      
      document.getElementById("check8").addEventListener("click", function(){
      
        mesh8.visible = !mesh8.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox8.checked = false;
        
        mesh8.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox8.checked = true;
        mesh8.visible = true;});
});
const loader9 = new GLTFLoader();
    loader9.load('public/parts/braco.gltf', function(gltf){
      console.log('loading model');
      const mesh9 = gltf.scene;
      const checkbox9 = document.getElementById('check9');
    
      mesh9.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh9.scale.setScalar(0.005);
      mesh9.position.set(0, -0.5, 0);
      
      scene.add(mesh9);
      
      document.getElementById("check9").addEventListener("click", function(){
      
        mesh9.visible = !mesh9.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox9.checked = false;
        
        mesh9.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox9.checked = true;
        mesh9.visible = true;});
});
const loader10 = new GLTFLoader();
    loader10.load('public/parts/bomba.gltf', function(gltf){
      console.log('loading model');
      const mesh10 = gltf.scene;
      const checkbox10 = document.getElementById('check10');
    
      mesh10.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh10.scale.setScalar(0.005);
      mesh10.position.set(0, -0.5, 0);
      
      scene.add(mesh10);
      
      document.getElementById("check10").addEventListener("click", function(){
      
        mesh10.visible = !mesh10.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox10.checked = false;
        
        mesh10.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox10.checked = true;
        mesh10.visible = true;});
});
const loader11 = new GLTFLoader();
    loader11.load('public/parts/caixaferramenta.gltf', function(gltf){
      console.log('loading model');
      const mesh11 = gltf.scene;
      const checkbox11 = document.getElementById('check11');
    
      mesh11.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh11.scale.setScalar(0.005);
      mesh11.position.set(0, -0.5, 0);
      
      scene.add(mesh11);
      
      document.getElementById("check11").addEventListener("click", function(){
      
        mesh11.visible = !mesh11.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox11.checked = false;
        
        mesh11.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox11.checked = true;
        mesh11.visible = true;});
});
const loader12 = new GLTFLoader();
    loader12.load('public/parts/arranque.gltf', function(gltf){
      console.log('loading model');
      const mesh12 = gltf.scene;
      const checkbox12 = document.getElementById('check12');
    
      mesh12.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh12.scale.setScalar(0.005);
      mesh12.position.set(0, -0.5, 0);
      
      scene.add(mesh12);
      
      document.getElementById("check12").addEventListener("click", function(){
      
        mesh12.visible = !mesh12.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox12.checked = false;
        
        mesh12.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox12.checked = true;
        mesh12.visible = true;});
});
const loader13 = new GLTFLoader();
    loader13.load('public/parts/volante.gltf', function(gltf){
      console.log('loading model');
      const mesh13 = gltf.scene;
      const checkbox13 = document.getElementById('check13');
    
      mesh13.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh13.scale.setScalar(0.005);
      mesh13.position.set(0, -0.5, 0);
      
      scene.add(mesh13);
      
      document.getElementById("check13").addEventListener("click", function(){
      
        mesh13.visible = !mesh13.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox13.checked = false;
        
        mesh13.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox13.checked = true;
        mesh13.visible = true;});
});
const loader14 = new GLTFLoader();
    loader14.load('public/parts/banco.gltf', function(gltf){
      console.log('loading model');
      const mesh14 = gltf.scene;
      const checkbox14 = document.getElementById('check14');
    
      mesh14.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh14.scale.setScalar(0.005);
      mesh14.position.set(0, -0.5, 0);
      
      scene.add(mesh14);
      
      document.getElementById("check14").addEventListener("click", function(){
      
        mesh14.visible = !mesh14.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox14.checked = false;
        
        mesh14.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox14.checked = true;
        mesh14.visible = true;});
});
const loader15 = new GLTFLoader();
    loader15.load('public/parts/botaoluz.gltf', function(gltf){
      console.log('loading model');
      const mesh15 = gltf.scene;
      const checkbox15 = document.getElementById('check15');
    
      mesh15.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh15.scale.setScalar(0.005);
      mesh15.position.set(0, -0.5, 0);
      
      scene.add(mesh15);
      
      document.getElementById("check15").addEventListener("click", function(){
      
        mesh15.visible = !mesh15.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox15.checked = false;
        
        mesh15.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox15.checked = true;
        mesh15.visible = true;});
});
const loader16 = new GLTFLoader();
    loader16.load('public/parts/chaveseta.gltf', function(gltf){
      console.log('loading model');
      const mesh16 = gltf.scene;
      const checkbox16 = document.getElementById('check16');
    
      mesh16.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh16.scale.setScalar(0.005);
      mesh16.position.set(0, -0.5, 0);
      
      scene.add(mesh16);
      
      document.getElementById("check16").addEventListener("click", function(){
      
        mesh16.visible = !mesh16.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox16.checked = false;
        
        mesh16.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox16.checked = true;
        mesh16.visible = true;});
});
const loader17 = new GLTFLoader();
    loader17.load('public/parts/maleta.gltf', function(gltf){
      console.log('loading model');
      const mesh17 = gltf.scene;
      const checkbox17 = document.getElementById('check17');
    
      mesh17.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh17.scale.setScalar(0.005);
      mesh17.position.set(0, -0.5, 0);
      
      scene.add(mesh17);
      
      document.getElementById("check17").addEventListener("click", function(){
      
        mesh17.visible = !mesh17.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox17.checked = false;
        
        mesh17.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox17.checked = true;
        mesh17.visible = true;});
});
const loader18 = new GLTFLoader();
    loader18.load('public/parts/maleta.gltf', function(gltf){
      console.log('loading model');
      const mesh18 = gltf.scene;
      const checkbox18 = document.getElementById('check18');
    
      mesh18.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh18.scale.setScalar(0.005);
      mesh18.position.set(0, -0.5, 0);
      
      scene.add(mesh18);
      
      document.getElementById("check18").addEventListener("click", function(){
      
        mesh18.visible = !mesh18.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox18.checked = false;
        
        mesh18.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox18.checked = true;
        mesh18.visible = true;});
});
const loader19 = new GLTFLoader();
    loader19.load('public/parts/maleta.gltf', function(gltf){
      console.log('loading model');
      const mesh19 = gltf.scene;
      const checkbox19 = document.getElementById('check19');
    
      mesh19.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh19.scale.setScalar(0.005);
      mesh19.position.set(0, -0.5, 0);
      
      scene.add(mesh19);
      
      document.getElementById("check19").addEventListener("click", function(){
      
        mesh19.visible = !mesh19.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox19.checked = false;
        
        mesh19.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox19.checked = true;
        mesh19.visible = true;});
});
const loader20 = new GLTFLoader();
    loader20.load('public/parts/maleta.gltf', function(gltf){
      console.log('loading model');
      const mesh20 = gltf.scene;
      const checkbox20 = document.getElementById('check20');
    
      mesh20.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh20.scale.setScalar(0.005);
      mesh20.position.set(0, -0.5, 0);
      
      scene.add(mesh20);
      
      document.getElementById("check20").addEventListener("click", function(){
      
        mesh20.visible = !mesh20.visible;
        });
      document.getElementById("one").addEventListener("click", function(){  
        checkbox20.checked = false;
        
        mesh20.visible = false;});
      document.getElementById("sex").addEventListener("click", function(){  
        checkbox20.checked = true;
        mesh20.visible = true;});
});
  camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

/*Parts Advisor 3d by João Guilherme Lopes Büttembender

CPF: 039285.320-57

Cell: 55 53 999715415

E-mail: guibiittembender@hotmail.com
*/
 
