'use strict';

var multer = require("multer");
var upload= multer();

module.exports = function(app){
    app.route('/')
        .get(function(req,res){
            res.sendFile(process.cwd()+'/public/index.html');        
        });
        
    app.post('/',upload.single('attachment'),function(req,res){
       var fileSize = ((req.file["size"])/1024).toFixed(2);        
       console.log(fileSize); 
       res.render('result',{fileSize:fileSize}); 
    });
};