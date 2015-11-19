build:
	- rm -r dist/
	mkdir -p dist/jspm_packages
	mkdir -p dist/app/vendor
	./node_modules/.bin/jspm bundle app/main dist/app.min.js --minify
	cp app/vendor/*.js dist/app/vendor
	cp service-worker.js dist
	cp jspm_packages/system.js dist/jspm_packages
	cp config.js dist
	cp -r app/features dist/app
	cp -r app/fixtures dist/app
	cp index.html dist/index.html
	./node_modules/.bin/babel-node build-html.js
