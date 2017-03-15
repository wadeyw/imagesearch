var express=require('express');
export var router=express.Router();
var mongodb=require('./mongodb');
var googleSearch=require('google-search');

var google=new googleSearch({
  key: 'AIzaSyCdn-i_i_Ya1o3_DFtfiNO2_cRJ7b55rts',
  cx: ''
});

/*get image relate to query string*/
router.get('/imagesearch/:query',function(req,res){
  let query=req.params.query,
      offset=req.query.offset||10,
      timestamp=Date.now();
  console.log('search for query:'+query+', offset:'+offset); 
 

 let newSearch=new mongodb.imageSearch({timestamp:timestamp,query:query});
  
  newSearch.save();
  console.log('query:{'+query+'} saved to DB');
});

/*get a list of the most recently submitted search strings*/
router.get('/latest',function(req,res){
  console.log('generate latest 10 search history');
  mongodb.imageSearch
    .find()
    .sort({timestamp:-1})
    .limit(10)
    .select({_id:0,query:1,timestamp:1})
    .then(doc=>{res.status(200).json(doc);});
});
