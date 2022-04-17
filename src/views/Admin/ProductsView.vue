<template>
  <div class="title">
    <h1>This is Admin</h1>
    <div class="body">
      {{ product.name }}
    </div>
  </div>
</template>
  
<script>
import * as THREE from "three";
//Stats是fps的图
// import Stats from '../assets/three/stats.min.js';
import { OrbitControls } from "../../assets/three/OrbitControls.js";
import { VRMLLoader } from "../../assets/three/VRMLLoader.js";
//右上角control图
// import { GUI } from '../assets/three/lil-gui.module.min.js';

export default {
  name: "ProductsView",
  data() {
    return {
      params: {
        asset: "house",
      },
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      stats: null,
      loader: null,
      vrmlScene: null,
      show:false
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  unmounted() {
    console.log('213');
    document.body.removeChild(this.renderer.domElement);
  },
  computed: {
    product() {
      return this.$store.getters.allProducts[0];
    },
  },
  methods: {
    init() {
      var that = this;
      this.camera = new THREE.OrthographicCamera(-250, 250, -250, 250, 1, 1e10);
      this.camera.position.set(0, 1000, 0);
      this.scene = new THREE.Scene();
      // this.scene.background = new THREE.Color( 0xf0f0f0 );
      this.scene.background = new THREE.TextureLoader().load("1.png");
      this.scene.add(this.camera);

      // light
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
      this.scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
      dirLight.position.set(200, 200, 200);
      this.scene.add(dirLight);

      this.loader = new VRMLLoader();
      this.loadAsset(this.params.asset);

      // renderer
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      // controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.minDistance = 200;
      this.controls.maxDistance = 1000;
      // this.controls.enableDamping = true;

      // 顶部的fps图
      // this.stats = new Stats();
      // document.body.appendChild(this.stats.dom);

      //
      window.addEventListener("resize", this.onWindowResize);

      // const gui = new GUI();
      // gui.add(this.params, 'asset', this.assets).onChange(function (value) {
      // 	if (that.vrmlScene) {
      // 		that.vrmlScene.traverse(function (object) {
      // 			if (object.material) object.material.dispose();
      // 			if (object.material && object.material.map) object.material.map.dispose();
      // 			if (object.geometry) object.geometry.dispose();

      // 		});
      // 		scene.remove(that.vrmlScene);
      // 	}
      // 	that.loadAsset(value);
      // });
    },

    loadAsset(asset) {
      //注意这里that
      var that = this;
      //solidworks导出xrml时，选项--导出为xrml97单位mm。另外提高品质会导出utf8：选项--文档属性--图像品质，不然导出时ascii，
      //把21.wrl文件改名成21，这样别人看不到你的技术栈。
      this.loader.load("21", function (object) {
        that.vrmlScene = object;
        that.scene.add(object);
        that.controls.reset();
      });
    },

    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update(); // to support damping
      this.renderer.render(this.scene, this.camera);
      // this.stats.update();
    },
    changeView(s) {
      console.log(
        "1",
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z
      );
      if (s == "x") {
        this.camera.position.set(-this.camera.position.x || 1000, 0, 0);
      }
      if (s == "y") {
        this.camera.position.set(0, -this.camera.position.y || 1000, 0);
      }
      if (s == "z") {
        this.camera.position.set(0, 0, -this.camera.position.z || 1000);
      }
      console.log(
        this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z
      );
    },
  },
};
</script>