const nunjucks = require('nunjucks');
const previewUtil = require('./path/to/preview-util'); // Adjust the path as necessary

// Configure Nunjucks environment
const env = nunjucks.configure('src/_includes/layouts', {
  autoescape: true,
  watch: true,
});

// Import filters and other utilities
const {
  w3DateFilter,
  markdownFilter,
  dateFilter,
  helpers,
} = previewUtil;

env.addFilter('w3DateFilter', w3DateFilter);
env.addFilter('markdownFilter', markdownFilter);
env.addFilter('dateFilter', dateFilter);

// Define your Preview components
const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS());
  const html = env.render(path, { ...data, helpers });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

// Register CMS preview templates
const Home = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/home.njk"
    context={({ title, body, postsHeading, archiveButtonText }) => ({
      title,
      content: markdownFilter(body),
      postsHeading,
      archiveButtonText,
      collections: {
        postFeed: [{
          url: 'javascript:void(0)',
          date: new Date(),
          data: {
            title: 'Sample Post',
          },
        }],
      },
    })}
  />
);

// Register other templates as needed
// ...

CMS.registerPreviewTemplate('home', Home);
// Register other preview templates as needed
