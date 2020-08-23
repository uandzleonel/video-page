const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (request, response) => {
  const about = {
    avatar_url: "https://avatars1.githubusercontent.com/u/16707128?s=460&u=3ce3d7fe5b0cbbfd2f22f4c78869a00c96a9bda9&v=4",
    name: "Uanderson Leonel",
    title: "Aprendendo Frontend e Backend",
    description: 'Graduado em Ciência da Computação e desenvolvendo em DataFlex desde 2015. É DBA em SQL Server 2017® pelo Microsoft Silver Learning. No momento é Coordenador de desenvolvimento na <a class="links" href="https://kpers.com.br/" target="_blank">KPERS</a>.',
    links: [
      { name: "KPERS", url: "https://kpers.com.br/" }
    ]
  }

  return response.render('about', { about });
});

server.get('/video', (request, response) => {
  const id = request.query.id;

  const video = videos.find(video => video.id === id);

  return video ? response.render('video', { item: video }) : response.send('Video not found');
});

server.get('/videos', (request, response) => {
  return response.render('videos', { items: videos });
});

const port = 5000;
server.listen(port, () => {
  console.log('Server is running...');
});
