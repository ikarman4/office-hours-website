import Podcast from 'podcast';
const PODCAST_FEED = require('../../../PODCASTS');

const getFeed = () => {
  /* lets create an rss feed */
  const feed = new Podcast({
    title: 'Office Hours',
    description: 'Follow two curious kids as they navigate and explore big,' +
    'seemingly intangible questions many people interested in research struggle' +
    'with: what differentiates prolific researchers from thtose around them? Which' +
     'topics or problems are worth spending a lifetime studying? What actionable' +
     'steps can I take to illuminate my own interests? Join us in getting to know.' +
      'As well as learning from researchers who are deeply passionate about their work.' +
       'The leaders that are tasked with solving the ever-growing number of problems' +
        'we face today.',
    feed_url: 'http://officehourspod.com/rss',
    site_url: 'http://officehourspod.com',
    image_url: 'https://drive.google.com/file/d/1VFgFVQ6G52TwcN06LvA7GX3sRaHhZuog/preview',
    docs: 'http://officehourspod.com/rss/docs.html',
    author: 'Ian Karman',
    managingEditor: 'Ian Karman',
    webMaster: 'Ian Karman',
    copyright: '2020 Ian Karman',
    language: 'en',
    categories: ['Category 1','Category 2','Category 3'],
    itunesOwner: { name: 'Ian Karman', email:'ikarman4@gmail.com' },
    //pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
  });

  PODCAST_FEED.forEach((item) => {
    feed.addItem(item);
  });

  return feed.buildXml();
};

export const RSSManager = {
  getFeed
};