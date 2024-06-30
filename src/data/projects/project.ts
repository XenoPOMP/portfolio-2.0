export interface IButtonLabels {
  text?: string;
  link?: string;
  disabled?: boolean;
}

export type FrontendTech = 'react' | 'vite' | 'typescript' | 'redux' | 'nextjs';
export type BackendTech = 'nest' | 'prisma' | 'mssql';

// All possible technologies (both frontend and backend)
export type StackTech = FrontendTech | BackendTech;

export class Project {
  name?: string;
  description?: string;

  primaryButton: IButtonLabels = {};
  secondaryButton: IButtonLabels = {};

  frontendStack: Partial<Record<FrontendTech, boolean>> = {};
  backendStack: Partial<Record<BackendTech, boolean>> = {};
}
