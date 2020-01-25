import Podcast from 'podcast';
const PODCAST_FEED = require('../../../PODCASTS');

const getFeed = () => {
  /* lets create an rss feed */
  const feed = new Podcast({
    title: 'Office Hours',
    description: 'description',
    feed_url: 'http://officehourspod.com/rss',
    site_url: 'http://officehourspod.com',
    image_url: 'http://officehourspod.com/icon.png',
    docs: 'http://officehourspod.com/rss/docs.html',
    author: 'Dylan Greene',
    managingEditor: 'Dylan Greene',
    webMaster: 'Dylan Greene',
    copyright: '2013 Dylan Greene',
    language: 'en',
    categories: ['Category 1','Category 2','Category 3'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
    itunesAuthor: 'Ian Karman',
    itunesSubtitle: 'I am a sub title',
    itunesSummary: 'I am a summary',
    itunesOwner: { name: 'Max Nowack', email:'max@unsou.de' },
    itunesExplicit: false,
    itunesCategory: [{
      "text": "Entertainment",
      "subcats": [{
        "text": "Television"
      }]
    }],
    itunesImage: 'http://link.to/image.png'
  });

  PODCAST_FEED.forEach((item) => {
    feed.addItem(item);
  });

  return feed.buildXml();
};

export const RSSManager = {
  getFeed
};