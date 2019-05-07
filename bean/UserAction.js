const moment =  require('moment')

class UserAction {
    constructor(obj = {}) {
        this.id = obj.ID;
        this.name = obj.NAME;
        this.description = obj.DESCRIPTION;
        this.createdDate = moment(obj.CREATE_DATE).format('YYYY-MM-DD HH:mm:ss');
    }
}
module.exports = UserAction;
