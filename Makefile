build:
	- rm -r dist/
	mkdir -p dist/jspm_packages
	mkdir -p dist/app/vendor
	./node_modules/.bin/jspm bundle app/main dist/app.min.js --log err --source-map-contents
	cp app/vendor/*.js dist/app/vendor
	cp jspm_packages/system.js dist/jspm_packages
	cp config.js dist
	cp -r app/features dist/app
	cp -r app/fixtures dist/app
	./node_modules/.bin/html-dist --config html-dist.config.js --input index.html
