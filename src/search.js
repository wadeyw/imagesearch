var express=require('express');
export var router=express.Router();
var mongodb=require('./mongodb');
var googleSearch=require('google-search');
var request=require('request');
var API_KEY=process.env.GOOGLE_API_KEY;
var SE_ID=process.env.GOOGLE_CX_KEY;


/*get image relate to query string*/
router.get('/imagesearch/:query',function(req,res){
  let query=req.params.query,
      offset=req.query.offset||1,
      timestamp=Date.now();
  console.log('search for query:'+query+', offset:'+offset); 
 
var url="https://www.googleapis.com/customsearch/v1?key="+API_KEY+"&cx="+SE_ID+"&q="+query+"&searchType=image&start="+offset;// 
//start=offset||0;  // offset  Optional
console.log('Google URL: ',url);
var requestObject={
  uri:url,
  method: 'GET',
  timeout:10000
};

request(requestObject,function(error,response,body){
  if(error)
    thow(error);
  else {
    var array=[];  //store search result
    var result=JSON.parse(body);
    
    var imageList=result.items;
//    console.log('Image List:',imageList); 
    for(var i=0;i< imageList.length;i++){
      var image={
        "url": imageList[i].link,
        "snippet": imageList[i].snippet,
        "thumbnail": imageList[i].thumbnail,
        "context": imageList[i].context
      };
      
      array.push(image);
    }
    res.send(array);
  }
});


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
