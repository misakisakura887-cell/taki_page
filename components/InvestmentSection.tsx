import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar
} from 'recharts';
import { 
  Cpu, Layout, Database, Zap, 
  BrainCircuit, Activity, BarChart3, Target, ShieldCheck, Mail,
  Layers, Settings, Search, TrendingUp
} from 'lucide-react';

const ASSET_ALLOCATION = [
  { name: 'Alpha Strategy', value: 40, color: '#FF7E47' },
  { name: 'Index Enhanced', value: 25, color: '#00D2FF' },
  { name: 'CTA/Futures', value: 20, color: '#FFD591' },
  { name: 'Risk Hedging', value: 15, color: '#1A1A1A' },
];

const PERFORMANCE_TREND = [
  { time: '09:30', alpha: 10 },
  { time: '10:30', alpha: 25 },
  { time: '11:30', alpha: 18 },
  { time: '13:30', alpha: 42 },
  { time: '14:30', alpha: 35 },
  { time: '15:00', alpha: 56 },
];

const FACTOR_EXPOSURE = [
  { factor: 'Value', value: 65 },
  { factor: 'Growth', value: 80 },
  { factor: 'Momentum', value: 45 },
  { time: 'Volatility', value: 30 },
];

interface ArchitectureTagProps {
  label: string;
}

const ArchitectureTag: React.FC<ArchitectureTagProps> = ({ label }) => (
  <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-taki-orange/5 px-2.5 py-1.5 rounded-sm hover:border-taki-orange/30 hover:bg-white transition-all group/tag shadow-sm cursor-default">
    <div className="w-1.5 h-1.5 bg-taki-dark/20 group-hover/tag:bg-taki-orange transition-colors rotate-45 shrink-0"></div>
    <span className="text-[10px] md:text-[11px] font-bold text-taki-dark/80 whitespace-nowrap group-hover/tag:text-taki-dark transition-colors">{label}</span>
  </div>
);

interface LayerRowProps {
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  tags: string[];
  colorClass: string;
}

const LayerRow: React.FC<LayerRowProps> = ({ label, subLabel, icon, tags, colorClass }) => (
  <div className="flex flex-col lg:flex-row gap-3 py-4 border-b border-taki-dark/5 last:border-0 group/row">
    <div className={`flex items-center gap-3 w-32 shrink-0 ${colorClass}`}>
      <div className="transition-transform group-hover/row:scale-110 duration-500 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-black text-taki-dark leading-none">{label}</span>
        <span className="text-[7px] font-black opacity-30 uppercase tracking-tighter mt-1">{subLabel}</span>
      </div>
    </div>
    <div className="flex flex-wrap gap-1.5 flex-1">
      {tags.map((tag, idx) => (
        <ArchitectureTag key={idx} label={tag} />
      ))}
    </div>
  </div>
);

export const InvestmentSection: React.FC = () => {
  return (
    <section id="investment" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row gap-16">
          
          {/* Left Content - Core Philosophy & AI Quant Architecture */}
          <div className="w-full xl:w-2/5 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="text-taki-orange" size={24} />
              <span className="text-taki-orange font-black tracking-[0.3em] uppercase text-xs">AI科技 / AI QUANT SERVICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-taki-dark mb-8 leading-[1.1] uppercase">
              AI Powered <br/> Quant Evolution
            </h2>
            <p className="text-taki-dark/60 mb-10 text-sm md:text-base leading-relaxed font-bold tracking-tight">
              我们为客户提供顶尖的“AI量化交易服务”，通过自主研发的分布式算力集群与深度学习模型，精准识别市场微观结构中的 Alpha 机会。从策略研发到实时风控，构建下一代智能资产配置体系。
            </p>

            {/* AI Quant Architecture Layers */}
            <div className="bg-taki-beige/40 p-6 md:p-8 border border-taki-orange/5 shadow-inner mb-8 rounded-sm">
              <h3 className="text-[10px] font-black text-taki-dark/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Layers size={14} className="text-taki-orange" /> Quant Stack / AI量化服务架构
              </h3>
              
              <div className="space-y-1">
                <LayerRow 
                  label="策略应用" 
                  subLabel="Strategies" 
                  colorClass="text-taki-orange"
                  icon={<Target size={18} />}
                  tags={["指数增强", "多因子选股", "CTA策略", "统计套利", "期权对冲", "算法交易"]}
                />
                <LayerRow 
                  label="风控引擎" 
                  subLabel="Risk Engine" 
                  colorClass="text-taki-blue"
                  icon={<ShieldCheck size={18} />}
                  tags={["实时风控", "组合优化", "因子分析", "绩效归因", "交易网关", "回测系统"]}
                />
                <LayerRow 
                  label="AI能力层" 
                  subLabel="AI & Models" 
                  colorClass="text-taki-orange"
                  icon={<BrainCircuit size={18} />}
                  tags={["机器学习模型", "深度学习", "知识图谱", "情绪分析", "因子挖掘机", "算力集群"]}
                />
                <LayerRow 
                  label="数据底座" 
                  subLabel="Data Layer" 
                  colorClass="text-taki-dark/30"
                  icon={<Database size={18} />}
                  tags={["Level-2行情", "宏观数据", "替代数据", "新闻舆情", "链上数据"]}
                />
              </div>
            </div>

            {/* Hover Contact Block */}
            <div className="relative group w-full md:w-64 h-14 overflow-hidden cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-taki-orange transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex items-center justify-center">
                <span className="text-white font-black tracking-[0.3em] text-xs uppercase">Contact Us</span>
              </div>
              <div className="absolute inset-0 bg-taki-dark transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2">
                <Mail size={14} className="text-taki-orange" />
                <span className="text-white font-black text-[10px] tracking-widest">1@VIDEOPLS.COM</span>
              </div>
            </div>
          </div>

          {/* Right Content - AI QUANT TERMINAL MONITORING */}
          <div className="w-full xl:w-3/5 bg-taki-dark border border-taki-orange/20 shadow-2xl overflow-hidden flex flex-col min-h-[600px]">
            {/* Terminal Header */}
            <div className="bg-[#111111] px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-taki-orange animate-pulse rounded-full"></div>
                <span className="text-white font-black tracking-[0.2em] text-[10px] uppercase">TAKI AI QUANT MONITORING TERMINAL v2.8</span>
              </div>
              <div className="flex gap-4">
                <span className="text-white/30 text-[9px] font-bold">ALPHA ACTIVE</span>
                <span className="text-taki-blue text-[9px] font-black bg-taki-blue/10 px-2 py-0.5 border border-taki-blue/20 uppercase">HFT Mode</span>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-8 flex-1">
              {/* Top Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 border border-white/5 group hover:border-taki-orange/20 transition-colors">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4 block">Win Rate / 胜率</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">64.2<span className="text-2xl text-taki-orange">%</span></span>
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-6 border border-white/5 group hover:border-taki-blue/20 transition-colors">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4 block">Sharpe Ratio / 夏普比率</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">4.85</span>
                    <TrendingUp size={16} className="text-taki-blue" />
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-6 border border-white/5 group hover:border-taki-orange/20 transition-colors">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4 block">Annual Alpha / 年化超额</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">+32.4<span className="text-2xl text-taki-orange">%</span></span>
                  </div>
                </div>
              </div>

              {/* Middle Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1">
                {/* Donut Chart: Strategy Allocation */}
                <div className="lg:col-span-2 bg-[#1a1a1a] p-6 border border-white/5 relative min-h-[250px]">
                  <h4 className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-6">Strategy Distribution / 策略分布</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ASSET_ALLOCATION} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {ASSET_ALLOCATION.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />)}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block">AI Cluster</span>
                    <span className="text-xl font-black text-white">READY</span>
                  </div>
                </div>

                {/* Area Chart: Intraday Alpha */}
                <div className="lg:col-span-3 bg-[#1a1a1a] p-6 border border-white/5 min-h-[250px] flex flex-col">
                   <h4 className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-6">Intraday Alpha Momentum / 日内Alpha动量</h4>
                   <div className="flex-1">
                     <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={PERFORMANCE_TREND}>
                         <defs>
                           <linearGradient id="quantColor" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#FF7E47" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#FF7E47" stopOpacity={0}/>
                           </linearGradient>
                         </defs>
                         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                         <XAxis dataKey="time" hide />
                         <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                         <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }} />
                         <Area type="monotone" dataKey="alpha" stroke="#FF7E47" strokeWidth={3} fillOpacity={1} fill="url(#quantColor)" />
                       </AreaChart>
                     </ResponsiveContainer>
                   </div>
                </div>
              </div>

              {/* Bottom Feature Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { icon: <Activity size={14} />, label: "风控预警", sub: "Risk Monitoring" },
                   { icon: <Settings size={14} />, label: "策略调优", sub: "Strategy Opt" },
                   { icon: <TrendingUp size={14} />, label: "实盘追踪", sub: "Live Execution" },
                   { icon: <Search size={14} />, label: "因子归因", sub: "Attribution" }
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-4 border border-white/5 flex flex-col gap-2 hover:bg-taki-orange/5 transition-colors cursor-default">
                       <div className="text-taki-orange">{item.icon}</div>
                       <div className="text-[10px] font-black text-white uppercase tracking-wider">{item.label}</div>
                       <div className="text-[7px] font-black text-white/30 uppercase tracking-tighter">{item.sub}</div>
                    </div>
                 ))}
              </div>
            </div>
            
            {/* Terminal Marquee */}
            <div className="bg-[#111111] px-6 py-3 border-t border-white/5 flex justify-between items-center overflow-hidden">
               <div className="flex gap-12 whitespace-nowrap animate-marquee">
                  <span className="text-[8px] font-bold text-white/20 tracking-widest uppercase">STRATEGY: MULTI-FACTOR_ENHANCED_V3 [EXECUTING]</span>
                  <span className="text-[8px] font-bold text-white/20 tracking-widest uppercase">LATENCY: 0.12ms [OPTIMAL]</span>
                  <span className="text-[8px] font-bold text-white/20 tracking-widest uppercase">MODELS: TRANSFORMER_QUANT_CORE_V1.2 [ACTIVE]</span>
                  <span className="text-[8px] font-bold text-white/20 tracking-widest uppercase">SIGNAL_GEN: 1,245 ops/sec</span>
               </div>
               <span className="text-white/40 text-[8px] font-black uppercase whitespace-nowrap ml-8">Powered by TAKI Distributed Quant Engine</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};