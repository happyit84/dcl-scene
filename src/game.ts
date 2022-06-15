import * as ui from '@dcl/ui-scene-utils'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("62b9b3e0-f0d9-4693-b8ee-fee3c20ca29c/FloorBasePebbles_01/FloorBasePebbles_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

////////////////////////////////////////////////////////////////////////

const myEntity = new Entity("myEntity")
engine.addEntity(myEntity)
myEntity.setParent(_scene)
myEntity.addComponent(new PlaneShape())
const transform6 = new Transform({
  position: new Vector3(16, 18, 16),
  rotation: new Quaternion(1, 0, 0, 0),
  scale: new Vector3(32, 32, 2)
})
myEntity.addComponentOrReplace(transform6)
const myTextureA = new Texture("material/decentraland-mana-logo.png")
const myTextureB = new Texture("material/beef.jpg")
//const myMaterial = new Material()
//myMaterial.albedoTexture = myTexture
const myMaterial = new BasicMaterial() // use BasicMaterial for consistently bright texture
myMaterial.texture = myTextureA
myEntity.addComponent(myMaterial)


const input = Input.instance
input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (e) => {
  log("PRIMARY BUTTON DOWN", e)
  myMaterial.texture = (myMaterial.texture == myTextureA ? myTextureB : myTextureA)    
})