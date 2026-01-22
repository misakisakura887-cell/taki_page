export interface NavItem {
  label: string;
  href: string;
}

export interface InvestmentData {
  year: string;
  roi: number;
  market: string;
}

export interface TradeMetric {
  region: string;
  value: number;
  label: string;
}

export interface ProductItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}