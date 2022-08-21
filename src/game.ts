import * as ui from '@dcl/ui-scene-utils'
import { getUserData } from '@decentraland/Identity'
import { UserData } from '@decentraland/Players'
import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import { RequestManager, ContractFactory } from "eth-connect"
import { SceneScheduleABI, SceneScheduleWrapper } from "abi/SceneSchedule"

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

//const myTextureA = new Texture("material/decentraland-mana-logo.png")
//const myTextureB = new Texture("material/beef.jpg")

const postN = new Entity("post North")
//engine.addEntity(postN)
//postN.setParent(_scene)
postN.addComponent(new PlaneShape())
const transformPostN = new Transform({
  position: new Vector3(16, 12, 32),
  //rotation: new Quaternion(1, 0, 0, 0),
  rotation: new Quaternion(0, 0, 1, 0),
  scale: new Vector3(32, 20, 0)
})
postN.addComponentOrReplace(transformPostN)
const myMaterial = new BasicMaterial() // use BasicMaterial for consistently bright texture


const postE = new Entity("post East")
//engine.addEntity(postE)
//postE.setParent(_scene)
postE.addComponent(new PlaneShape())
const transformE = new Transform({
  position: new Vector3(32, 12, 16),
  rotation: new Quaternion(-1, 0, 1, 0),
  scale: new Vector3(32, 20, 0)
})
postE.addComponentOrReplace(transformE)

postN.addComponent(myMaterial)
postE.addComponent(myMaterial)


let messageBox = new ui.CornerLabel("Welcome to Shin's Open 2x2 Land!", -700, -40);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const linkTexture = new Texture("material/link_double_v1.png")
const linkMaterial = new BasicMaterial()
linkMaterial.texture = linkTexture
const linkOnPointerDown = new OnPointerDown(() => {
  openExternalURL("https://double.one/assets/eth/0xcd131eb7fb4ee596a0e1668196f4cf16ab87f58a/3")
})
const linkShape = new PlaneShape()
///////////////////////////////////////////////////////////////////////////////
const linkEntity11 = new Entity()
linkEntity11.addComponent(new Transform({
  //position: new Vector3(16,1.4,32),
  position: new Vector3(3.5,1.4,4),
  scale: new Vector3(5.848, -1, 1)
}))
linkEntity11.addComponent(linkShape)
linkEntity11.addComponent(linkOnPointerDown)
linkEntity11.addComponent(linkMaterial)
engine.addEntity(linkEntity11)
///////////////////////////////////////////////////////////////////////////////
const linkEntity12 = new Entity()
linkEntity12.addComponent(new Transform({
  position: new Vector3(3.5,1.4,3.999),
  scale: new Vector3(-5.848, -1, 1)
}))
linkEntity12.addComponent(linkShape)
linkEntity12.addComponent(linkOnPointerDown)
linkEntity12.addComponent(linkMaterial)
engine.addEntity(linkEntity12)
///////////////////////////////////////////////////////////////////////////////
const linkEntity21 = new Entity()
linkEntity21.addComponent(new Transform({
  position: new Vector3(24,1.4,24),
  rotation: new Quaternion(-1, 0, 1, 0),
  scale: new Vector3(5.848, 1, 1)
}))
linkEntity21.addComponent(linkShape)
linkEntity21.addComponent(linkOnPointerDown)
linkEntity21.addComponent(linkMaterial)
engine.addEntity(linkEntity21)
///////////////////////////////////////////////////////////////////////////////
const linkEntity22 = new Entity()
linkEntity22.addComponent(new Transform({
  position: new Vector3(23.999,1.4,24),
  rotation: new Quaternion(-1, 0, 1, 0),
  scale: new Vector3(-5.848, 1, 1)
}))
linkEntity22.addComponent(linkShape)
linkEntity22.addComponent(linkOnPointerDown)
linkEntity22.addComponent(linkMaterial)
engine.addEntity(linkEntity22)
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*executeTask(async () => {
  try {
    log("contract.getScheduleNow() 1")
    const provider = await getProvider()
    log("contract.getScheduleNow() 2")
    const requestManager = new RequestManager(provider)
    log("contract.getScheduleNow() 3")
    const factory = new ContractFactory(requestManager, SceneScheduleABI)
    log("contract.getScheduleNow() 4")
    const contract = (await factory.at("0x540d803Dc1565bcb91b3D0BB50Fa1ab6196dfe5f")) as any
    log("contract.getScheduleNow() 5")
    const sceneSchedule = new SceneScheduleWrapper(contract)
    let s = await sceneSchedule.getScheduleNow()
    log(s.data.img)
    const myTextureA = new Texture(s.data.img);
    
    myMaterial.texture = myTextureA
    postN.addComponent(myMaterial)
    postE.addComponent(myMaterial)
  } 
  catch (error) {
    log(error.toString())
  }
})*/