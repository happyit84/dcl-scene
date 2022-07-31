import * as ui from '@dcl/ui-scene-utils'
import { getUserData } from '@decentraland/Identity'
import { UserData } from '@decentraland/Players'
import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import { RequestManager, ContractFactory } from "eth-connect"
import { SceneScheduleABI } from "abi/SceneSchedule"

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

const myTextureA = new Texture("material/decentraland-mana-logo.png")
const myTextureB = new Texture("material/beef.jpg")

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
myMaterial.texture = myTextureA
postN.addComponent(myMaterial)

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
postE.addComponent(myMaterial)

let socket: WebSocket
let socket_msg
let textureSelect = 'A';
myMaterial.texture = myTextureA

/*export async function joinSocketsServer() {
  socket = new WebSocket('wss://3f7oxp8ct8.execute-api.ap-northeast-2.amazonaws.com/production')
  log('WebSocket is connected')

  socket.onmessage = function (event) {
    log('Recieved message', event)
    socket_msg = JSON.parse(event.data).message
    log(socket_msg)
    if (socket_msg == 'A' || socket_msg == 'B')
      textureSelect = socket_msg
    else
      log("Unknown sokcet message: " + socket_msg)

    if (textureSelect == 'A')
      myMaterial.texture = myTextureA
    else if (textureSelect == 'B')
      myMaterial.texture = myTextureB

    const now = new Date()
    const message = "[" + now.toTimeString() + "] Display is updated!"
    messageBox.set(message)
  }
  //socket.addEventListener('message', e => {
  //  log("your answer is: ", JSON.parse(e.data).message))
  //})
}
joinSocketsServer()*/



let messageBox = new ui.CornerLabel("-", -700, -40);

executeTask(async () => {
  try {
    const provider = await getProvider()
    const requestManager = new RequestManager(provider)
    const factory = new ContractFactory(RequestManager, SceneScheduleABI)
    const contract = (await factory.at("")) as any
    const res = contract.getScheduleNow()
    log("contract.getScheduleNow()")
    log(res);
  } 
  catch (error) {
    log(error.toString())
  }
})