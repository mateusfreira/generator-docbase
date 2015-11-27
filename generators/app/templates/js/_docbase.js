 Docbase.run({
   method: '<%= hostType %>',
   map: { // mapping file location relative to the project directory
     file: 'map.json',
     path: ''
   },
   generic: {
     baseurl: "<%= baseUrl %>",
     path: "<%= basePath %>"
   },
   "file": {
     'path': '<%= basePath %>'
   },
   github: {
     user: '<%= githubUser %>',
     repo: '<%= githubRepo %>',
     path: '<%= githubPath %>',
     branch: '<%= githubBranch %>'
   },
   indexHtml: 'html/main.html',
   flatdocHtml: '/bower_components/docbase/html/flatdoc.html',
   html5mode: false
 });
 $(function(){
    $('.search').searchAppbase('./search-index.json');
 });