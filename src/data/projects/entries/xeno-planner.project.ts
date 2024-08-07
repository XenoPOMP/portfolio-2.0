import { Priority, ProjectFactory } from '@/src/data/projects';

export const XenoPlanerProject = new ProjectFactory()
  .name('XENO Planner')
  .desc('Complex app')
  .priority(Priority.high)
  .frontendStack({
    react: true,
    typescript: true,
    nextjs: true,
  })
  .backendStack({
    nest: true,
    prisma: true,
  })
  .website('https://www.xenoplanner-dev.ru')
  .oss('https://github.com/XenoPOMP/xeno-planner')
  .buildup();
