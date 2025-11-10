##PsyHelp — застосунок для пошуку психологів

Адаптивний React-застосунок для компанії, що надає послуги психологів. Користувач може переглядати каталог спеціалістів, сортувати їх за різними критеріями, розкривати деталі з відгуками, додавати до “Обраного” та записуватися на консультацію. Авторизація, “обрані” та дані каталогу зберігаються у Firebase (Auth + Realtime Database).

Сторінки: Home / Psychologists / приватна Favorites
Технології: React, Vite, React Router, react-hook-form, yup, Firebase Auth, Firebase Realtime Database, TypeScript (опційно), Tailwind (або styled-components/SCSS), ESLint + Prettier.

#Функціонал (згідно ТЗ)

1. Авторизація (Firebase Auth): реєстрація, логін, отримання поточного користувача, логаут.

2. Форми (react-hook-form + yup): модальні форми реєстрації/логіну та “Make an appointment” з мінімальною валідацією. Закриття модалок — кнопка “хрестик”, клік по backdrop, клавіша Esc.

3. Каталог (Firebase Realtime Database): колекція psychologists з полями
name, avatar_url, experience, reviews, price_per_hour, rating, license, specialization, initial_consultation, about.

4. Картка психолога: верстка за макетом; кнопки “Read more” (розкриття деталей і відгуків) та “Make an appointment”.

5. Пагінація “Load more”: на сторінці Psychologists спочатку рендеряться 3 картки; по кліку підвантажується наступна порція з бази.

6. “Серце” — Обране:

- Неавторизований користувач: показати попередження про необхідність авторизації.

- Авторизований користувач: додати/прибрати зі списку “Обране”, змінити стан/колір іконки.

7. Персистентність: після оновлення сторінки для авторизованого користувача стан “обраного” зберігається.

8. Тогл “серця”: повторний клік видаляє з “обраного” і повертає початковий стан іконки.

9. Read more: розкриття повної інформації та відгуків у картці.

10. Make an appointment: модальне вікно із формою запису.

11. Закриття модалок: хрестик / backdrop / Esc.

12. Приватна сторінка Favorites: доступна лише авторизованим; стилістика як на сторінці Psychologists.

13. Роутинг: React Router (публічні та приватні маршрути).

14. Сортування на Psychologists:

- За іменем: A→Z, Z→A

- За ціною: від нижчої, від вищої

- За популярністю (рейтинг): від нижчого, від вищого

#Адаптивність та якість

- Гумова верстка від 320px до 1440px (коректно на мобільних/планшетах).

- Семантична та валідна HTML-розмітка.

- В консолі браузера без помилок.

- Код відформатований без коментарів (ESLint + Prettier).

#Технологічний стек

- React + Vite

- React Router v6+

- react-hook-form + yup

- Firebase: Authentication, Realtime Database (REST)

- UI: Tailwind CSS (або інша CSS-стратегія)

- Деплой: Vercel / Netlify / GitHub Pages

- Інструменти: ESLint, Prettier

#Архітектура та маршрути
src/
  components/
    AuthModal/
    AppointmentModal/
    Card/
    Header/
    SortBar/
    Pagination/
  pages/
    Home/
    Psychologists/
    Favorites/
  routes/
    AppRouter.tsx
    PrivateRoute.tsx
  services/
    firebase.ts
    db.ts           // REST-запити до Realtime DB
    auth.ts         // обгортки над Firebase Auth
  hooks/
  store/            // (опціонально) Zustand/Redux Toolkit
  utils/
  styles/


#Маршрути:

/ → Home

/psychologists → Psychologists

/favorites → Favorites (приватний, потребує auth.currentUser)

##Дані та схема Realtime Database
#Приклад структури
{
  "psychologists": {
    "-NvAbCdE123": {
      "name": "Анна Іваненко",
      "avatar_url": "https://.../anna.jpg",
      "experience": "7 років",
      "reviews": [
        { "author": "О.", "rating": 5, "comment": "Дуже допомогла", "date": "2025-01-10" }
      ],
      "price_per_hour": 45,
      "rating": 4.7,
      "license": "AB-123456",
      "specialization": ["Сімейна терапія", "EMDR"],
      "initial_consultation": "безкоштовна",
      "about": "Коротко про спеціаліста..."
    }
  },
  "users": {
    "uid_123": {
      "favorites": {
        "-NvAbCdE123": true
      }
    }
  }
}

#Правила безпеки (мінімальні)
{
  "rules": {
    "psychologists": { ".read": true, ".write": false },
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}

##Запуск проєкту
# встановлення залежностей
npm install

# локальний режим розробки
npm run dev

# продакшн-збірка
npm run build

# локальний прев’ю готової збірки
npm run preview

# лінт і форматування
npm run lint
npm run format

#Деплой
Vercel / Netlify

#Білд-команда: npm run build

Папка білду: dist

##Подальші поліпшення (опційно)

Збереження заявок на зустріч у users/{uid}/appointments.

Пошук та фільтри за спеціалізацією/ціною.

Lazy-loading зображень, prefetch наступної сторінки.

Темна тема.