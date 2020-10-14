const controller = require('./controller');
	        
module.exports = (app) => {
    // Root - important for Heroku
    app.get('/', controller.index);
    
    // add - need to show a form
    app.get('/admin/add', controller.add);
    // edit - need to show a form
    app.get('/admin/edit/:idx', controller.edit);
    // CRUD main listing
    app.get('/admin', controller.admin);
    // create - actually create a new item
    app.post('/admin', controller.create);
    // view - view an item
    app.get('/admin/:idx', controller.view);
    // update - actually update the item
    app.put('/admin/:idx', controller.update);
    // update - actually update the item
    app.delete('/admin/:idx', controller.delete);
    // view details in frontend
    app.get('/:idx', controller.show);
};
