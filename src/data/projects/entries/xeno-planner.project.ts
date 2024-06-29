import { ProjectFactory } from '@/src/data/projects';

export const XenoPlanerProject = new ProjectFactory()
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
