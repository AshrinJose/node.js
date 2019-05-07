const { getData } = require('../db/dbOperations');
const UserAction = require('../bean/UserAction');

module.exports = app => {

    /**
    * @apiName Get User Actions
    * @apiGroup User
    * @apiVersion 0.1.0
    * @api {get} /getUserDetails Request User Details 
    *
    * @apiSuccess {Integer} resultCode ResultCode for the api.
    * @apiSuccess {Object[]} actions Array of actions.
    * @apiSuccess {String} actions.id Action Id.
    * @apiSuccess {String} actions.name Action Name.
    * @apiSuccess {String} actions.description Action Description.
    * @apiSuccess {String} actions.createdDate Action Creaed Date.
    *
    * @apiSuccessExample Example response on success
    * {
    *  "resultCode": 0,
       "actions": [{
            "id": "1",
            "name": "Don",
            "description": "Don Details",
            "createdDate": "2018-12-19 15:34:38"
        }]
    * }
    */
    app.get('/getUserDetails', async (req, res, next) => {
        let response = {};
        try {
            console.log('fetching users....');
            const result = await getData(req.transactionId, "SELECT * FROM SD_USERMASTER", []);

            const actions = result.map(act => new UserAction(act));

            response = { resultCode: 0, actions };
        } catch (error) {
            console.error(error)
            response = { resultCode: 1 };
        }
        res.send(response);
    });
}
