# pnpm-monorepo

Пример monorepo с использованием __pnpm__.

## Примеры

- `apps/web` - Web-приложение __TypeScript__
- `apps/web-vue` - Web-приложение на __Vue__ + __TypeScript__ + __TailwindCSS__ + __PrimeVue__
- `packages/tsconfig` - Общие конфигурации __TypeScript__ (`tsconfig`) для использования в приложениях и пакетах
- `packages/tailwind` - Общая конфигурация __TailwindCSS__
- `packages/utils` - Общие __Utils__ для использования в других пакетах и приложениях

## TODO

- [x] Добавить приложение используя __Vue 3__ + __Vite__ + __TypeScript__
- [x] Добавить поддержку __TailwindCSS__ с конфигурацией в `packages/tailwind`
- [x] Добавить PrimeVue в `apps/web-vue`
- [ ] Добавить библиотеку компонентов для Vue приложений
- [ ] Добавить в `packages` библиотеку с __переиспользуемыми блоками__ и __composables__ для __Vue__ приложений. 
- [ ] Настроить CI
