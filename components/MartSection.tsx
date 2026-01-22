import React from 'react';
import { MART_PRODUCTS } from '../constants';
import { ShoppingBag } from 'lucide-react';

export const MartSection: React.FC = () => {
  return (
    <section id="mart" className="py-32 bg-taki-beige relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="text-taki-orange" size={24} />
              <span className="text-taki-orange font-black tracking-[0.3em] uppercase text-xs">TAKIMART / 全球IP商业伙伴</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-taki-dark uppercase leading-none mb-8">
              Spark <span className="text-taki-orange">Love</span> <br/> Inflame <span className="text-taki-orange">Life</span>
            </h2>
            <p className="text-taki-dark/60 text-sm md:text-base leading-relaxed font-bold tracking-tight max-w-xl">
              连续 6 年领跑国内综艺 IP 市场，提供授权衍生与全域营销等全链路服务。深度挖掘多元 IP 价值，结合 AI 算法驱动商业升级，致力于构建链接全球顶级 IP 的价值交换生态。
            </p>
          </div>
          <p className="text-taki-dark/40 font-black tracking-widest uppercase text-xs mt-6 md:mt-0">
            Global Business Partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MART_PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-white border border-taki-orange/5 mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-taki-dark text-white text-[8px] font-black px-3 py-1 tracking-widest uppercase">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-taki-dark font-black uppercase tracking-widest text-sm mb-2 transition-colors">
                {product.title}
              </h3>
              <div className="w-8 h-1 bg-taki-orange/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};