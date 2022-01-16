// Node.js가 최신 자바스크립트 문법들은 지원하지만, 모듈 시스템으로 CommonJs를 채택했기 때문에 ES 모듈 시스템은 사용할 수 없다고 한다.
// Node.js에서 ES 모듈을 사용하려면 설정이 필요한데, 이전에는 Babel 같은 transpiler를 이용해서 ES6 이전의 문법으로 변환해주는 과정이 필요했다.
// 그러나 Node.js 13버전부터는 ES6 모듈을 지원해서 설정을 통해 import / export를 사용할 수 있다
//import는 호이스팅이 된다.
// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config.js';
import express, { json } from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import session from 'express-session';
// import cookieParser from 'cookie-parser';
// import FileStore from 'session-file-store';

//import routes
// import sequelize from './app/models/index.js'; //db.sequelize
import tableRoutes from './app/routes/table';
// import columnRoutes from './app/routes/column-route.js';
// import treeCatalogRoutes from './app/routes/tree-catalog-route.js';
// import codeRoutes from './app/routes/code-route.js';
// import smcKcdRoutes from './app/routes/smc-kcd-route.js';
// import userRoutes from './app/routes/user-route.js';

const app = express(); //express 서버 모듈, node의 http 모듈만 사용하면 직접 많은 기능을 구현해야한다.
const port = process.env.PORT || 8080;
// const fileStore = FileStore(session);

//시퀄라이즈 연결
// sequelize
//   .sync({ force: false }) //true일 경우 서버 실행 시마다 테이블 재생성 true는 주의해서 사용할것
//   .then(() => {
//     console.log('Postgres 연결');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//미들웨어
// app.use(cookieParser());
// app.use(
//   session({
//     key: 'login_data',
//     secret: 'du%%e1hnx!ogj@t',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//     store: new fileStore(),
//   })
// );
// app.use(morgan('dev'));
// app.use(
//   cors({
//     origin: true, //origin이라는 헤더를 포함 모두 허용
//     credentials: true, //Access-Control-Allow-Credentials 허용
//   })
// );
// //Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
// app.use(json());

//routes
app.use('/table', tableRoutes);
// app.use('/column-infos', columnRoutes);
// app.use('/tree-catalog', treeCatalogRoutes);
// app.use('/common-codes-infos', codeRoutes);
// app.use('/smc-kcd', smcKcdRoutes);
// app.use('/user', userRoutes);

app.listen(port, () => {
  console.log('Server on port 8080');
});
