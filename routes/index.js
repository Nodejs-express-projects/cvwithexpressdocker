const express = require('express');
const DBservice = require('../services/dbservice');
const DBservicepostgres = require('../services/dbservicePostgres');
const app = express();
const router = express.Router();
var hana = require('@sap/hana-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var {Client} = require('pg');



const PersonService = require('../services/personservice');
const PersonServicepg = require('../services/personservicepg');

let dbservice;
var personaldata = '';
let personservice;

module.exports = (dbtype) => {
	router.use(
		bodyParser.urlencoded({
			extended: false,
		})
	);
	// parse application/json
	router.use(bodyParser.json());
	router.use(
		session({
			secret: 'Shh, its a secret!',
		})
	);

	router.get('/resume', async (req, resp, next) => {
		if (dbtype == 'HANA') {
			dbservice = new DBservice(hana);
			personservice = new PersonService(dbservice);
		} else if (dbtype == 'POSTGRES') {
			dbservice = new DBservicepostgres(Client);
			personservice = new PersonServicepg(dbservice);
		}

		

		success = false;
		if (req.session.successflag) {
			success = req.session.successflag;
		}

		var generalinfo = '';
		try {
			personaldata = await personservice.getPersonalData('Mary Albert');
			if(personaldata)
			{
			personaldata = await personaldata[0];
			const {personid} = personaldata;
			if (personid) {
				generalinfo = await personservice.getGeneralInfo(personid);
				generalinfo = generalinfo[0];
				workexperiences = await personservice.getworkexperiences(personid);
				educationlist = await personservice.geteducation(personid);
				portfoliolist = await personservice.getportfolio(personid);
				referencelist = await personservice.getreferencelist(personid);
				console.log(referencelist);
			}

			resp.render('index', {
				personaldata,
				generalinfo,
				workexperiences,
				educationlist,
				portfoliolist,
				referencelist,
				success,
			});
			resp.locals.successflag = false;
		}
		} catch (err) {
			resp.status(404);
			console.log(err);
		}

	

		
	});

	router.post('/form', (req, res) => {
		try {
			personservice.setLead(personaldata.ID, req.body);
			req.session.successflag = true;
			res.redirect('/api/resume');
		} catch (err) {
			req.session.successflag = false;
			res.redirect('/api/resume');
		}
	});

	return router;
};
