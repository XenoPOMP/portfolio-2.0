import {
  type IconType,
  SiMicrosoftsqlserver,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons';

import { type StackTech } from './project';

// Dict of all stack technologies icons
export const techIcons: Record<StackTech, IconType> = {
  react: SiReact,
  vite: SiVite,
  typescript: SiTypescript,
  redux: SiTypescript,
  nextjs: SiNextdotjs,
  nest: SiNestjs,
  prisma: SiPrisma,
  mssql: SiMicrosoftsqlserver,
};
