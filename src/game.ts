import * as ui from '@dcl/ui-scene-utils'
import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import { RequestManager, ContractFactory } from 'eth-connect'
import { LockerABI } from "abi/LockerABI"

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



//let label = new ui.CornerLabel("Welcome to my world!", -100)

executeTask(async () => {
  try{
    /*const address = (await getUserAccount()).toUpperCase()    
    log("user address: " + address) // add DEBUG_SCENE_LOG to url parameter to see log on deployed scene
    if (address != "0x2127aD06A0D77cb8496383D637457EF5A325A8cC".toUpperCase() && 
        address != "0x77C233AbA2A296951BA15BD1f8496148d5eBde81".toUpperCase())
    )
    {
      log("NOT Privileged User")
      return;
    }
      

    const provider = await getProvider()
    log("after getProvide")
    const requestManager = new RequestManager(provider)
    log("after requestManager")
    const factory = new ContractFactory(requestManager, LockerABI)
    log("after ContractFactory")
    //const contract = (await factory.at("0x35b20fFB43c773eD6f35Cac860c7c2ddf37B8747")) as any // Rinkbey network
    const contract = (await factory.at("0x664524fcac7f788a458709943503f79e4dd80611")) as any // Ropsten network
    log("after getting contract")
    const res = await contract.mintToken("bafkreid4bgisghndirgd4pna7pkojkvugmntxugar72frnkyavply4bf6u", {
      from: address,
      gas: 200000,
      value: 123
    })
    log("after mintToken")
    log(res.toString())*/
  } catch (error) {
    log("executeTask error: " + error.toString())
  }
})