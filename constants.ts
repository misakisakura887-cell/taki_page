import { InvestmentData, TradeMetric, ProductItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'AI科技', href: '#investment' },
  { label: 'IP商业', href: '#mart' },
  { label: '品牌电商', href: '#trade' },
  { label: 'ABOUT', href: '#about-container' },
];

export const INVESTMENT_DATA: InvestmentData[] = [
  { year: '2021', roi: 45, market: 'Initial AI Dev' },
  { year: '2022', roi: 120, market: 'Web3 Expansion' },
  { year: '2023', roi: 185, market: 'Global Stocks' },
  { year: '2024', roi: 267, market: 'Diversified Portfolio' },
  { year: '2025', roi: 353, market: 'Projected' },
];

export const TRADE_DATA: TradeMetric[] = [
  { region: 'China', value: 45, label: 'Sourcing' },
  { region: 'Middle East', value: 35, label: 'Distribution' },
  { region: 'Global', value: 20, label: 'Other Markets' },
];

export const MART_PRODUCTS: ProductItem[] = [
  { 
    id: 1, 
    title: 'IP DERIVATIVE LICENSING', 
    category: 'IP授权衍生', 
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'FAN SOCIAL INTERACTION', 
    category: '粉丝社交', 
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'BRAND CROSSOVER COLLABORATION', 
    category: '品牌跨界', 
    imageUrl: 'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    title: 'OMNICHANNEL MARKETING', 
    category: '全域营销', 
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop' 
  },
];
