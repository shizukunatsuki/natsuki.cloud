export type PanelKey = "about" | "find";

type PageMeta = {
  title: string;
  description: string;
};

type TextCard = {
  title: string;
  text: string;
  lang?: string;
};

type HeroContent = {
  kicker: string;
  title: string;
  copy: string;
  tags?: readonly TextChip[];
};

type SectionHeading = {
  title: string;
  description: string;
};

type TextPanel = {
  title: string;
  body: string;
};

type TextChip = {
  text: string;
  lang?: string;
  tone?: "idle" | "soft";
};

type LabelValue = {
  label: string;
  value: string;
  lang?: string;
};

type TimelineItem = {
  time: string;
  title: string;
  text: string;
};

type LinkItem = {
  label: string;
  href: string;
  text: string;
};

type ActionDemo = {
  label: string;
  result: string;
  tone?: "primary";
  disabled?: boolean;
};

type ContactLink = {
  label: string;
  href?: string;
  note: string;
  meta: string;
  tag: string;
};

type PreferenceCard = {
  title: string;
  text: string;
  value: string;
};

type KeyValueRows = readonly (readonly [string, string])[];

type CodeDemo = {
  filename: string;
  code: string;
};

export const siteMeta = {
  name: "natsuki.cloud",
  url: "https://natsuki.cloud",
  defaultTitle: "奈月 | natsuki.cloud",
  defaultDescription: "奈月的个人主页，收纳页面介绍、社交媒体和联系方式。",
} as const;

export const themeConfig = {
  storageKey: "natsuki-theme",
  darkQuery: "(prefers-color-scheme: dark)",
  colors: {
    light: "#fff4f8",
    dark: "#17111f",
  },
} as const;

export const pages = {
  about: {
    title: "奈月 | natsuki.cloud",
    description: "奈月的个人主页，留一张示例卡片来介绍页面本身。",
  },
  find: {
    title: "找到奈月 | natsuki.cloud",
    description: "奈月的社交媒体和联系方式聚合页。",
  },
} satisfies Record<PanelKey, PageMeta>;

export const tabs = [
  { href: "/", label: "关于奈月", key: "about" },
  { href: "/find/", label: "找到奈月", key: "find" },
] as const satisfies readonly {
  href: string;
  label: string;
  key: PanelKey;
}[];

export const aboutHero = {
  kicker: "Profile Surface / 关于奈月",
  title: "关于奈月",
  copy:
    "这是个人主页的内容卡片 demo，用来测试真实内容替换前的排版边界：中日英混排、长句、短标签、列表、表格、代码片段、不同高度区块和页面滚动。",
  tags: [
    { text: "中文简体" },
    { text: "日本語", lang: "ja" },
    { text: "English" },
    { text: "2026.06" },
    { text: "soft mica" },
  ],
} satisfies HeroContent;

export const contactHero = {
  kicker: "Contact Surface / 找到奈月",
  title: "找到奈月",
  copy: "这里是社交媒体和联系方式聚合页 demo。它测试外链、邮箱、待补充状态、长链接、状态标签、可点击卡片和不可点击卡片的视觉差异。",
} satisfies HeroContent;

export const contactStatusChips = [
  { text: "可用" },
  { text: "待补充", tone: "idle" },
  { text: "低频回复", tone: "soft" },
  { text: "外链" },
  { text: "邮箱", tone: "idle" },
] satisfies readonly TextChip[];

export const sectionHeadings = {
  profileCards: {
    title: "小卡片排版",
    description: "测试等宽网格、短标题、长说明和多语言内容。",
  },
  typography: {
    title: "多语言与长文本",
    description: "验证 Noto 字体系、长 token 和不同语言在同一区域的表现。",
  },
  linksAndButtons: {
    title: "链接与按钮测试",
    description: "这些仍然是 demo。正式内容迁移时，只需要替换数据和文案，不需要依赖固定长度。",
  },
  timelineAndMeta: {
    title: "时间线与键值表",
    description: "这里故意让内容更长，用来测试宽屏下的页面滚动和顶栏沉浸状态。",
  },
  longBlocks: {
    title: "更长内容块",
    description: "让关于页明显长于联系页，便于检查不同高度面板切换和滚动位置重置。",
  },
  contactCards: {
    title: "入口卡片",
    description: "测试链接、不可点击状态、长 meta 文本和 hover 反馈。",
  },
  contactRows: {
    title: "联系方式表",
    description: "测试键值布局、长 URL 和不同文字长度。",
  },
  contactTimeline: {
    title: "联系流程",
    description: "比关于页短一些，用来验证两张不同高度卡片之间的过渡。",
  },
} satisfies Record<string, SectionHeading>;

export const aboutQuote = "“这里不是博客列表，而是一个干净的入口页面。内容可以很轻，但边界测试必须足够重。”";

export const readingPanel = {
  title: "阅读节奏",
  body:
    "这个面板测试较长段落。真实内容可能会介绍名字、角色气质、展示入口和一些偏好。即使段落变长，卡片也应该只自然增长，不产生横向滚动。",
} satisfies TextPanel;

export const contactInfoPanel = {
  title: "联系说明",
  body: "真实内容替换后，这里可以放联系偏好、回复节奏、合作说明或平台状态。这个面板比入口卡片更像正文，用来测试复杂内容的阅读质感。",
} satisfies TextPanel;

export const profileCards = [
  {
    title: "角色气质",
    text: "安静、月光、柔软的夜色，以及一点点黑猫的距离感。",
  },
  {
    title: "日本語",
    text: "しずかな夜、月明かり、やわらかい空気。長い文章でも自然に折り返す。",
    lang: "ja",
  },
  {
    title: "English",
    text: "A calm personal home for identity, links, and small signals.",
  },
  {
    title: "排版目标",
    text: "内容密度要足够测试边界，但视觉上仍然保持轻、软、干净。",
  },
] satisfies readonly TextCard[];

export const heroStats = [
  ["Name", "奈月"],
  ["Kana", "しずく なつき"],
  ["Theme", "moon / cat / violet"],
] as const satisfies KeyValueRows;

export const typographyChecks = [
  {
    label: "中文长句",
    value: "如果这是一段真实的个人介绍，文字会自然换行，不应该撑破卡片，也不应该让行距变得拥挤。",
  },
  {
    label: "日本語",
    value: "月明かりの下で、奈月はゆっくり深呼吸する。漢字とかなが混ざっても同じ質感を保つ。",
    lang: "ja",
  },
  {
    label: "English",
    value: "The layout should stay calm when English fragments appear beside Chinese and Japanese text.",
  },
  {
    label: "长标识",
    value: "natsuki-cloud-profile-demo-long-token-2026-06-17-with-extra-segment",
  },
] satisfies readonly LabelValue[];

export const rhythmItems = [
  "短句测试。",
  "中等长度测试：这一行包含中文、English、数字 2026 和符号 #moon。",
  "长句测试：当真实内容替换 demo 后，页面仍然需要在桌面宽屏、窄屏手机、深色模式和浅色模式下保持一致的阅读节奏。",
  "日文混排：しずかな夜 / 月明かり / やわらかい空気。",
] as const;

export const timelineItems = [
  {
    time: "00:12",
    title: "夜间窗口",
    text: "背景图较暗时，mica 卡片需要保持文字清晰，并让顶栏进入沉浸态时不显得突兀。",
  },
  {
    time: "07:30",
    title: "晨间检查",
    text: "短标题、状态标签、小段说明和密集信息块需要同时出现，用来观察视觉层级。",
  },
  {
    time: "22:45",
    title: "长内容滚动",
    text: "这里故意加入更多内容，让宽屏也能触发滚动，从而测试顶栏隐藏、卡片高度和横向切换。",
  },
] satisfies readonly TimelineItem[];

export const featureNotes = [
  {
    title: "可替换内容",
    text: "之后这里可以换成真实自我介绍、作品方向、常用入口或轻量状态，不需要改变页面结构。",
  },
  {
    title: "不同高度",
    text: "关于页内容比联系页更长，用来验证不同高度面板之间切换时，外层高度过渡仍然自然。",
  },
  {
    title: "边界测试",
    text: "包含长词、长链接、列表、表格、引用和代码片段，尽量提前暴露未来内容替换可能造成的问题。",
  },
] satisfies readonly TextCard[];

export const detailRows = [
  ["Name", "奈月 / Natsuki / しずく なつき"],
  ["Mood", "quiet room, crescent moon, black cat, soft violet"],
  ["Layout", "responsive, mica card, sliding panels, sticky topbar"],
  ["Long Value", "this-is-a-long-key-value-row-used-to-test-wrapping-in-a-small-definition-like-layout"],
] as const satisfies KeyValueRows;

export const calloutItems = [
  "提示块测试：短内容需要像轻量便签，而不是厚重卡片。",
  "混排提示：奈月 / Natsuki / 月明かり / hello@natsuki.cloud。",
  "长提示：如果未来这里放站点说明、更新状态或免责声明，也应该自然增长并保持可读。",
] as const;

export const inlineLinks = [
  {
    label: "内部链接示例",
    href: "/find/",
    text: "跳转到找到奈月，用来测试普通文本链接在正文中的样式。",
  },
  {
    label: "外部链接示例",
    href: "https://www.pixiv.net/users/99990012",
    text: "打开 Pixiv 主页，用来测试外链、换行和 focus 状态。",
  },
  {
    label: "邮件链接示例",
    href: "mailto:hello@natsuki.cloud",
    text: "发送邮件，用来测试 mailto 链接和长地址展示。",
  },
] satisfies readonly LinkItem[];

export const actionDemos = [
  {
    label: "普通按钮",
    result: "已触发普通按钮：用于测试按钮点击后的状态文本。",
  },
  {
    label: "强调按钮",
    result: "已触发强调按钮：未来可以替换成复制、展开或筛选动作。",
    tone: "primary",
  },
  {
    label: "禁用按钮",
    result: "禁用按钮不会触发，这里只测试视觉状态。",
    disabled: true,
  },
] satisfies readonly ActionDemo[];

export const contactLinks = [
  {
    label: "Pixiv",
    href: "https://www.pixiv.net/users/99990012",
    note: "插画、角色图与公开作品入口。用于测试外链卡片、长说明与小字号元信息。",
    meta: "pixiv.net/users/99990012",
    tag: "作品",
  },
  {
    label: "Email",
    href: "mailto:hello@natsuki.cloud",
    note: "正式联系、合作与长期沟通。邮箱卡片需要在浅色和深色主题下保持清晰。",
    meta: "hello@natsuki.cloud",
    tag: "优先",
  },
  {
    label: "Social",
    note: "短消息与近况入口，当前作为占位状态展示。测试不可点击卡片的视觉层级。",
    meta: "coming soon / 待补充",
    tag: "稍后",
  },
  {
    label: "Archive",
    note: "未来可能放作品索引、长期链接或公开资料。测试很长的英文标识换行。",
    meta: "natsuki-public-archive-demo-entry-with-long-token",
    tag: "索引",
  },
] satisfies readonly ContactLink[];

export const contactPreferences = [
  {
    title: "正式联系",
    text: "合作、长期沟通、需要上下文的说明优先使用 Email。",
    value: "Email",
  },
  {
    title: "作品入口",
    text: "公开插画、角色图、作品存档优先从 Pixiv 进入。",
    value: "Pixiv",
  },
  {
    title: "短消息",
    text: "短消息入口后续补齐，目前用于测试待补充状态。",
    value: "Soon",
  },
] satisfies readonly PreferenceCard[];

export const contactRows = [
  ["Primary", "hello@natsuki.cloud"],
  ["Artwork", "pixiv.net/users/99990012"],
  ["Status", "部分平台稍后补充"],
  ["Long URL", "https://example.com/natsuki/contact/demo/path/with/a/very-long-segment"],
] as const satisfies KeyValueRows;

export const contactDetailRows = [
  ["优先级", "Email > Pixiv > 其他平台"],
  ["响应", "普通留言不保证即时回复"],
  ["长文本", "long-link-and-mixed-content-demo"],
] as const satisfies KeyValueRows;

export const contactTimeline = [
  {
    time: "Step 1",
    title: "确认入口",
    text: "先选择合适的平台。这里测试英文 step 标签、中文标题和说明文字的组合。",
  },
  {
    time: "Step 2",
    title: "补充上下文",
    text: "正式联系建议包含目的、时间、链接和必要附件。长段文字也应稳定换行。",
  },
  {
    time: "Step 3",
    title: "等待回复",
    text: "普通留言不保证即时回复。这个区块用于测试较短页面和长页面之间的高度差。",
  },
] satisfies readonly TimelineItem[];

export const contactNotes = [
  "联系页列表测试：短条目。",
  "联系页列表测试：中等长度条目，包含 Pixiv / Email / Bilibili / 奈月 / 月明かり。",
  "联系页列表测试：long-link-and-mixed-content-demo-with-many-characters-to-check-line-breaking。",
] as const;

export const codeDemos = {
  profile: {
    filename: "demo.config.ts",
    code: `export const profile = {
  name: "奈月",
  theme: ["moon", "cat", "violet"],
  updated: "2026-06-17",
};`,
  },
  links: {
    filename: "links.json",
    code: `{
  "pixiv": "https://www.pixiv.net/users/99990012",
  "email": "hello@natsuki.cloud",
  "status": "soft contact"
}`,
  },
} as const satisfies Record<string, CodeDemo>;
