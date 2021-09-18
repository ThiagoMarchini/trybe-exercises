const upload = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).send({ error: { message: 'Extension must be `png`' } });
  }
  if (req.fileDuplicated) {
    return res.status(409).send({ error: { mesage: 'File already exists' } });
  }
  
  return res.send();
};

module.exports = upload;