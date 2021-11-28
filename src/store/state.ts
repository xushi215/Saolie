import { ImgCellType, ImgFaceType } from '@/util/image'
import { storage, storageDefault } from '@/store/plugins'
import { BaseParser, Cell, GameEvent } from '@/game/BaseParser'
import { DefaultParser } from '@/game/DefaultParser'

export type State = typeof storageDefault & {
  // 游戏类型：Video = 播放录像，UPK = 重开，UPK 模式最大的作用是可以实时验证录像解析器的功能
  gameType: 'Video' | 'UPK'
  // 录像文件解析结果
  videoParser: BaseParser
  // 玩家操作解析结果
  userParser: BaseParser
  // 列数
  width: number
  // 行数
  height: number
  // 游戏雷数
  mines: number
  // 最少左键点击数
  bbbv: number
  // 开空数量
  openings: number
  // 岛屿数量
  islands: number
  // 玩家名称原始数据
  playerArray: Uint8Array
  // 游戏事件
  gameEvents: GameEvent[],
  // 游戏方块信息棋盘，存放方块固有信息
  gameCellBoard: Cell[],
  // 游戏图片信息棋盘，存放方块当前对应的图片信息
  gameImgBoard: ImgCellType[],
  // 录像动画ID，同一时间只播放一个录像，重置为 0 后其他录像动画全部取消，录像播放处于暂停状态
  videoAnimationId: number
  // 笑脸状态
  faceStatus: ImgFaceType
  // 游戏事件索引
  gameEventIndex: number
  // 游戏是否正式开始，在第一个方块被打开后游戏才开始计时
  gameStarted: boolean
  // 游戏开始的时间（毫秒）, 值为 0 时表示游戏还未开始计时
  gameStartTime: number,
  // 游戏经过的时间（毫秒）
  gameElapsedTime: number,
  // 游戏路径点坐标数组，x：精确的横坐标，y：精确的纵坐标
  gameMousePoints: { x: number, y: number }[]
  // 游戏左键点坐标数组，x：精确的横坐标，y：精确的纵坐标
  gameLeftPoints: { x: number, y: number }[]
  // 游戏右键点坐标数组，x：精确的横坐标，y：精确的纵坐标
  gameRightPoints: { x: number, y: number }[]
  // 游戏双击点坐标数组，x：精确的横坐标，y：精确的纵坐标
  gameDoublePoints: { x: number, y: number }[]
  // 页面加载中，null 表示页面处于初始加载状态，但是没有正在加载的内容
  loading: boolean | null
}

export const state: State = {
  /** 进行本地缓存的变量，不一定都能获取到默认值（比如本地只缓存了部分键值），需要手动进行设置 */
  scale: storage.value.scale ?? storageDefault.scale,
  locale: storage.value.locale ?? storageDefault.locale,
  gameSpeed: storage.value.gameSpeed ?? storageDefault.gameSpeed,
  isVideoMap: storage.value.isVideoMap ?? storageDefault.isVideoMap,
  isMousePathMove: storage.value.isMousePathMove ?? storageDefault.isMousePathMove,
  isMousePathLeft: storage.value.isMousePathLeft ?? storageDefault.isMousePathLeft,
  isMousePathRight: storage.value.isMousePathRight ?? storageDefault.isMousePathRight,
  isMousePathDouble: storage.value.isMousePathDouble ?? storageDefault.isMousePathDouble,
  isShowOpening: storage.value.isShowOpening ?? storageDefault.isShowOpening,
  /** 不进行本地缓存的变量 */
  // 游戏原始信息
  gameType: 'Video',
  videoParser: new DefaultParser(),
  userParser: new DefaultParser(),
  width: 8,
  height: 8,
  mines: 10,
  bbbv: 0,
  openings: 0,
  islands: 0,
  playerArray: new Uint8Array(),
  gameEvents: [],
  gameCellBoard: [],
  // 其他变量
  gameImgBoard: [],
  videoAnimationId: 0,
  faceStatus: 'face-normal',
  gameEventIndex: 0,
  gameStarted: false,
  gameStartTime: 0.0,
  gameElapsedTime: 0.0,
  gameMousePoints: [],
  gameLeftPoints: [],
  gameRightPoints: [],
  gameDoublePoints: [],
  loading: null
}
