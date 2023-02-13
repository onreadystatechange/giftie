
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '2.14情人节 猪猪抽奖活动',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '嘿，猪猪，这个网站是为你订做的', },
    { key: 's', wording: '我也不知道该给我家猪猪买什么礼物，那就让猪猪自己选吧', },
    { key: 'd', wording: '选到啥就是啥 哈哈', },
  ],
  // 最终解释权归属人
  owner: 'YHL',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'Dior双飞套装', alias: 'Dior双飞', image: '/images/1.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'w', name: '腾讯视频终身VIP', alias: 'VIP', image: '/images/2.png',  description: '“为你承包一辈子的 VIP”' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/3.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/5.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '小米13', alias: 'mi13', image: '/images/7.jpeg',  description: '“你值得拥有”' },
  { key: 'i', name: '花架', alias: '花架', image: '/images/8.jpeg',  description: '「点点滴滴都在心里」' },
];
