import { Project } from './project';

type Buildup = () => Project;

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

  /** Returns the project you configured */
  buildup: Buildup = () => this.project;
}
