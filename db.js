
/**
 * 
 */

var conf = require('./conf');

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

ArticleProvider = function(host, port) {
  this.db= new Db(conf.db.dbName, new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


ArticleProvider.prototype.getCollection= function(callback) {
  this.db.collection(conf.db.collectionName, function(error, article_collection) {
    if( error ) callback(error);
    else callback(null, article_collection);
  });
};

ArticleProvider.prototype.findLast = function(callback) {
    this.getCollection(function(error, article_collection) {
      if( error ) callback(error)
      else {
        article_collection.find().sort({$natural:-1}).limit(5).toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results.reverse())
        });
      }
    });
};

ArticleProvider.prototype.save = function(articles, callback) {  
    this.getCollection(function(error, article_collection) {
      if( error ) callback(error)
      else {
        if( typeof(articles.length)=="undefined")
          articles = [articles];

        for( var i =0;i< articles.length;i++ ) {
          article = articles[i];
          //article.created_at = new Date();
        }

        article_collection.insert(articles, function() { 
          callback(null, articles);
        });
      }
    });
};

exports.ArticleProvider = ArticleProvider;
