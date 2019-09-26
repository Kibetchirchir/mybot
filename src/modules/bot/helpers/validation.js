function validate(req, res) {
  if (req.query['hub.verify_token'] === 'chirchir') {
    res.send(req.query['hub.challenge']);
  }
  res.send('wrong token');
}

export default validate;
