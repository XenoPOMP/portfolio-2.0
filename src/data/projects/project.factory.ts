import type { Defined } from '@xenopomp/advanced-types';

import { Project } from './project';

/**
 * This factory provides a simple and intuitive interface
 * for creating project data records.
 *
 * @param init
 * @constructors
 */
export class ProjectFactory {
  private readonly project: Project;

  constructor() {
    this.project = new Project();
  }

  /**
   * Marks project as website. That means, that you have
   * to provide URL to uploaded website.
   * @param href   URL address of deployed site.
   */
  website(href: string) {
    this.setPrimaryText('Посетить сайт');
    this.setPrimaryLink(href);
    this.togglePrimaryButton(true);
    return this;
  }

  // Marks project as "open source", that means
  // that you CAN post link to repo.
  oss(href: string) {
    this.setSecondaryText('Исход. код');
    this.setSecondaryLink(href);
    this.toggleSecondaryButton(true);
    return this;
  }

  // Marks project as non-"open source", that means
  // that you can not post link to repo.
  nonOSS() {
    this.setSecondaryText(undefined);
    this.setSecondaryLink(undefined);
    this.toggleSecondaryButton(false);
    return this;
  }

  // Setup frontend stack
  frontendStack(stackObj: typeof Project.prototype.frontendStack) {
    this.project.frontendStack = stackObj;
    return this;
  }

  // Setup backend stack
  backendStack(stackObj: typeof Project.prototype.backendStack) {
    this.project.backendStack = stackObj;
    return this;
  }

  // Setup project name
  name(str: string) {
    this.project.name = str;
    return this;
  }

  // Setup project description
  desc(...str: string[]) {
    this.project.description = str;
    return this;
  }

  // Setup project preview image
  previewImg(img: Defined<typeof Project.prototype.previewImg>) {
    this.project.previewImg = img;
    return this;
  }

  /** Returns the project you configured */
  buildup = () => this.project;

  private setPrimaryText(text?: string) {
    this.project.primaryButton.text = text;
  }

  private setPrimaryLink(link?: string) {
    this.project.primaryButton.link = link;
  }

  private togglePrimaryButton(newState: boolean) {
    this.project.primaryButton.disabled = !newState;
  }

  private setSecondaryText(text?: string) {
    this.project.secondaryButton.text = text;
  }

  private setSecondaryLink(link?: string) {
    this.project.secondaryButton.link = link;
  }

  private toggleSecondaryButton(newState: boolean) {
    this.project.secondaryButton.disabled = !newState;
  }
}
