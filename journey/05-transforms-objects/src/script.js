import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
/*const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

//individually change position coordinates
mesh.position.x = 1
mesh.position.y = -0.6
mesh.position.z = -1

//change position all at once
mesh.position.set(1, -0.6, -1) //x, y, z
mesh.position.normalize()

scene.add(mesh)

console.log(mesh.position)
console.log(mesh.position.length())

//Scaling
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5 

mesh.scale.set(2, 0.5, 0.5)

//Euler Rotation
mesh.rotation.reorder('YXZ') //Since I'm a stupid himbo, I may need to retry the axis order in order to avoid gimbal locks
mesh.rotation.y = Math.PI * 0.5
mesh.rotation.x = 0.5
mesh.rotation.z = Math.PI * 0.5*/

//Axes helper, a cool ruler helper!!
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00})
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff})
)

group.add(cube1)

cube2.position.x = -2
group.add(cube2)

cube3.position.x = 2
group.add(cube3)

group.scale.y = 2

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)
//console.log(mesh.position.distanceTo(camera.position))

//change camera position
camera.lookAt(new THREE.Vector3(1, 0, 0))
camera.lookAt(group.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)