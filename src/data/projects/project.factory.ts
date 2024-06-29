import { Project } from './project';

/**
 * This factory provides a simple and intuitive interface
 * for creating project data records.
 *
 * @param init
 * @constructor
 *
 * @todo Realize chain function
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
