const {
    resolve
} = require('path');
var util = require('util');

module.exports = class PersonServicepg {


    constructor(dbservice) {

        this.postgressrv = dbservice;


    }

    async fetchdata(sql){

         return this.postgressrv.fetchrecordsbyquery(sql);
        

    }

    async getPersonalData(name) {

        var sql = `SELECT PERSONID,NAME,DESCR FROM PERSONAL_DATA  WHERE NAME =\'${name}\'`;

       return this.fetchdata(sql);
    }

    async getGeneralInfo(id) {

        var sql = `SELECT * FROM GENERAL_INFO  WHERE PERSONID = ${id}`;

       return this.fetchdata(sql);
    }

    async getworkexperiences(id) {
        var sql = `SELECT * FROM WORK_EXPERIENCE  WHERE PERSONID = ${id}`;

        return  this.fetchdata(sql);

    }

    async geteducation(id) {
        var sql = `SELECT * FROM EDUCATION  WHERE PERSONID = ${id}`;

        return this.fetchdata(sql);

    }

    async getportfolio(id) {
        var sql = `SELECT * FROM PORTFOLIO  WHERE PERSONID = ${id}`;
        return this.fetchdata(sql);

    }

    async getreferencelist(id) {
        var sql = `SELECT * FROM REFERENCELIST  WHERE PERSONID = ${id}`;
        return this.fetchdata(sql);

    }

    async setLead(id, leadobj) {
        var sql = `INSERT INTO  LEADS (id,name,email,subject,message) VALUES(${id},\'${leadobj.surname}\',\'${leadobj.email}\',\'${leadobj.subject}\',\'${leadobj.message}\')`;
        console.log(sql);

        try {


            await this.postgressrv.fetchrecordsbyquery(sql);
        } catch (err) {
            console.log(err);
        }

    }








}