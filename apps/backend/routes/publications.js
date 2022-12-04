const express = require('express');
const router = express.Router();
const PublicationController = require('../API/controllers/publications');

router.get('/', (req, res, next) => {
    const controller = new PublicationController(req,res,next);
    controller.findAllPublications();
});

router.get('/archived', (req, res, next) => {
    const controller = new PublicationController(req,res,next);
    controller.findAllPublicationsArchived();
});

router.post('/store/:publicationId', (req,res, next) => {
    const controller = new PublicationController(req,res,next);
    controller.archiveNewPublication();
});

router.delete('/:publicationId', (req,res,next) => {
    const controller = new PublicationController(req,res,next);
    controller.deletePublication();
});

module.exports = router;