import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script2 from "../28682b28-1752-4f56-9683-adb5a325a285/src/item"
import Script3 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script4 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
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
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
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

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame.addComponentOrReplace(transform6)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(30.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame2.addComponentOrReplace(transform7)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(28.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame3.addComponentOrReplace(transform8)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(26.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame4.addComponentOrReplace(transform9)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(24.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame5.addComponentOrReplace(transform10)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(28.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame6.addComponentOrReplace(transform11)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(30.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame7.addComponentOrReplace(transform12)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(26.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame8.addComponentOrReplace(transform13)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(24.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame9.addComponentOrReplace(transform14)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(6.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame10.addComponentOrReplace(transform15)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(4.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame11.addComponentOrReplace(transform16)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(2.5, 2.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame12.addComponentOrReplace(transform17)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(8.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame13.addComponentOrReplace(transform18)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(6.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame14.addComponentOrReplace(transform19)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(4.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame15.addComponentOrReplace(transform20)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(2.5, 0.5, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame16.addComponentOrReplace(transform21)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(16.5, 0.5, 29),
  rotation: new Quaternion(-2.1361920208001067e-14, 5.960464477539063e-8, 1.3683154036095522e-14, -1),
  scale: new Vector3(23.625036239624023, 23.625, 1.0000027418136597)
})
nftPictureFrame17.addComponentOrReplace(transform22)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(0.5, 0.5, 30),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame18.addComponentOrReplace(transform23)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(0.5, 2.5, 30),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame19.addComponentOrReplace(transform24)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(0.5, 0.5, 28),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame20.addComponentOrReplace(transform25)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(0.5, 2.5, 28),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame21.addComponentOrReplace(transform26)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(0.5, 0.5, 26),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame22.addComponentOrReplace(transform27)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(0.5, 0.5, 24),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame23.addComponentOrReplace(transform28)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(0.5, 2.5, 26),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame24.addComponentOrReplace(transform29)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(0.5, 2.5, 24),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame25.addComponentOrReplace(transform30)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(3, 0.5, 16),
  rotation: new Quaternion(-2.801869115410041e-14, 0.70710688829422, -8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(23.625030517578125, 23.625, 1.0000033378601074)
})
nftPictureFrame26.addComponentOrReplace(transform31)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(0.5, 2.5, 2),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame27.addComponentOrReplace(transform32)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(0.5, 0.5, 2),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame28.addComponentOrReplace(transform33)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0.5, 0.5, 4),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame29.addComponentOrReplace(transform34)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(0.5, 0.5, 6),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame30.addComponentOrReplace(transform35)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(0.5, 0.5, 8),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame31.addComponentOrReplace(transform36)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(0.5, 2.5, 4),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame32.addComponentOrReplace(transform37)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(0.5, 2.5, 6),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame33.addComponentOrReplace(transform38)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(0.5, 2.5, 8),
  rotation: new Quaternion(-2.897973812418693e-14, -0.7071067690849304, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(3.500004291534424, 3.5, 1.0000011920928955)
})
nftPictureFrame34.addComponentOrReplace(transform39)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(17, 0.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame35.addComponentOrReplace(transform40)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(17, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame36.addComponentOrReplace(transform41)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(19, 0.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame37.addComponentOrReplace(transform42)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(21, 0.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame38.addComponentOrReplace(transform43)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(23, 0.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame39.addComponentOrReplace(transform44)

const nftPictureFrame40 = new Entity('nftPictureFrame40')
engine.addEntity(nftPictureFrame40)
nftPictureFrame40.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(19, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame40.addComponentOrReplace(transform45)

const nftPictureFrame41 = new Entity('nftPictureFrame41')
engine.addEntity(nftPictureFrame41)
nftPictureFrame41.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(21, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame41.addComponentOrReplace(transform46)

const nftPictureFrame42 = new Entity('nftPictureFrame42')
engine.addEntity(nftPictureFrame42)
nftPictureFrame42.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(23, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame42.addComponentOrReplace(transform47)

const nftPictureFrame43 = new Entity('nftPictureFrame43')
engine.addEntity(nftPictureFrame43)
nftPictureFrame43.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(31, 0.5, 0.5),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame43.addComponentOrReplace(transform48)

const nftPictureFrame44 = new Entity('nftPictureFrame44')
engine.addEntity(nftPictureFrame44)
nftPictureFrame44.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(31, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame44.addComponentOrReplace(transform49)

const nftPictureFrame45 = new Entity('nftPictureFrame45')
engine.addEntity(nftPictureFrame45)
nftPictureFrame45.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(29, 0.5, 0.5),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame45.addComponentOrReplace(transform50)

const nftPictureFrame46 = new Entity('nftPictureFrame46')
engine.addEntity(nftPictureFrame46)
nftPictureFrame46.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(27, 0.5, 0.5),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame46.addComponentOrReplace(transform51)

const nftPictureFrame47 = new Entity('nftPictureFrame47')
engine.addEntity(nftPictureFrame47)
nftPictureFrame47.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(25, 0.5, 0.5),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame47.addComponentOrReplace(transform52)

const nftPictureFrame48 = new Entity('nftPictureFrame48')
engine.addEntity(nftPictureFrame48)
nftPictureFrame48.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(29, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame48.addComponentOrReplace(transform53)

const nftPictureFrame49 = new Entity('nftPictureFrame49')
engine.addEntity(nftPictureFrame49)
nftPictureFrame49.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(27, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame49.addComponentOrReplace(transform54)

const nftPictureFrame50 = new Entity('nftPictureFrame50')
engine.addEntity(nftPictureFrame50)
nftPictureFrame50.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(25, 2.5, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 3.5, 1)
})
nftPictureFrame50.addComponentOrReplace(transform55)

const nftPictureFrame68 = new Entity('nftPictureFrame68')
engine.addEntity(nftPictureFrame68)
nftPictureFrame68.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(31.5, 0, 9.5),
  rotation: new Quaternion(-8.660462958213176e-15, 0.7071068286895752, -8.429366715745346e-8, 0.7071067690849304),
  scale: new Vector3(12.250015258789062, 11.8125, 1.0000011920928955)
})
nftPictureFrame68.addComponentOrReplace(transform56)

const galleryInfoDarkGrey3 = new Entity('galleryInfoDarkGrey3')
engine.addEntity(galleryInfoDarkGrey3)
galleryInfoDarkGrey3.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(13.5, 0, 0.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
galleryInfoDarkGrey3.addComponentOrReplace(transform57)

const nftPictureFrame51 = new Entity('nftPictureFrame51')
engine.addEntity(nftPictureFrame51)
nftPictureFrame51.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(31.5, 0, 17.5),
  rotation: new Quaternion(-8.660462958213176e-15, 0.7071068286895752, -8.429366715745346e-8, 0.7071067690849304),
  scale: new Vector3(18.375022888183594, 17.71875, 1.0000011920928955)
})
nftPictureFrame51.addComponentOrReplace(transform58)

const nftPictureFrame52 = new Entity('nftPictureFrame52')
engine.addEntity(nftPictureFrame52)
nftPictureFrame52.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(31.5, 0, 4.5),
  rotation: new Quaternion(-8.660462958213176e-15, 0.7071068286895752, -8.429366715745346e-8, 0.7071067690849304),
  scale: new Vector3(6.125007629394531, 5.90625, 1.0000011920928955)
})
nftPictureFrame52.addComponentOrReplace(transform59)

const nftPictureFrame53 = new Entity('nftPictureFrame53')
engine.addEntity(nftPictureFrame53)
nftPictureFrame53.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(31.5, 0, 27),
  rotation: new Quaternion(-8.660462958213176e-15, 0.7071068286895752, -8.429366715745346e-8, 0.7071067690849304),
  scale: new Vector3(18.375022888183594, 17.71875, 1.0000011920928955)
})
nftPictureFrame53.addComponentOrReplace(transform60)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(32, 0.5, 15),
  rotation: new Quaternion(-9.108471389510184e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.75, 2.0399999618530273, 1)
})
plainText.addComponentOrReplace(transform61)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(31.5, 0.5, 20),
  rotation: new Quaternion(1.3237243493650626e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(3.0000159740448, 3, 9.000031471252441)
})
externalLink.addComponentOrReplace(transform62)

const palmTree = new Entity('palmTree')
engine.addEntity(palmTree)
palmTree.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(15.5, 15.5, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.0199995040893555, 4.5, 6.999998569488525)
})
palmTree.addComponentOrReplace(transform63)
const gltfShape2 = new GLTFShape("647f405c-cb12-436e-8116-321404a898b0/PalmTree_01/PalmTree_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
palmTree.addComponentOrReplace(gltfShape2)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(nftPictureFrame, {"id":"21201859784851731319228564055853195439282511017680177726986901164330540072961","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script1.spawn(nftPictureFrame2, {"id":"21201859784851731319228564055853195439282511017680177726986901188519795884033","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script1.spawn(nftPictureFrame3, {"id":"21201859784851731319228564055853195439282511017680177726986901093961795895297","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script1.spawn(nftPictureFrame4, {"id":"21201859784851731319228564055853195439282511017680177726986901110454470311937","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script1.spawn(nftPictureFrame5, {"id":"21201859784851731319228564055853195439282511017680177726986901191818330767361","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script1.spawn(nftPictureFrame6, {"id":"212501859784851731319228564055853195439282511017680177726986901192917842395137","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script1.spawn(nftPictureFrame7, {"id":"21201859784851731319228564055853195439282511017680177726986901174226144722945","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script1.spawn(nftPictureFrame8, {"id":"21201859784851731319228564055853195439282511017680177726986901098359842406401","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script1.spawn(nftPictureFrame9, {"id":"21201859784851731319228564055853195439282511017680177726986901099459354034177","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script1.spawn(nftPictureFrame10, {"id":"21201859784851731319228564055853195439282511017680177726986901195116865650689","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script1.spawn(nftPictureFrame11, {"id":"21201859784851731319228564055853195439282511017680177726986901200614423789569","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script1.spawn(nftPictureFrame12, {"id":"21201859784851731319228564055853195439282511017680177726986901107155935428609","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script1.spawn(nftPictureFrame13, {"id":"21201859784851731319228564055853195439282511017680177726986901109354958684161","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script1.spawn(nftPictureFrame14, {"id":"21201859784851731319228564055853195439282511017680177726986901139041772634113","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script1.spawn(nftPictureFrame15, {"id":"21201859784851731319228564055853195439282511017680177726986901140141284261889","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script1.spawn(nftPictureFrame16, {"id":"21201859784851731319228564055853195439282511017680177726986901124748121473025","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script1.spawn(nftPictureFrame17, {"id":"21201859784851731319228564055853195439282511017680177726986901211609540067329","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script1.spawn(nftPictureFrame18, {"id":"21201859784851731319228564055853195439282511017680177726986901194017354022913","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script1.spawn(nftPictureFrame19, {"id":"21201859784851731319228564055853195439282511017680177726986901092862284267521","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script1.spawn(nftPictureFrame20, {"id":"21201859784851731319228564055853195439282511017680177726986901162131516817409","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script1.spawn(nftPictureFrame21, {"id":"21201859784851731319228564055853195439282511017680177726986901091762772639745","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script1.spawn(nftPictureFrame22, {"id":"21201859784851731319228564055853195439282511017680177726986901102757888917505","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script1.spawn(nftPictureFrame23, {"id":"21201859784851731319228564055853195439282511017680177726986901120350074961921","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script1.spawn(nftPictureFrame24, {"id":"21201859784851731319228564055853195439282511017680177726986901096160819150849","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script1.spawn(nftPictureFrame25, {"id":"21201859784851731319228564055853195439282511017680177726986901095061307523073","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script1.spawn(nftPictureFrame26, {"id":"21201859784851731319228564055853195439282511017680177726986901201713935417345","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script1.spawn(nftPictureFrame27, {"id":"21201859784851731319228564055853195439282511017680177726986901172027121467393","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script1.spawn(nftPictureFrame28, {"id":"21201859784851731319228564055853195439282511017680177726986901114852516823041","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script1.spawn(nftPictureFrame29, {"id":"21201859784851731319228564055853195439282511017680177726986901101658377289729","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script1.spawn(nftPictureFrame30, {"id":"21201859784851731319228564055853195439282511017680177726986901100558865661953","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script1.spawn(nftPictureFrame31, {"id":"21201859784851731319228564055853195439282511017680177726986901113753005195265","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script1.spawn(nftPictureFrame32, {"id":"21201859784851731319228564055853195439282511017680177726986901170927609839617","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script1.spawn(nftPictureFrame33, {"id":"21201859784851731319228564055853195439282511017680177726986901111553981939713","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script1.spawn(nftPictureFrame34, {"id":"21201859784851731319228564055853195439282511017680177726986901108255447056385","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script1.spawn(nftPictureFrame35, {"id":"21201859784851731319228564055853195439282511017680177726986901323759726100481","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script1.spawn(nftPictureFrame36, {"id":"21201859784851731319228564055853195439282511017680177726986901218206609833985","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script1.spawn(nftPictureFrame37, {"id":"21201859784851731319228564055853195439282511017680177726986901223704167972865","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script1.spawn(nftPictureFrame38, {"id":"21201859784851731319228564055853195439282511017680177726986901224803679600641","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script1.spawn(nftPictureFrame39, {"id":"21201859784851731319228564055853195439282511017680177726986901225903191228417","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script1.spawn(nftPictureFrame40, {"id":"21201859784851731319228564055853195439282511017680177726986901219306121461761","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame40, channelBus))
script1.spawn(nftPictureFrame41, {"id":"21201859784851731319228564055853195439282511017680177726986901220405633089537","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame41, channelBus))
script1.spawn(nftPictureFrame42, {"id":"21201859784851731319228564055853195439282511017680177726986901221505144717313","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame42, channelBus))
script1.spawn(nftPictureFrame43, {"id":"21201859784851731319228564055853195439282511017680177726986901234699284250625","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame43, channelBus))
script1.spawn(nftPictureFrame44, {"id":"21201859784851731319228564055853195439282511017680177726986901230301237739521","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame44, channelBus))
script1.spawn(nftPictureFrame45, {"id":"21201859784851731319228564055853195439282511017680177726986901233599772622849","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame45, channelBus))
script1.spawn(nftPictureFrame46, {"id":"21201859784851731319228564055853195439282511017680177726986901232500260995073","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame46, channelBus))
script1.spawn(nftPictureFrame47, {"id":"21201859784851731319228564055853195439282511017680177726986901231400749367297","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame47, channelBus))
script1.spawn(nftPictureFrame48, {"id":"21201859784851731319228564055853195439282511017680177726986901229201726111745","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame48, channelBus))
script1.spawn(nftPictureFrame49, {"id":"21201859784851731319228564055853195439282511017680177726986901228102214483969","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame49, channelBus))
script1.spawn(nftPictureFrame50, {"id":"21201859784851731319228564055853195439282511017680177726986901227002702856193","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame50, channelBus))
script1.spawn(nftPictureFrame68, {"id":"21201859784851731319228564055853195439282511017680177726986902017551563227137","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame68, channelBus))
script2.spawn(galleryInfoDarkGrey3, {"text":"  Do you want to \n  be Rich?","fontSize":8,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoDarkGrey3, channelBus))
script1.spawn(nftPictureFrame51, {"id":"21201859784851731319228564055853195439282511017680177726986902187975865532417","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame51, channelBus))
script1.spawn(nftPictureFrame52, {"id":"21201859784851731319228564055853195439282511017680177726986901908699912077313","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame52, channelBus))
script1.spawn(nftPictureFrame53, {"id":"21201859784851731319228564055853195439282511017680177726986902322116284121089","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame53, channelBus))
script3.spawn(plainText, {"text":"Just ONE MORE TRY before give up!!!","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script4.spawn(externalLink, {"url":"https://opensea.io/collection/one-more-try-1?search[sortAscending]=false&search[sortBy]=FAVORITE_COUNT","name":"Visit here for more"}, createChannel(channelId, externalLink, channelBus))

//ui.displayAnnouncement("Hello World!", -1)
//let counter = new ui.UICounter(100, -300, 100);
let health = new ui.UIBar(0.5, -370, 80);
let icon = new ui.LargeIcon('img/test2.png', -600, 0, 10, 10);
//let img = new ui.CenterImage('src/test2.png', 3)
let loading = new ui.LoadingIcon(3);
/*
  let InputPrompt = new ui.FillInPrompt("Write message", (e: string) => {  
    new ui.OkPrompt('Anything_', () => {}, 'OK', false);
    //ui.displayAnnouncement(e, -1)
    //let counter = new ui.UICounter(100, -300, 100);
  }, "Submit", 'Write message here', true);
  let counter = new ui.UICounter(100, -300, 100)
*/
/*let fill = new ui.FillInPrompt("Write message", (e: string) => {  
  //new ui.OkPrompt('Anything_', () => {}, 'OK', false);
  //ui.displayAnnouncement(e, -1)
  //let counter = new ui.UICounter(100, -300, 100);
}, "Submit", "Input message here", true);
fill.show()
let ok = new ui.OkPrompt('Anything_', () => {
  ok.hide()
  
}, 'OK', false);*/

let mainPrompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 700, 500, false)
let text = mainPrompt.addText("Hello World again", 0, 200)
let button = mainPrompt.addButton('Close', -100, -100, () => {
  mainPrompt.hide()  
}, ui.ButtonStyles.E)
let inputMsg = ''
let textInput = mainPrompt.addTextBox(0, 0, 'No size?', (e: string) => {
  inputMsg = e;
})
let button2 = mainPrompt.addButton('Update Text ?????', 100, -100, () => {
  text.hide()
  text = mainPrompt.addText(textInput.currentText, 0, 200)
}, ui.ButtonStyles.F)

