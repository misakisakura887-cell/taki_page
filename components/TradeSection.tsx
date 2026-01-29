import React from 'react';
import { Container, ArrowUp, Truck, Globe, Share2, Layers } from 'lucide-react';

interface ServiceBlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, description, icon }) => (
  <div className="flex flex-col h-full group p-8 bg-white border border-taki-orange/5 hover:border-taki-orange/20 transition-all duration-500 hover:shadow-2xl hover:shadow-taki-orange/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity text-taki-orange">
      <ArrowUp size={32} />
    </div>
    
    <div className="mb-10 text-taki-dark group-hover:text-taki-orange transition-colors">
      {icon}
    </div>
    
    <h3 className="text-2xl font-black text-taki-dark mb-6 leading-tight group-hover:translate-x-1 transition-transform">
      {title}
    </h3>
    
    <p className="text-sm text-taki-dark/60 font-bold leading-relaxed uppercase tracking-tight">
      {description}
    </p>

    <div className="mt-auto pt-8 flex items-center gap-2">
       <div className="h-[2px] w-8 bg-taki-orange group-hover:w-full transition-all duration-700"></div>
    </div>
  </div>
);

export const TradeSection: React.FC = () => {
  return (
    <section id="trade" className="py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Container className="text-taki-blue" size={24} />
              <span className="text-taki-blue font-black tracking-[0.4em] uppercase text-xs">威连电商/Brand E-commerce Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-taki-dark leading-[1.0] uppercase mb-8">
              Smart <span className="text-taki-blue">Growth</span> <br/> Global Supply
            </h2>
            <p className="text-taki-dark/60 text-sm md:text-base leading-relaxed font-bold tracking-tight max-w-xl">
              深耕以品牌电商为核心的一站式商业解决方案与整合供应链。我们提供涵盖品牌托盘、全链路运营、数字营销、智能仓储及通路拓展的五大核心服务。战略聚焦国内拼多多及出海品牌电商渠道，凭借对 IP 价值的深度挖掘与流量算法的精准匹配，实现业务跨越式增长。我们不仅是渠道的建设者，更是连接品牌、IP 与下一代价值网络的价值放大器。
            </p>
          </div>
          <p className="text-taki-dark/40 font-black tracking-widest uppercase text-xs mt-8 md:mt-0">
            GLOBAL DISTRIBUTION NETWORK
          </p>
        </div>

        {/* The 4 Core Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceBlock 
            icon={<Layers size={40} strokeWidth={2.5} />}
            title="经销托盘服务"
            description="为品牌提供经销托盘服务，承担资金、物流、商务对接服务"
          />
          <ServiceBlock 
            icon={<Globe size={40} strokeWidth={2.5} />}
            title="线上平台运营"
            description="提供天猫超市、京东、 拼多多 等渠道整体代运营服务。"
          />
          <ServiceBlock 
            icon={<Truck size={40} strokeWidth={2.5} />}
            title="仓储物流"
            description="上海运营中心，38个云仓服务，省市重点城市全覆盖"
          />
          <ServiceBlock 
            icon={<Share2 size={40} strokeWidth={2.5} />}
            title="品牌分销体系搭建及通路营销"
            description="帮助品牌拓展及管理分销体系，站内外内容、付费流量、私域流量运营服务"
          />
        </div>

        {/* Bottom Banner Stats */}
        <div className="mt-20 p-12 bg-taki-dark text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
           {/* Operations */}
           <div className="group">
              <div className="text-[10px] font-black tracking-[0.3em] text-taki-orange uppercase mb-4 group-hover:translate-x-1 transition-transform">Operations</div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <span className="text-taki-orange text-6xl font-black leading-none">5</span>
                <span className="text-xs font-black tracking-widest opacity-80 uppercase pt-2">大运营中心</span>
              </div>
           </div>
           
           {/* Annual Growth */}
           <div className="group">
              <div className="text-[10px] font-black tracking-[0.3em] text-taki-blue uppercase mb-4 group-hover:translate-x-1 transition-transform">Annual Growth</div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <span className="text-taki-blue text-5xl font-black leading-none">32%</span>
                <span className="text-xs font-black tracking-widest opacity-80 uppercase pt-2">每年增长</span>
              </div>
           </div>

           {/* Revenue Milestone */}
           <div className="group">
              <div className="text-[10px] font-black tracking-[0.3em] text-taki-orange uppercase mb-4 group-hover:translate-x-1 transition-transform">Revenue Milestone</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 whitespace-nowrap">
                   <span className="text-taki-orange text-5xl font-black leading-none">30亿</span>
                   <span className="text-xs font-black tracking-widest opacity-80 uppercase pt-1">突破营业额</span>
                </div>
                <span className="text-[9px] font-black text-white/30 tracking-[0.2em] uppercase">至2025年累计</span>
              </div>
           </div>

           {/* Store Benchmark */}
           <div className="group">
              <div className="text-[10px] font-black tracking-[0.3em] text-taki-blue uppercase mb-4 group-hover:translate-x-1 transition-transform">Store Benchmark</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 whitespace-nowrap">
                   <span className="text-taki-blue text-[2.75rem] font-black leading-none">5000万</span>
                   <span className="text-xs font-black tracking-widest opacity-80 uppercase pt-1">单店业绩</span>
                </div>
                <span className="text-[9px] font-black text-white/30 tracking-[0.2em] uppercase">2024年销售额突破</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};