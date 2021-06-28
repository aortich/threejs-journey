//Scene
const scene = new THREE.Scene()

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1) //width, height, depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) //this is an anonymous object and not a closure lol
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


//Viewport size
const sizes = {
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //fov, aspect ratio
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

//render scene
renderer.render(scene, camera)