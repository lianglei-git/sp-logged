function threejs() {
	this.shapeX = 0.5;
	this.shapeY = 100;
	this.shapeZ = 100;
	this.shapeColor = 0xffffff;
}

threejs.prototype.init = function init() {
	this.scene = new THREE.Scene();
	this.camera();
	this.renderer();
	this.light();
	this.floor();

	this.initShape();

	this.render();
};

threejs.prototype.camera = function camera() {
	this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
	this.camera.position.y = 500;
	this.camera.position.z = 500;
	this.camera.position.x = 500;
	this.camera.updateProjectionMatrix();
	this.camera.lookAt(this.scene.position);
};

threejs.prototype.renderer = function renderer() {
	this.renderer = new THREE.WebGLRenderer({antialias: true});
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	this.renderer.setClearColor( 0xF9F8ED , 1 );
	this.renderer.shadowMapEnabled = true;
	this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
	document.body.appendChild(this.renderer.domElement);
};

threejs.prototype.light = function light() {
	var shadowlight = new THREE.DirectionalLight( 0xffffff, 1.8 );
	shadowlight.position.set( 0, 350, 0 );
	shadowlight.castShadow = true;
	shadowlight.shadowDarkness = 0.1;
	this.scene.add(shadowlight);

	var light = new THREE.DirectionalLight( 0xffffff, 1.8 );
	light.position.set( 60, 100, 20 );
	this.scene.add(light);
  
  var backLight = new THREE.DirectionalLight( 0xffffff, 1 );
	backLight.position.set( -40, 100, 20 );
	this.scene.add(backLight);
};

threejs.prototype.floor = function floor() {
 	var geometry = new THREE.PlaneGeometry( 500, 500, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0xF9F8ED } );
	this.floor = new THREE.Mesh( geometry, material );
	this.floor.material.side = THREE.DoubleSide;
	this.floor.position.y =-100;
	this.floor.position.z =-100;
	this.floor.rotation.x = 90*Math.PI/180;
	this.floor.rotation.y = 0;
	this.floor.rotation.z = 0;
	this.floor.doubleSided = true;
    this.floor.receiveShadow = true;
	this.scene.add(this.floor);
};


threejs.prototype.initShape = function initShape() {
	this.cube1 = new THREE.Group();
	this.cube2 = new THREE.Group();

	this.scene.add(this.cube1);
	this.scene.add(this.cube2);

	this.cube1.position.y=10;
	this.cube2.position.y=250;

	
	this.geometry = new THREE.BoxGeometry( 25, 50, 50 );
	this.geometryQuart = new THREE.BoxGeometry( 25, 25, 25 );
	this.material = new THREE.MeshLambertMaterial({color : 0x202020, shading: THREE.FlatShading});
	
	this.cube11 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube11.castShadow = true;
	this.cube11.receiveShadow = false;
	this.cube11.position.y= 0;
	this.cube11.position.z= 0;
	this.cube11.position.x= 0;

	this.cube12 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube12.castShadow = true;
	this.cube12.receiveShadow = false;
	this.cube12.position.y= 0;
	this.cube12.position.z= 0;
	this.cube12.position.x= 0;

	this.cube13 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube13.castShadow = true;
	this.cube13.receiveShadow = false;
	this.cube13.position.y= 0;
	this.cube13.position.z= 0;
	this.cube13.position.x= 0;

	this.cube14 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube14.castShadow = true;
	this.cube14.receiveShadow = false;
	this.cube14.position.y= 0;
	this.cube14.position.z= 0;
	this.cube14.position.x= 0;

	this.cube21 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube21.castShadow = true;
	this.cube21.receiveShadow = false;
	this.cube21.position.y= 0;
	this.cube21.position.z= 0;
	this.cube21.position.x= 0;

	this.cube22 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube22.castShadow = true;
	this.cube22.receiveShadow = false;
	this.cube22.position.y= 0;
	this.cube22.position.z= 0;
	this.cube22.position.x= 0;

	this.cube23 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube23.castShadow = true;
	this.cube23.receiveShadow = false;
	this.cube23.position.y= 0;
	this.cube23.position.z= 0;
	this.cube23.position.x= 0;

	this.cube24 = new THREE.Mesh(this.geometryQuart, this.material);
	this.cube24.castShadow = true;
	this.cube24.receiveShadow = false;
	this.cube24.position.y= 0;
	this.cube24.position.z= 0;
	this.cube24.position.x= 0;

	this.cube1.add(this.cube11);		
	this.cube1.add(this.cube12);		
	this.cube1.add(this.cube13);		
	this.cube1.add(this.cube14);	

	this.cube2.add(this.cube21);		
	this.cube2.add(this.cube22);		
	this.cube2.add(this.cube23);		
	this.cube2.add(this.cube24);	

	var tl = new TimelineMax({repeat:-1});

	tl.to(this.cube11.position,0.5, {z:-25});
	tl.to(this.cube11.scale,0.5, {x:3,y:3},"-=0.5");

	tl.to(this.cube12.position,0.5, {x:25},"-=0.5");
	tl.to(this.cube12.scale,0.5, {z:3,y:3},"-=0.5");

	tl.to(this.cube13.position,0.5, {z:25},"-=0.5");
	tl.to(this.cube13.scale,0.5, {x:3,y:3},"-=0.5");

	tl.to(this.cube14.position,0.5, {x:-25},"-=0.5");
	tl.to(this.cube14.scale,0.5, {z:3,y:3},"-=0.5");

	tl.to(this.cube1.position,1, {y:250,ease:Power2.easeInOut});

	tl.to(this.cube11.position,0.5, {z:-0});
	tl.to(this.cube11.scale,0.5, {x:1,y:1},"-=0.5");

	tl.to(this.cube12.position,0.5, {x:0},"-=0.5");
	tl.to(this.cube12.scale,0.5, {z:1,y:1},"-=0.5");

	tl.to(this.cube13.position,0.5, {z:0},"-=0.5");
	tl.to(this.cube13.scale,0.5, {x:1,y:1},"-=0.5");

	tl.to(this.cube14.position,0.5, {x:-0},"-=0.5");
	tl.to(this.cube14.scale,0.5, {z:1,y:1},"-=0.5");

	tl.to(this.cube1.position,1, {y:10,ease:Power2.easeInOut});

	var tl2 = new TimelineMax({repeat:-1,delay:0.5});

	tl2.to(this.cube2.position,1, {y:10,ease:Power2.easeInOut});

	tl2.to(this.cube21.position,0.5, {z:-25});
	tl2.to(this.cube21.scale,0.5, {x:3,y:3},"-=0.5");

	tl2.to(this.cube22.position,0.5, {x:25},"-=0.5");
	tl2.to(this.cube22.scale,0.5, {z:3,y:3},"-=0.5");

	tl2.to(this.cube23.position,0.5, {z:25},"-=0.5");
	tl2.to(this.cube23.scale,0.5, {x:3,y:3},"-=0.5");

	tl2.to(this.cube24.position,0.5, {x:-25},"-=0.5");
	tl2.to(this.cube24.scale,0.5, {z:3,y:3},"-=0.5");

	tl2.to(this.cube2.position,1, {y:250,ease:Power2.easeInOut});

	tl2.to(this.cube21.position,0.5, {z:-0});
	tl2.to(this.cube21.scale,0.5, {x:1,y:1},"-=0.5");

	tl2.to(this.cube22.position,0.5, {x:0},"-=0.5");
	tl2.to(this.cube22.scale,0.5, {z:1,y:1},"-=0.5");

	tl2.to(this.cube23.position,0.5, {z:0},"-=0.5");
	tl2.to(this.cube23.scale,0.5, {x:1,y:1},"-=0.5");

	tl2.to(this.cube24.position,0.5, {x:-0},"-=0.5");
	tl2.to(this.cube24.scale,0.5, {z:1,y:1},"-=0.5");





};

threejs.prototype.render = function render() {
	requestAnimationFrame(this.render.bind(this));
	this.renderer.render(this.scene, this.camera);
};

window.onload = () => {
  var shape = new threejs();
shape.init();
}



