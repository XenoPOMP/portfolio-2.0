import {
  type IconType,
  SiMicrosoftsqlserver,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons';

import { type StackTech } from './project';

// Dict of all stack technologies icons
export const techIcons: Record<
  StackTech,
  {
    icon: IconType;
    color?: string;
  }
> = {
  react: {
    icon: SiReact,
    color: '#61DAFB',
  },
  vite: {
    icon: SiVite,
    color: '#646CFF',
  },
  typescript: {
    icon: SiTypescript,
    color: '#3178C6',
  },
  redux: {
    icon: SiRedux,
    color: '#764ABC',
  },
  nextjs: {
    icon: SiNextdotjs,
    color: '#000000',
  },
  nest: {
    icon: SiNestjs,
    color: '#E0234E',
  },
  prisma: {
    icon: SiPrisma,
    color: '#2D3748',
  },
  mssql: {
    icon: SiMicrosoftsqlserver,
    color: 'red',
  },
};
