var express=require('express');
var mongoose=require('mongoose');
var imageSearch=require('./search');


export const app=express();
var dburl=process.env.MONGOLAB_URI;
console.log(dburl);
mongodbInit(dburl);
app.use('/api',imageSearch.router); // root route in the form of /api 

function mongodbInit(dbcon){
  console.log("DB Initialing...");
  mongoose.Promise=global.Promise;
//  mongoose.connect('mongodb://localhost:27017/imageSearch',function(error){
  mongoose.connect(dbcon,function(error){
    if(error)
      console.log('DB Connect failed');
    else
      console.log('DB Connected');
  });
}
