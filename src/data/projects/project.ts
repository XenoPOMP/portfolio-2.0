import type Image from 'next/image';
import { type ComponentProps } from 'react';

export interface IButtonLabels {
  text?: string;
  link?: string;
  disabled?: boolean;
}

export type FrontendTech = 'react' | 'vite' | 'typescript' | 'redux' | 'nextjs';
export type BackendTech = 'nest' | 'prisma' | 'mssql';

/* eslint-disable no-unused-vars */
export enum Priority {
  high = 1,
  medium = 0,
  low = -1,
}
/* eslint-enable no-unused-vars */

// All possible technologies (both frontend and backend)
export type StackTech = FrontendTech | BackendTech;

export class Project {
  name?: string;
  description?: string[];
  previewImg?: Pick<ComponentProps<typeof Image>, 'src'>['src'];

  priority: Priority = Priority.medium;

  primaryButton: IButtonLabels = {};
  secondaryButton: IButtonLabels = {};

  frontendStack: Partial<Record<FrontendTech, boolean>> = {};
  backendStack: Partial<Record<BackendTech, boolean>> = {};
}
