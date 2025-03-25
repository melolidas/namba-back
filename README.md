качаем проект "git clone https://github.com/melolidas/namba-back.git" устанавливаем зависимости через "npm i"

создаем файл .env в него пишем:

DATABASE_URL="postgresql://postgres:123@localhost:5432/namba"
JWT_SECRET = "DF3DWQDWQDWQ"

создаем базу данных "namba" через pg admin. В терминале пишем "prisma db push"

запускаем проект через "npm run start"

Эндпоинты:
Авторизация:
post: http://localhost:3000/api/auth/register

post: http://localhost:3000/api/auth/login

post: http://localhost:3000/api/user/profile

таски:
post: http://localhost:3000/api/user/tasks/

put: http://localhost:3000/api/user/tasks/:id

delete: http://localhost:3000/api/user/tasks/:id

если нужна будет более детальная инсирукция @lethalidentity