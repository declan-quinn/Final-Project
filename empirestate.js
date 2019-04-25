let camera, scene, renderer, controls;
let geometry, material, mesh;

const container = document.getElementById('container');

init();
animate();

function init() {
	scene = new THREE.Scene();
	let width = window.innerWidth;
	let height = window.innerHeight;

/* Field of view angle, aspect ratio, near clipping plane, far clipping plane */
	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
	camera.position.z = 1000; /* back out a bit on the z axis */
	camera.position.y = 500;

	/*object.property(method)*/
	scene.add(camera);

	let light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1); //location x, y, z
	scene.add(light);

	let pointLight = new THREE.PointLight(0xffff00, 0.5, 1000); //color, intensity, distance
	pointLight.position.set(-400, 400, 400);
	scene.add(pointLight);

	// geometry = new THREE.BoxGeometry(200, 200, 200);
	// geometry = new THREE.OctahedronGeometry(200, 0); //radius, aditional vertices
	geometry = new THREE.BoxGeometry(70, 300, 70);
	material = new THREE.MeshStandardMaterial( {color: 0xD3D3D3});

	mesh = new THREE.Mesh(geometry, material);
	mesh.position.y = 120;
	scene.add(mesh);

	bottom = new THREE.BoxGeometry(100, 100, 100);
	bottomMaterial = new THREE.MeshStandardMaterial( {color: 0xD3D3D3});

	mesh2 = new THREE.Mesh(bottom, bottomMaterial);
	mesh2.position.y = 0;
	scene.add(mesh2);

	geometry2 = new THREE.BoxGeometry(50, 50, 50);
	material2 = new THREE.MeshStandardMaterial( {color: 0xD3D3D3});

	meshTop = new THREE.Mesh(geometry2, material2);
	meshTop.position.y = 270;
	scene.add(meshTop);

	geometry3 = new THREE.BoxGeometry(20, 90, 20);
	material3 = new THREE.MeshStandardMaterial( {color: 0xD3D3D3});

	meshSpire = new THREE.Mesh(geometry3, material3);
	meshSpire.position.y = 280;
	scene.add(meshSpire);

	geometry4 = new THREE.BoxGeometry(5, 140, 5);
	material4 = new THREE.MeshStandardMaterial( {color: 0x0000ff});

	meshPoint = new THREE.Mesh(geometry4, material4);
	meshPoint.position.y = 310;
	scene.add(meshPoint);






	let planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	let planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
	let plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = Math.PI / 2; //rotate
	scene.add(plane); 

	renderer = new THREE.WebGLRenderer( {alpha: 1, antialias: true} );
	renderer.setSize(width, height);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	document.body.appendChild(renderer.domElement);

	renderer.render(scene, camera);
}

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.00;
	mesh.rotation.y += 0.01;
	mesh2.rotation.y += 0.01;
	meshTop.rotation.y += 0.01;
	meshSpire.rotation.y += 0.01;
	meshPoint.rotation.y += 0.01;


	renderer.render(scene, camera);
	
}