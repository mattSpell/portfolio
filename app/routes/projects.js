'use strict';

var multiparty = require('multiparty');
var traceur = require('traceur');
var Project = traceur.require(__dirname + '/../models/project.js');
//var Mongo = require('mongodb');
var projects = global.nss.db.collection('projects');

exports.index = (req, res)=>{
  Project.findAll(projects=>{
    res.render('projects/index', {projects:projects, title: 'Portfolio: List'});
  });
};

exports.new = (req, res)=>{
  res.render('projects/new', {title: 'Portfolio: New'});
};

exports.create = (req, res)=>{
  var form = new multiparty.Form();

  form.parse(req, (err, fields, files)=>{
    Project.create(res.locals.user._id, fields, files, ()=>{
      res.redirect('/projects');
    });
  });
};

exports.show = (req, res)=>{
  Project.findById(req.params.id, project=>{
    res.render('projects/show', {project:project, title: 'Portfolio: Show'});
  });
};

exports.destroy = (req, res)=>{
  Project.findById(req.params.id, project=>{
    project.killFiles(()=>{
      res.redirect('/projects');
    });
  });
};

exports.edit = (req, res)=>{
  Project.findById(req.params.id, project=>{
    res.render('projects/edit', {project:project, title: 'Project: Edit'});
  });
};

exports.update = (req, res)=>{
  Project.findById(req.params.id, project=>{
    project.update(req.body, ()=>{
      res.redirect('/projects');
    });
  });
};
