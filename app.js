/*global Ext */

//enable Ext.Loader & turn off cache busting
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

//set path for all NotesApp.* classes
Ext.Loader.setPath({
    'NotesApp': 'app'
});

//create an application
Ext.application({
    name: 'NotesApp'
});