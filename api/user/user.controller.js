import { User } from './user.model.js';

export function getAll(req, res, next) {
  return User.find().then((userlist) => {
    res.render('userlist', { data: userlist });
  });
}

// export function create(req, res, next) {
//   return User.create(req.body).then(() => {});
// }
