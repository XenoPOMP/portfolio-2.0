import preview from '@/public/previews/smart-ace-preview.png';
import { Priority, ProjectFactory } from '@/src/data/projects';

export const SmartAceProject = new ProjectFactory()
  .name('Вебсайт SmartAce')
  .desc(
    'Этот проект - это мой курсовой проект за 2023 год. Тема проекта - веб-приложение для компании, предоставляющей IT-услуги.',
  )
  .previewImg(preview)
  .priority(Priority.medium)
  .frontendStack({
    react: true,
    vite: true,
    typescript: true,
    redux: true,
  })
  .backendStack({
    nest: true,
    mssql: true,
  })
  .website('https://xeno-coursework-2023.netlify.app/')
  .oss('https://github.com/XenoPOMP/coursework-2023')
  .buildup();
