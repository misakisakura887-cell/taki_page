import React from 'react';
import { Award, Users, Calendar, Compass, Heart, Activity, Waves } from 'lucide-react';

// --- 管理层数据 definition ---

const FOUNDERS = [
  { 
    name: "金明", 
    title: "Founder & CEO", 
    bio: "毕业于加拿大Western University数学与精算双专业，后赴美国Harvard University学习数学与计算机，2012年在波士顿创立人工智能视频系统平台Venvy Inc.，获哈佛真理基金投资，2018-2022年进入湖畔大学学习，2022-2025年就读于香港大学经管学院。曾入选《2021胡润U30中国创业领袖》名单，获得高盛亚洲颠覆力企业家。自由潜水世界纪录保持者，中国自由潜水国家队队员。主导极链集团AI量化引擎构建。", 
    image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20251225152057_19320_12.jpg" 
  },
  { 
    name: "董慧智", 
    title: "Co-Founder & CTO", 
    bio: "本科毕业于清华大学力学系, 硕士毕业于北京大学力学系。资深人工智能视频技术专家。带领集团AI科研团队研发的技术项目荣获多项市级及国家级政策扶持。作为集团技术总舵手，主导了极链视频OS、智能视觉交互系统及AI量化策略引擎的底层架构设计，推动了AI算法在IP商业与品牌电商场景的深度融合与技术突破. 入选2020人工智能50人, 荣获2021金雁中国AI先行者奖、2020年上海市黄浦区智慧工匠及2021年“上海产业菁英”高层次人才。", 
    image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122153217_2719_7.jpg" 
  }
];

const EXECUTIVES = [
  { name: "曾雨婷", title: "Head of Global Commerce", bio: "15年电商领域实战经验，曾任多家头部互联网企业高管，主导多个核心业务 from 0 to 1 的搭建与规模化增长，构建了集团品牌电商全球化运营体系", image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122151403_2669_7.jpg" },
  { name: "王玫", title: "Head of IP Ecosystem", bio: "深耕IP商业生态，带领团队连续6年领跑国内综艺IP授权市场，打造多个IP行业标杆级联名案例，成功操盘S级以上IP项目上百个", image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122153112_2708_7.jpg" },
  { name: "栾帆", title: "Executive Creative Director, IP", bio: "资深创意人，致力于IP项目创意视觉体系构建，带领团队从0到1孵化构建IP宇宙10+ ，搭建与设计服务多种IP娱乐消费品牌200+", image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122151405_2670_7.jpg" },
  { name: "吴建平", title: "Head of Finance", bio: "深耕集团财务战略及资金优化配置，致力于通过精细化运营与资本增效，为集团业务跨越式增长提供稳健的财务支撑", image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122155648_2752_7.jpg" },
  { name: "张悦", title: "Head of Corporate Strategy & Synergies", bio: "十余年互联网与高科技行业管理经验，在集团战略协作、市场品牌建设、政府关系、资本市场资源领域拥有深厚积淀，致力于构建集团内外双循环的战略生态", image: "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122151407_2671_7.jpg" },
];

const MILESTONES = [
  { year: "2012", title: "前瞻研究", lines: ["全球首个自动视链系统在美国问世", "定义视频交互新范式"] },
  { year: "2014", title: "正式启航", lines: ["极链科技正式成立于上海", "开启智能视觉技术商业化之路"] },
  { year: "2015", title: "确立路线", lines: ["推出首个智能视频广告系统原型", "完成天使轮融资", "确立“AI 驱动增长”的核心战略"] },
  { year: "2017", title: "资本赋能", lines: ["获阿里巴巴、旷视科技领投 3.49 亿元融资", "前瞻布局品牌电商业务", "驱动流量向价值转化"] },
  { year: "2018", title: "独角兽势能", lines: ["完成 C1 轮融资", "总融资额超 10 亿元", "视频 OS 正式商用", "深度链接头部平台"] },
  { year: "2019", title: "IP 元年", lines: ["IP 商业板块正式确立", "TAKI 品牌诞生", "开启 IP 经济全链路赋能"] },
  { year: "2020", title: "场景下沉", lines: ["布局线下新消费场景", "覆盖 6 个新一线城市", "入选《2020 胡润中国瞪羚企业》"] },
  { year: "2023", title: "先锋引领", lines: ["创始人入选“上海青年科技创业先锋”", "技术实力获国家级认可"] },
  { year: "2025", title: "智能飞跃", lines: ["正式步入“AI 量化”阶段", "通过算法优化生产要素流通", "完成全球品牌数字化赋能布局", "构建下一代价值交换网络"] },
];

const HONORS = [
  "国家高新技术企业", "上海市工业设计中心", "上海市企业技术中心", "上海市版权示范单位", "上海市专利试点单位",
  "上海市科技小巨人企业", "中国AQI创新应用大奖", "人工智能企业创新50强", "2021年度科创引领企业", "上海市专精特新中小企业",
  "上海人工智能最具成长企业", "一度天使科技独角兽百人团", "中国人工智能科技服务商50强", "2020中国准独角兽企业100强",
  "5G新经济产业硬独角兽TOP50", "2020上海民营服务业企业100强", "2021金雁奖中国AI创新应用大奖", "2021年高通人工智能创新应用大赛",
  "2021中国AI企业商业落地规模潜力", "2021Alwin 世界人工智能创新算法技术赛", "2021WISE消费新势力榜", "毕马威中国新国货50榜单",
  "金物奖TAKI 最具潜力入围奖", "金物奖TAKI 概念创新入围奖", "ADMEN国际大奖·实战金案", "36kr 2021WISE消费新势力榜",
  "2021年第六届玉猴奖·年度最佳授权团队", "2021中国最具价值新品牌·潮玩榜top20", "品牌星球 「年度品牌奖-年度新消费品类品牌」",
  "上海市重点服务独角兽（潜力）企业"
];

const GALLERY = [
  "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122155734_2754_7.jpg",
  "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122145752_2658_7.jpg",
  "https://6971cc220fbe657fd5e61849.imgix.net/ScreenShot_2026-01-22_153528_842.jpg",
  "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122153533_23957_12.jpg",
  "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122153502_2721_7.jpg",
  "https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122153513_2722_7.jpg",
];

export const AboutSummary: React.FC = () => {
  return (
    <div id="about-container" className="scroll-mt-20">
      {/* 1. INTRODUCTION 企业介绍 */}
      <section className="py-32 relative overflow-hidden border-t border-taki-orange/5 bg-taki-beige">
        {/* Optimized Background Processing */}
        <div className="absolute inset-0 z-0">
          {/* Base Image with improved base visibility */}
          <img 
            src="https://6971cc220fbe657fd5e61849.imgix.net/Weixin Image_20260122145538_2656_7.jpg" 
            className="w-full h-full object-cover grayscale opacity-30" 
            alt=""
          />
          {/* The "Mask" layer - beige overlay with high transparency to let the image through */}
          <div className="absolute inset-0 bg-taki-beige/80 mix-blend-multiply"></div>
        </div>

        {/* Large Decorative Text Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] z-10">
          <span className="text-[10vw] font-black uppercase tracking-tighter leading-none">TOSS A KIND IMPACT</span>
        </div>

        {/* Foreground Content */}
        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="w-8 h-[2px] bg-taki-orange mx-auto mb-10"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-taki-dark leading-tight tracking-tight max-w-5xl mx-auto">
            极链集团以 <span className="text-taki-orange font-black">AI</span> + <span className="text-taki-blue font-black">文娱</span> 赋能全球 IP 商业与品牌数字化变革
          </h2>
          <div className="mt-12 flex justify-center items-center gap-4 text-[9px] font-black tracking-[0.4em] text-taki-dark/40 uppercase">
             <div className="w-1 h-1 bg-taki-orange rotate-45"></div>
             GLOBAL DIGITAL EVOLUTION SINCE 2014
             <div className="w-1 h-1 bg-taki-orange rotate-45"></div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP 管理层 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <Users className="text-taki-orange" size={24} />
            <span className="text-taki-orange font-black tracking-[0.3em] uppercase text-xs">LEADERSHIP / 核心管理层</span>
          </div>

          {/* 第一梯队：创始团队 (Featured) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {FOUNDERS.map((exec, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-8 items-start bg-taki-beige/30 p-8 border border-taki-dark/5 hover:border-taki-orange/20 transition-all duration-500">
                <div className="w-full md:w-48 h-64 shrink-0 bg-taki-beige overflow-hidden border border-taki-dark/5">
                  <img src={exec.image} alt={exec.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-3xl font-black text-taki-dark">{exec.name}</h3>
                    <div className="w-8 h-[2px] bg-taki-orange opacity-40"></div>
                  </div>
                  <span className="text-xs font-black text-taki-orange uppercase tracking-[0.2em] mb-6">{exec.title}</span>
                  <p className="text-[13px] text-taki-dark/80 font-bold leading-relaxed tracking-tight">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 第二梯队：执行高管 (Secondary) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {EXECUTIVES.map((exec, idx) => (
              <div key={idx} className="group flex flex-col items-start border-t border-taki-dark/5 pt-8 hover:translate-y-[-4px] transition-transform duration-500">
                <div className="w-24 h-32 mb-6 bg-taki-beige overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={exec.image} alt={exec.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-black text-taki-dark mb-1">{exec.name}</h4>
                <span className="text-[9px] font-black text-taki-orange uppercase tracking-widest mb-4 block leading-tight">{exec.title}</span>
                <p className="text-[11px] text-taki-dark/60 font-bold leading-relaxed">{exec.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MILESTONES 发展历程 - S-Shape Curve Timeline */}
      <section className="py-24 bg-taki-dark text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-20">
            <Calendar className="text-taki-blue" size={20} />
            <span className="text-taki-blue font-black tracking-[0.3em] uppercase text-xs">MILESTONES / 发展历程</span>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 hidden lg:block" viewBox="0 0 1200 800">
               <path d="M 0 100 L 1000 100 C 1150 100 1150 400 1000 400 L 200 400 C 50 400 50 700 200 700 L 1200 700" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
              {MILESTONES.map((item, idx) => {
                const isEvenRow = Math.floor(idx / 3) === 1;
                const desktopOrder = isEvenRow ? (Math.floor(idx / 3) * 3 + (2 - (idx % 3))) : idx;
                const displayItem = MILESTONES[desktopOrder];

                return (
                  <div key={idx} className="relative group flex flex-col items-center lg:items-start">
                    <div className="absolute top-[38px] left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 z-20">
                       <div className="w-3 h-3 bg-taki-dark border-2 border-taki-orange rounded-full group-hover:bg-taki-orange group-hover:scale-150 transition-all duration-500 shadow-[0_0_15px_rgba(255,126,71,0.5)]"></div>
                    </div>

                    <div className="pt-16 text-center lg:text-left">
                      <span className="block font-black text-taki-orange text-4xl mb-4 tracking-tighter transition-transform group-hover:-translate-y-1">
                        {displayItem.year}
                      </span>
                      <h4 className="font-bold text-white text-base md:text-lg mb-4 uppercase tracking-wide">
                        {displayItem.title}
                      </h4>
                      <div className="text-[11px] md:text-[12px] font-medium text-white/50 space-y-2 max-w-[280px] leading-relaxed group-hover:text-white transition-colors">
                        {displayItem.lines.map((line, lIdx) => (
                          <p key={lIdx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HONORS 荣誉奖项 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <Award className="text-taki-orange" size={24} />
            <span className="text-taki-orange font-black tracking-[0.3em] uppercase text-xs">HONORS / 荣誉奖项</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {HONORS.map((title, idx) => (
              <div key={idx} className="flex gap-4 items-center group py-2 border-b border-taki-dark/5 hover:border-taki-orange/30 transition-colors">
                 <div className="w-1.5 h-1.5 rounded-full bg-taki-orange/40 group-hover:bg-taki-orange transition-colors shrink-0"></div>
                 <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-taki-dark truncate group-hover:text-taki-orange transition-colors">{title}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CULTURE 企业文化 */}
      <section className="py-32 bg-taki-beige overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <Compass className="text-taki-blue" size={24} />
            <span className="text-taki-blue font-black tracking-[0.3em] uppercase text-xs">CULTURE / 企业文化</span>
          </div>
          
          <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scrollbar-hide snap-x">
            {GALLERY.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden group aspect-video shrink-0 w-[85vw] md:w-[45vw] lg:w-full snap-center border border-taki-dark/5 shadow-sm">
                <img src={img} alt="Corporate Culture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-taki-orange/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-taki-orange group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CSR 公益社会责任 */}
      <section className="py-32 bg-white border-b border-taki-dark/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex justify-center mb-8">
               <Heart className="text-taki-orange animate-pulse" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-taki-dark uppercase tracking-tight">PUBLIC WELFARE / 社会责任</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Block 1: 聚焦个体 */}
            <div className="flex flex-col group">
              <div className="w-12 h-12 bg-taki-orange/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-taki-orange/10 transition-colors">
                 <Users className="text-taki-orange" size={24} />
              </div>
              <h3 className="text-xl font-black text-taki-dark mb-6 tracking-tight">聚焦个体：运动健康生活圈</h3>
              <p className="text-[13px] font-bold text-taki-dark/60 leading-relaxed uppercase tracking-tight">
                我们深知城市生活的快节奏挑战，组织多样化的户外运动。依托上海黄浦军校俱乐部与TAKISPORTS户外社区，每周为数以千计的年轻人开设飞盘、骑行、潜水等垂直兴趣活动。多元化的生活方式、感知自身未触达的边界，为青年群体提供一个有情有义、充满乐趣的乐活生活圈。
              </p>
              <div className="mt-8 w-8 h-[2px] bg-taki-orange group-hover:w-16 transition-all duration-500"></div>
            </div>

            {/* Block 2: 全民健康 */}
            <div className="flex flex-col group">
              <div className="w-12 h-12 bg-taki-blue/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-taki-blue/10 transition-colors">
                 <Activity className="text-taki-blue" size={24} />
              </div>
              <h3 className="text-xl font-black text-taki-dark mb-6 tracking-tight">全民健康：重塑生命张力</h3>
              <p className="text-[13px] font-bold text-taki-dark/60 leading-relaxed uppercase tracking-tight">
                集团创始人作为自由潜水世界冠军及中国国家纪录大满贯运动员，始终关注人类个体的运动极限与身心健康。我们将“一日进步，终生进步”的竞技精神融入企业文化，通过推广专业运动知识，鼓励每一个人在探索自然边界的同时，感知生命未触达的广度。
              </p>
              <div className="mt-8 w-8 h-[2px] bg-taki-blue group-hover:w-16 transition-all duration-500"></div>
            </div>

            {/* Block 3: 蓝色守护行动 */}
            <div className="flex flex-col group">
              <div className="w-12 h-12 bg-taki-orange/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-taki-orange/10 transition-colors">
                 <Waves className="text-taki-orange" size={24} />
              </div>
              <h3 className="text-xl font-black text-taki-dark mb-6 tracking-tight">蓝色守护行动：专业视角下的海洋环保</h3>
              <p className="text-[13px] font-bold text-taki-dark/60 leading-relaxed uppercase tracking-tight">
                作为深耕潜水领域的专业力量，极链集团长期关注海洋生态系统保护。我们利用创始人的行业影响力，积极推广自由潜认知度，倡导“无痕潜水”与海洋环境保护理念。我们通过数字化平台连接爱心，开展海底清道夫行动，用专业实践共同守护这片孕育生命的蓝色领土。
              </p>
              <div className="mt-8 w-8 h-[2px] bg-taki-orange group-hover:w-16 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};