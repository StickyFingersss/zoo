function checkUser(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.redirect("/");
  }
}
function isExisted(req, res, next) {
  if (req.session.login) {
    res.redirect("/");
  } else {
    next();
  }
}
module.exports = { checkUser, isExisted };
