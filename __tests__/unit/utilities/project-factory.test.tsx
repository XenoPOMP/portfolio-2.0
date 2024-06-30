import { describe, expect, test } from 'vitest';

import { expectToDeepEqual } from '@/__tests__/assets/utilities';
import { Project, ProjectFactory } from '@/src/data/projects';

describe('ProjectFactory tests', () => {
  test('Buildup works', () => {
    const factory = new ProjectFactory();
    const build = factory.buildup();

    expect(factory).toBeInstanceOf(ProjectFactory);
    expect(build).toBeInstanceOf(Project);
  });

  test('Chain functions work', () => {
    const factory = new ProjectFactory();

    expect(factory.website('nonsense')).toBeInstanceOf(ProjectFactory);
    expect(factory.name('nonsense')).toBeInstanceOf(ProjectFactory);
    expect(factory.oss('nonsense')).toBeInstanceOf(ProjectFactory);
    expect(factory.nonOSS()).toBeInstanceOf(ProjectFactory);
    expect(factory.frontendStack({})).toBeInstanceOf(ProjectFactory);
  });

  test('Website projects are handled', () => {
    const url = 'i will not paste here any url...';
    const factory = new ProjectFactory().website(url).buildup();

    expectToDeepEqual(factory.primaryButton, {
      text: 'Посетить сайт',
      link: url,
      disabled: false,
    });
  });

  test('OSS projects are handled', () => {
    const url = 'i will not paste here any url...';
    const factory = new ProjectFactory().oss(url).buildup();

    expectToDeepEqual(factory.secondaryButton, {
      disabled: false,
      link: url,
      text: 'Исход. код',
    });
  });

  test('Non OSS projects are handled', () => {
    const factory = new ProjectFactory().nonOSS().buildup();

    expectToDeepEqual(factory.secondaryButton, {
      disabled: true,
      link: undefined,
      text: undefined,
    });
  });

  test('Frontend stack is handled', () => {
    const build = new ProjectFactory()
      .frontendStack({
        react: true,
        vite: false,
      })
      .buildup();

    expectToDeepEqual(build.frontendStack, {
      react: true,
      vite: false,
    });
  });

  test('Backend stack is handled', () => {
    const build = new ProjectFactory()
      .backendStack({
        nest: true,
      })
      .buildup();

    expectToDeepEqual(build.backendStack, {
      nest: true,
    });
  });

  test('Project name is handled', () => {
    const name = 'Mock name';
    const build = new ProjectFactory().name(name).buildup();

    expect(build.name).toBe(name);
  });
});
