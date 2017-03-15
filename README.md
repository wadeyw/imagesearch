<h1>Image Search Abstraction Layer</h1><br>

User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.<br>
User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.<br>
User Story: I can get a list of the most recently submitted search strings.<br>

Example Usage1:<br>
  

Example Output1:<br>
  
  
Example Usage2:<br>
  

Example Output2:<br>
  [{"url":"http://www.google.com/logos/doodles/2015/doodle-4-google-2015-vietnam-winner-childrens-day-5158569234137088-hp.png","snippet":"Doodle 4 Google 2015 - Vietnam ..."},{"url":"http://www.google.com/logos/2010/china_national10-hp.gif","snippet":"China National Day 2010"},{"url":"https://www.google.com/transparencyreport/images/flags/cn.png","snippet":"China"},{"url":"http://www.google.com/logos/2010/lunarnewyearseve10-hp.gif","snippet":"Lunar New Year's Eve 2010"},{"url":"http://www.google.com/logos/doodles/2013/china-national-day-2013-5681726336532480-hp.jpg","snippet":"Teacher's day 2013 (China)"},{"url":"http://www.google.com/logos/2013/chinese_new_year_2013-1012005-hp.jpg","snippet":"Chinese New Year 2013"},{"url":"http://www.google.com/logos/doodles/2016/childrens-day-2016-honduras-5999927895261184-hp2x.jpg","snippet":"Teachers' Day 2005 - China"},{"url":"http://www.google.com/logos/2009/chinanatlday60.gif","snippet":"China National Day 2013"},{"url":"http://www.google.com/logos/2011/china_national_day-2011-hp.jpg","snippet":"China National Day 2011"},{"url":"http://www.google.com/logos/doodles/2017/lantern-festival-2017-china-hong-kong-5653647470886912.3-hp2x.gif","snippet":"Lantern Festival 2017 (China, ..."}]

  
Example Usage3:<br>
  [{"timestamp":1489565436080,"query":"helloworld"},{"timestamp":1489565425436,"query":"china"},{"timestamp":1489565334640,"query":"china"}]

Example Output3:<br>
  
  

Reference:<br>
https://www.gorkahernandez.com/blog/image-search-abstraction-layer-node-js/
https://github.com/chemok78/image-search-layer/blob/master/api/search.js
