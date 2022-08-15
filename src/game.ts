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
engine.addEntity(postN)
postN.setParent(_scene)
postN.addComponent(new PlaneShape())
const transformPostN = new Transform({
  position: new Vector3(16, 18, 32),
  rotation: new Quaternion(1, 0, 0, 0),
  scale: new Vector3(32, 32, 0)
})
postN.addComponentOrReplace(transformPostN)
const myMaterial = new BasicMaterial() // use BasicMaterial for consistently bright texture
//const myMaterial = new Material() // use BasicMaterial for consistently bright texture


const postE = new Entity("post East")
engine.addEntity(postE)
postE.setParent(_scene)
postE.addComponent(new PlaneShape())
const transformE = new Transform({
  position: new Vector3(32, 18, 16),
  rotation: new Quaternion(-1, 0, 1, 0),
  scale: new Vector3(32, 32, 0)
})
postE.addComponentOrReplace(transformE)
//const myMaterial = new BasicMaterial() // use BasicMaterial for consistently bright texture
//myMaterial.texture = myTextureA
//const myVideoClip = new VideoClip("material/master.m3u8")
//const myVideoTexture = new VideoTexture(myVideoClip)
const myTextureA = new Texture("https://bafybeieettrqasqy24jkcojlal6wc6vp2bjhskkbfel3qg6cxrpt6zp5em.ipfs.nftstorage.link/")
//const myTextureA = new Texture("https://i.imgur.com/ziK4m0R.png")
myMaterial.texture = myTextureA
//myMaterial.albedoTexture = myVideoTexture 
postN.addComponent(myMaterial)
postE.addComponent(myMaterial)
//myVideoTexture.play()



let messageBox = new ui.CornerLabel("-", -700, -40);

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
    //const myTextureA = new Texture("https://drive.google.com/uc?id=1LlEPFmn1f81LZQ9sibgLwp-_x6_Tmq7I");
    
    myMaterial.texture = myTextureA
    postN.addComponent(myMaterial)
    postE.addComponent(myMaterial)
  } 
  catch (error) {
    log(error.toString())
  }
})*/