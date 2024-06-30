import { type StackTech } from '@/src/data/projects';

export interface StackViewProps {
  stack: Partial<Record<StackTech, boolean>>;
}
