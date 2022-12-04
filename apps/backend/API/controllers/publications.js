const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const controller = require('./controller');
const publicationModel = require('../models/publications');
const moment = require('moment');

class PublicationController extends controller {
    constructor(req,res,next) {
        super(req,res,next);
    }
    
    findAllPublications = async () => {
        try {
            const notices = await publicationModel.find({ "archiveDate" : {"$exists": false } }).sort({ date: 1});
            this.res.json(notices);
        } catch (e) {
            console.log(e)
        }
    };
    
    findAllPublicationsArchived = async () => {
        try {
            const notices = await publicationModel.find({ "archiveDate" : {"$exists": true } }).sort({ date: 1});
            this.res.json(notices);
        } catch (e) {
            console.log(e)
        }
    };
    
    archiveNewPublication = async () => {
        try {
            await publicationModel.findOneAndUpdate({
                publicationId: this.req.params.publicationId 
            },{
                $set: {
                    archiveDate: moment()
                }
            });
            this.res.status(200).send({ok:true});
        } catch (e) {
            console.log(e);
        }
    };

    deletePublication = async () => {
        try {
            await publicationModel.deleteOne({ publicationId: this.req.params.publicationId});
            this.res.status(200).send({ ok: true });
        } catch (e) {
            console.log(e);
        }
    };
}

module.exports = PublicationController;