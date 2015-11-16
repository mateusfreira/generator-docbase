   Docbase.run({
   	method: 'generic',
   	map: { // mapping file location relative to the project directory
   		file: 'map.json',
   		path: ''
   	},
   	generic: {
   		baseurl: "./",
   		path: "docs"
   	},
   	indexHtml: 'html/main.html',
   	flatdocHtml: '/bower_components/docbase/html/flatdoc.html',
   	html5mode: false
   });