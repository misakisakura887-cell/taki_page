import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-taki-beige pt-20 pb-0 overflow-hidden">
      {/* 顶部过渡渐变 - 保持色调统一 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-taki-beige to-transparent z-10 pointer-events-none"></div>

      {/* TAKI CITY PARK 插画背景 - 设置为底部对齐 */}
      <div 
        className="absolute inset-0 z-0 opacity-100 select-none pointer-events-none"
        style={{
          backgroundImage: 'url("https://r2.erweima.ai/ai_image/95c65f24-699a-41f8-9585-17796d87e07b.png")', 
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 信息层 - 紧凑排列 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 inline-block">
               <Logo />
            </div>
            <div className="max-w-sm">
              <p className="text-taki-dark font-black uppercase tracking-[0.15em] text-[11px] leading-relaxed">
                MEETING THE NEEDS OF FUTURE GENERATIONS OF HUMANKIND FOR INNOVATION AND A FULFILLING LIFE.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-taki-dark font-black uppercase tracking-[0.3em] text-[11px] mb-8 flex items-center gap-3">
              SECTORS <span className="text-taki-dark/20">/</span> 业务板块
            </h4>
            <ul className="space-y-4 text-taki-dark font-black uppercase tracking-[0.2em] text-[10px]">
              <li className="hover:text-taki-orange cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="w-1.5 h-1.5 bg-taki-orange opacity-40 group-hover:opacity-100 transition-opacity rotate-45"></span>
                AI科技
              </li>
              <li className="hover:text-taki-orange cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => document.getElementById('mart')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="w-1.5 h-1.5 bg-taki-orange opacity-40 group-hover:opacity-100 transition-opacity rotate-45"></span>
                IP商业
              </li>
              <li className="hover:text-taki-blue cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => document.getElementById('trade')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="w-1.5 h-1.5 bg-taki-blue opacity-40 group-hover:opacity-100 transition-opacity rotate-45"></span>
                品牌电商
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-taki-dark font-black uppercase tracking-[0.3em] text-[11px] mb-8 flex items-center gap-3">
              CONTACT <span className="text-taki-dark/20">/</span> 联系我们
            </h4>
            <ul className="space-y-4 text-taki-dark font-black uppercase tracking-[0.1em] text-[10px]">
              <li className="flex items-start gap-3 hover:text-taki-orange cursor-pointer group transition-colors">
                <Phone size={14} className="mt-0.5 shrink-0 text-taki-orange" />
                <span className="tracking-[0.2em]">021-63139159</span>
              </li>
              <li className="flex items-start gap-3 hover:text-taki-blue cursor-pointer group transition-colors">
                <Mail size={14} className="mt-0.5 shrink-0 text-taki-blue" />
                <span className="tracking-[0.2em]">SUPPORT@VIDEOPLS.COM</span>
              </li>
              <li className="flex items-start gap-3 hover:text-taki-orange cursor-pointer group transition-colors">
                <MapPin size={14} className="mt-0.5 shrink-0 text-taki-orange" />
                <span className="leading-relaxed tracking-wider">上海市静安区永和路118弄<br/>东方环球企业中心26号楼</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 最底部版权条 - 保持简洁 */}
        <div className="relative z-20 border-t border-taki-dark/5 py-10 mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-taki-dark/50 uppercase tracking-[0.4em]">
          <p>&copy; 2026 TAKI IMPACTING THE FUTURE.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-taki-orange cursor-pointer transition-colors">PRIVACY POLICY</span>
            <span className="hover:text-taki-blue cursor-pointer transition-colors">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};