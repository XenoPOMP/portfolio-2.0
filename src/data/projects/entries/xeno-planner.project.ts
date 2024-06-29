import { ProjectFactory } from '@/src/data/projects';

export const XenoPlanerProject = new ProjectFactory()
  .website('https://www.xenoplanner-dev.ru')
  .oss('https://github.com/XenoPOMP/xeno-planner')
  .buildup();
