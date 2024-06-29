export interface IButtonLabels {
  text?: string;
  link?: string;
  disabled?: boolean;
}

export type FrontendTech = 'react' | 'vite';
export type BackendTech = 'nest' | 'prisma';

// All possible technologies (both frontend and backend)
export type StackTech = FrontendTech | BackendTech;

export class Project {
  primaryButton: IButtonLabels = {};
  secondaryButton: IButtonLabels = {};
  frontendStack: Partial<Record<FrontendTech, boolean>> = {};
  backendStack: Partial<Record<BackendTech, boolean>> = {};
}
