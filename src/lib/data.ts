export interface Project {
  id: string;
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
    span?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "urban",
    title: "城市建筑",
    description: "混凝土与玻璃的交响，记录都市空间的秩序与张力。",
    images: [
      { url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", alt: "现代摩天大楼", span: "col-span-2 row-span-2" },
      { url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80", alt: "城市天际线" },
      { url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80", alt: "建筑几何线条" },
      { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", alt: "玻璃幕墙反射", span: "col-span-2" },
      { url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80", alt: "混凝土建筑立面" },
      { url: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80", alt: "城市高架桥" },
    ],
  },
  {
    id: "wilderness",
    title: "旷野遐想",
    description: "远离喧嚣，在天地间寻找宁静与辽阔的共鸣。",
    images: [
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "雄伟山脉", span: "col-span-2 row-span-2" },
      { url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800&q=80", alt: "湖泊倒影" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", alt: "星空银河" },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", alt: "荒野日出", span: "col-span-2" },
      { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", alt: "迷雾森林" },
      { url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80", alt: "峡谷溪流" },
    ],
  },
  {
    id: "light-shadow",
    title: "建筑光影",
    description: "光与影的辩证法，在建筑表皮上书写时间的痕迹。",
    images: [
      { url: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80", alt: "建筑光影对比", span: "col-span-2 row-span-2" },
      { url: "https://images.unsplash.com/photo-1493397212122-2b85dba8106b?w=800&q=80", alt: "光影走廊" },
      { url: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80", alt: "建筑细部纹理" },
      { url: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80", alt: "黑白建筑", span: "col-span-2" },
      { url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80", alt: "光线穿透窗户" },
      { url: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=800&q=80", alt: "建筑阴影图案" },
    ],
  },
  {
    id: "life",
    title: "生活碎片",
    description: "平凡日常中的诗意切片，捕捉稍纵即逝的温度。",
    images: [
      { url: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80", alt: "街景人文", span: "col-span-2 row-span-2" },
      { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80", alt: "日常静物" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80", alt: "咖啡馆一角" },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", alt: "街头行人", span: "col-span-2" },
      { url: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80", alt: "窗光静物" },
      { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80", alt: "雨后街景" },
    ],
  },
];

export const aboutData = {
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  paragraphs: [
    "我是山岚，一名建筑师，也是一名摄影师。建筑教会我观察空间与结构，摄影则让我学会捕捉光影与情绪。",
    "我相信每一束光都有故事，每一个阴影都在诉说。我的镜头不追求完美的构图，而是寻找真实的瞬间——那些在时间缝隙中悄然绽放的情绪与诗意。",
    "无论是城市的高耸天际，还是旷野的无垠星空，我希望我的作品能让观者停下脚步，感受世界中那些被忽略的美。",
  ],
};

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "QQ", url: "#", icon: "MessageCircle" },
  { platform: "WeChat", url: "#", icon: "MessageSquare" },
  { platform: "Behance", url: "#", icon: "Palette" },
];
