'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Portfolio: Home'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'Portfolio: About'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'Portfolio: Contact'});
};

exports.resume = (req, res)=>{
  res.render('home/resume', {title: 'Node.js: Resume'});
};
