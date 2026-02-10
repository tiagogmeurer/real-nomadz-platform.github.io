import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  badges: string[];
  imageIcon: LucideIcon;
  status: 'active' | 'coming_soon';
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}