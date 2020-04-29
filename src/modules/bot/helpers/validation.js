function validate(req, res) {
  const { FBTOKEN: fbToken } = process.env;
  if (req.query['hub.verify_token'] === fbToken) {
    res.send(req.query['hub.challenge']);
  }
  res.send('wrong token');
}

export default validate;
