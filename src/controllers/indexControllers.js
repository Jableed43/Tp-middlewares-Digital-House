module.exports = {
    index: (req, res, next) => {
        res.render('index');
    },
    error: (req, res, next) => {
        res.render('error');
    }
  }
