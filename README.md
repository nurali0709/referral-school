# Система управления реферальной программой школы

Этот проект представляет собой приложение на Node.js, разработанное для управления реферальной программой школы. Приложение предоставляет функционал для генерации реферальных ссылок, регистрации студентов, обработки платежей и отслеживания рефералов. В проекте используется база данных SQLite, Redis для кэширования и интегрирован Swagger для документации API.

## Особенности

- **Генерация реферальных ссылок**: Генерация уникальных реферальных ссылок для рефереров.
- **Регистрация студентов**: Регистрация новых студентов с использованием реферальной ссылки.
- **Обработка платежей**: Добавление уроков как рефереру, так и приглашенному студенту после оплаты.
- **Статистика рефералов**: Отслеживание количества студентов, приглашенных каждым реферером.
- **Кэширование**: Redis используется для кэширования часто запрашиваемых данных.
- **Валидация**: Все входные данные валидируются с помощью `express-validator`.

## Необходимые условия

Перед началом работы убедитесь, что на вашем компьютере установлены следующие компоненты:

- **Node.js** (версия 14.x или выше)
- **npm**  (версия 6.x или выше)
- **SQLite** (автоматически управляется с помощью Sequelize)
- **Redis** (для кэширования)

## Начало работы

Следуйте этим инструкциям, чтобы запустить проект на вашем локальном компьютере.

### 1. Клонирование репозитория

```bash
git clone https://github.com/nurali0709/referral-school.git
cd referral-school
```

### 2. Установка зависимостей
```
npm install
```

### 3. Запуск приложенияRun
```
npm start
```

Вы можете получить доступ к документации API по адресу: `http://localhost:3000/api/docs`
