import React from 'react';
import { FuturisticButton } from './UI/FuturisticButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-taki-beige pt-20">
      {/* Background Decorative Elements - matching the isometric image palette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft Orange Blobs */}
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-taki-orange/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-taki-blue/10 rounded-full blur-[100px] animate-blob"></div>
        
        {/* Grid Pattern reminiscent of technical drawings */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF7E4710_1px,transparent_1px),linear-gradient(to_bottom,#FF7E4710_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-8 bg-white/50 backdrop-blur-sm px-4 py-2 border border-taki-orange/20">
              <span className="w-2 h-2 bg-taki-orange rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-taki-orange uppercase">Empowering Global IP & Digital Evolution</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-6 leading-[0.9] tracking-tighter text-taki-dark uppercase">
              <span className="text-taki-orange">T</span>OSS <span className="text-taki-orange">A</span> <br/>
              <span className="text-taki-orange">K</span>IND <span className="text-taki-orange">I</span>MPACT
            </h1>
            
            <div className="flex flex-col items-center justify-center mb-16">
              <p className="max-w-2xl text-taki-dark/60 text-sm md:text-lg font-bold tracking-[0.2em] uppercase leading-relaxed text-center">
                Meeting the needs of future generations for innovation and a fulfilling life.
              </p>
            </div>

            <div className="flex justify-center mb-24">
              <FuturisticButton 
                onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-16 py-6"
              >
                View Our Services
              </FuturisticButton>
            </div>
        </div>

        {/* Professional Stats Board */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-taki-orange/20 bg-white shadow-2xl">
          <div className="p-10 border-b md:border-b-0 md:border-r border-taki-orange/10 hover:bg-taki-beige transition-colors group">
            <div className="text-6xl font-black text-taki-dark mb-4 group-hover:text-taki-blue transition-colors">400+</div>
            <div className="text-[10px] text-taki-dark/40 font-black tracking-[0.2em] uppercase">十年合作KA品牌</div>
          </div>
          <div className="p-10 border-b md:border-b-0 md:border-r border-taki-orange/10 hover:bg-taki-beige transition-colors group">
            <div className="text-6xl font-black text-taki-dark mb-4 group-hover:text-taki-orange transition-colors">139</div>
            <div className="text-[10px] text-taki-dark/40 font-black tracking-[0.2em] uppercase">国内外知名IP合作</div>
          </div>
          <div className="p-10 hover:bg-taki-beige transition-colors group">
            <div className="text-6xl font-black text-taki-dark mb-4 group-hover:text-taki-blue transition-colors">36W+</div>
            <div className="text-[10px] text-taki-dark/40 font-black tracking-[0.2em] uppercase">累计会员消费人数</div>
          </div>
        </div>

      </div>
    </section>
  );
};