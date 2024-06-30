import preview from '@/public/mocks/mock-preview.png';
import { Priority, ProjectFactory } from '@/src/data/projects';

export const SmartAceProject = new ProjectFactory()
  .name('Вебсайт SmartAce')
  .desc('Complex app')
  .previewImg(preview)
  .priority(Priority.medium)
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
