const configurationService = require('../services/configuration');
module.exports = function(router) {
  router.get('/getConfigurations', (req, res) => {
    configurationService.getAllConfigurations().then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
      res.status(404).send('Not found');
    })
  });

  router.post('/saveConfiguration', (req, res) => {
    configurationService.setConfigurations(req.body).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
      res.status(404).send('Not found');
    })
  });

  router.put('/updateConfigurations', (req, res) => {
    configurationService.updateConfigurations(req.body).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
      res.status(404).send('Not found');
    })
  });

  router.delete('/deleteConfiguration', (req, res) => {
    configurationService.deleteConfigurations(req.query.id).then((data) => res.status(200).send(data))
    .catch((error) => {
      res.status(404).send(error);
    })
  });
}