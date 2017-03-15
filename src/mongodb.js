var mongoose=require('mongoose');
var imageSearchSchema=mongoose.Schema({
  timestamp: Number,
  query: String
});

imageSearchSchema.index({timestamp:1});
imageSearchSchema.set('autoIndex',false);

export var imageSearch=mongoose.model('imageSearch',imageSearchSchema);
