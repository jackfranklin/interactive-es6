import {
  script
} from 'html-dist';

export default {
  outputFile: 'dist/index.html',
  body: {
    remove: 'script',
    appends: [
      script({ src: 'app.min.js' }),
      script({ contents: "System.import('app/main')" })
    ]
  }
}
