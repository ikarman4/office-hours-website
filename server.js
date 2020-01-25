import {RSSManager} from "./src/server/rss-manager";

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const feed = RSSManager.getFeed();

app.get(`/rss`, function (req, res) {
  res.send(feed);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000);