import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';
import { 
  Cpu, Layout, Database, Zap, 
  BrainCircuit, Activity, BarChart3, Target, ShieldCheck, Mail,
  Layers, Settings, Search, TrendingUp, Percent, BarChart
} from 'lucide-react';

const RISK_ALLOCATION = [
  { name: 'Systematic Alpha', value: 45, color: '#FF7E47' },
  { name: 'Risk Premia', value: 25, color: '#00D2FF' },
  { name: 'Tail Hedging', value: 15, color: '#FFD591' },
  { name: 'Arbitrage', value: 15, color: '#1A1A1A' },
];

// Simulated Institutional Performance Curve (Global Quant Composite Index)
const PERFORMANCE_BENCHMARK = [
  { time: '2015', yield: 100 },
  { time: '2017', yield: 215 },
  { time: '2019', yield: 382 },
  { time: '2021', yield: 645 },
  { time: '2023', yield: 912 },
  { time: '2025', yield: 1184 },
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
          
          {/* Left Content */}
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
                <Layers size={14} className="text-taki-orange" /> Analysis Framework / 业绩归因分析体系
              </h3>
              
              <div className="space-y-1">
                <LayerRow 
                  label="风险调整收益" 
                  subLabel="Risk-Adj Returns" 
                  colorClass="text-taki-orange"
                  icon={<Target size={18} />}
                  tags={["Sharpe Ratio", "Calmar Ratio", "Sortino Ratio", "Information Ratio"]}
                />
                <LayerRow 
                  label="回撤监控" 
                  subLabel="Drawdown Tracking" 
                  colorClass="text-taki-blue"
                  icon={<ShieldCheck size={18} />}
                  tags={["Max Drawdown", "Recovery Period", "Value at Risk (VaR)", "Volatility Cluster"]}
                />
                <LayerRow 
                  label="周期表现" 
                  subLabel="Cyclical Perf" 
                  colorClass="text-taki-orange"
                  icon={<BrainCircuit size={18} />}
                  tags={["5Y/10Y Cumulative", "CAGR", "Annualized Yield", "Rolling Returns"]}
                />
              </div>
            </div>

            {/* Contact Block */}
            <div className="relative group w-full md:w-64 h-14 overflow-hidden cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-taki-orange transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex items-center justify-center">
                <span className="text-white font-black tracking-[0.3em] text-xs uppercase">Consult Strategy</span>
              </div>
              <div className="absolute inset-0 bg-taki-dark transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2">
                <Mail size={14} className="text-taki-orange" />
                <span className="text-white font-black text-[10px] tracking-widest uppercase">1@videopls.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Terminal Monitoring */}
          <div className="w-full xl:w-3/5 bg-taki-dark border border-taki-orange/20 shadow-2xl overflow-hidden flex flex-col min-h-[600px]">
            {/* Terminal Header */}
            <div className="bg-[#111111] px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-taki-orange animate-pulse rounded-full"></div>
                <span className="text-white font-black tracking-[0.2em] text-[10px] uppercase">TAKI AI QUANT PERFORMANCE TERMINAL</span>
              </div>
              <div className="flex gap-4">
                {/* Text content removed per user request */}
              </div>
            </div>

            <div className="p-8 flex flex-col gap-8 flex-1">
              {/* Top Stats Row - Core Ratios (Based on Global Top Tier Benchmark) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 border border-white/5 group hover:border-taki-orange/20 transition-colors">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4 block">10Y Avg Return / 10年年平均收益率</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">29.11<span className="text-2xl text-taki-orange">%</span></span>
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-6 border border-white/5 group hover:border-taki-blue/20 transition-colors">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4 block">Sharpe Ratio / 夏普比率</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">3.84</span>
                    <TrendingUp size={16} className="text-taki-blue" />
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-6 border border-white/5 group hover:border-taki-orange/20 transition-colors">
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4 block">Calmar Ratio / 卡尔玛比率</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">3.21</span>
                  </div>
                </div>
              </div>

              {/* Middle Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1">
                {/* Donut Chart: Risk Metrics */}
                <div className="lg:col-span-2 bg-[#1a1a1a] p-6 border border-white/5 relative min-h-[250px]">
                  <h4 className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-6">Risk Control / 风险控制</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={RISK_ALLOCATION} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {RISK_ALLOCATION.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />)}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="text-xl font-black text-white">-9.06%</span>
                  </div>
                </div>

                {/* Area Chart: Historical Growth */}
                <div className="lg:col-span-3 bg-[#1a1a1a] p-6 border border-white/5 min-h-[250px] flex flex-col">
                   <h4 className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-6">Cumulative Growth Benchmark / 累计收益对标 (10Y)</h4>
                   <div className="flex-1">
                     <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={PERFORMANCE_BENCHMARK}>
                         <defs>
                           <linearGradient id="yieldColor" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#00D2FF" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#00D2FF" stopOpacity={0}/>
                           </linearGradient>
                         </defs>
                         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                         <XAxis dataKey="time" hide />
                         <YAxis hide domain={['dataMin', 'dataMax']} />
                         <Tooltip labelStyle={{color: '#fff'}} contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }} />
                         <Area type="monotone" dataKey="yield" stroke="#00D2FF" strokeWidth={3} fillOpacity={1} fill="url(#yieldColor)" />
                       </AreaChart>
                     </ResponsiveContainer>
                   </div>
                </div>
              </div>

              {/* Bottom Feature Grid - Requested 8-Metric Integration */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { icon: <TrendingUp size={14} />, label: "2025年收益率", val: "+18.42%", sub: "Yield 2025 YTD" },
                   { icon: <BarChart3 size={14} />, label: "5年收益率总和", val: "+214.5%", sub: "5Y Total Return" },
                   { icon: <Percent size={14} />, label: "5年年平均收益", val: "+25.76%", sub: "5Y CAGR" },
                   { icon: <BarChart size={14} />, label: "10年收益率总和", val: "+1,184.2%", sub: "10Y Total Return" }
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-4 border border-white/5 flex flex-col gap-2 hover:bg-taki-orange/5 transition-colors cursor-default group">
                       <div className="text-taki-orange group-hover:scale-110 transition-transform">{item.icon}</div>
                       <div className="text-[10px] font-black text-white uppercase tracking-wider">{item.label}</div>
                       <div className="text-lg font-black text-taki-blue">{item.val}</div>
                       <div className="text-[7px] font-black text-white/30 uppercase tracking-tighter">{item.sub}</div>
                    </div>
                 ))}
              </div>
            </div>
            
            {/* Terminal Marquee */}
            <div className="bg-[#111111] px-6 py-3 border-t border-white/5 flex justify-between items-center overflow-hidden">
               {/* Text content removed per user request */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};