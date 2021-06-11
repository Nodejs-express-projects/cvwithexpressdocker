

module.exports = class DBservicePostgres {


    constructor(client) {

        this.Client = client;
    }


    async fetchrecordsbyquery(sql) { 
      
        var client = this.getclient()
        client.connect(err => {
        if (err) {
          console.error('connection error', err.stack)
        } else {
          console.log('connected')
        }
      });
       
    const {rows} = await client.query(sql);
     return rows;
    }

    getclient() {
        return new this.Client();
    }
}