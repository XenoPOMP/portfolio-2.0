export interface IButtonLabels {
  text?: string;
  link?: string;
  disabled?: boolean;
}

export class Project {
  primaryButton: IButtonLabels = {};
  secondaryButton: IButtonLabels = {};
}
