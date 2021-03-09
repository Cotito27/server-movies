const ctrl = {};

const request = require('request-promise');
const cheerio = require('cheerio');

const domain__filter = 'https://pelisplus.icu/';

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

ctrl.index = async (req, res) => {
  let page = req.query.page;
  let uri = '';
  if(page) {
    uri = domain__filter + `?page=${page}`;
  } else {
    uri = domain__filter;
  }
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  let videosWatch = [];
  $('.video-block').each(function() {
    videosWatch.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  let vecPages = [];
  $('[data-page]').each(function() {
    if($(this).text() != '>' && $(this).text() != '<') {
      vecPages.push($(this).text());
    }
  });
  let numberPages = Math.max(...vecPages);
  res.json({
    data: videosWatch,
    page: page || 1,
    numberPages
  });
}

ctrl.peliculas = async (req, res) => {
  let page = req.query.page;
  let uri = '';
  if(page) {
    uri = domain__filter + `movies?page=${page}`;
  } else {
    uri = domain__filter + `movies`;
  }
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  let videosWatch = [];
  $('.video-block').each(function() {
    videosWatch.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  let vecPages = [];
  $('[data-page]').each(function() {
    if($(this).text() != '>' && $(this).text() != '<') {
      vecPages.push($(this).text());
    }
  });
  let numberPages = Math.max(...vecPages);
  res.json({
    data: videosWatch,
    page: page || 1,
    numberPages
  });
}

ctrl.series = async (req, res) => {
  let page = req.query.page;
  let uri = '';
  if(page) {
    uri = domain__filter + `series?page=${page}`;
  } else {
    uri = domain__filter + `series`;
  }
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  let videosWatch = [];
  $('.video-block').each(function() {
    videosWatch.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  let vecPages = [];
  $('[data-page]').each(function() {
    if($(this).text() != '>' && $(this).text() != '<') {
      vecPages.push($(this).text());
    }
  });
  let numberPages = Math.max(...vecPages);
  res.json({
    data: videosWatch,
    page: page || 1,
    numberPages
  });
}

ctrl.temporadas = async (req, res) => {
  let page = req.query.page;
  let uri = '';
  if(page) {
    uri = domain__filter + `new-season?page=${page}`;
  } else {
    uri = domain__filter + `new-season`;
  }
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  let videosWatch = [];
  $('.video-block').each(function() {
    videosWatch.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  let vecPages = [];
  $('[data-page]').each(function() {
    if($(this).text() != '>' && $(this).text() != '<') {
      vecPages.push($(this).text());
    }
  });
  let numberPages = Math.max(...vecPages);
  res.json({
    data: videosWatch,
    page: page || 1,
    numberPages
  });
}

ctrl.popular = async (req, res) => {
  let page = req.query.page;
  let uri = '';
  if(page) {
    uri = domain__filter + `popular?page=${page}`;
  } else {
    uri = domain__filter + `popular`;
  }
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  let videosWatch = [];
  $('.video-block').each(function() {
    videosWatch.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  let vecPages = [];
  $('[data-page]').each(function() {
    if($(this).text() != '>' && $(this).text() != '<') {
      vecPages.push($(this).text());
    }
  });
  let numberPages = Math.max(...vecPages);
  res.json({
    data: videosWatch,
    page: page || 1,
    numberPages
  });
}

ctrl.search = async (req, res) => {
  let page = req.query.page;
  let keyword = req.query.keyword;
  let uri = '';
  if(page) {
    uri = domain__filter + `search.html?keyword=${keyword}&page=${page}`;
  } else {
    uri = domain__filter + `search.html?keyword=${keyword}`;
  }
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  let vecPages = [];
  $('[data-page]').each(function() {
    if($(this).text() != '>' && $(this).text() != '<') {
      vecPages.push($(this).text());
    }
  });
  let numberPages = Math.max(...vecPages);
  let videosWatch = [];
  $('.video-block').each(function() {
    videosWatch.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  res.json({
    data: videosWatch,
    page: page || 1,
    numberPages
  });
}

ctrl.watch = async (req, res) => {
  let title = req.params.title;
  let uri = domain__filter + `ver/${title}`;
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  if(!$('.video-block')[0]) {
    return res.json({
      error: true,
      message: 'Page not found'
    })
  }
  let videoInfo = {};
  videoInfo.title = $('#main_bg > div:nth-child(5) > div > div.video-info-left > div.video-details > span').text().trim();
  videoInfo.titleEpisode = $('#main_bg > div:nth-child(5) > div > div.video-info-left > h1').text().trim()
  videoInfo.optionsStream = [];
  videoInfo.description = $('#rmjs-1').text().trim();
  if(videoInfo.titleEpisode.toLowerCase().includes('temporada')) {
    videoInfo.episode = parseInt(videoInfo.titleEpisode.split('Capítulo ')[1].trim());
    videoInfo.season = parseInt(videoInfo.titleEpisode.split('Temporada ')[1].trim().split(' ')[0]);

  }
  $('[role="presentation"]').each(function() {
    let namLanguage = capitalizarPrimeraLetra($(this).parent().attr('id').split('_')[1]);
    if(namLanguage == 'Castell') {
      namLanguage = 'Castellano';
    }
    videoInfo.optionsStream.push({
      language: namLanguage,
      option: $(this).find('a').find("span").remove().end().text().trim(),
      stream: $(this).attr('data-video')
    });
  });
  let videosWatch = [];
  $('#main_bg > div:nth-child(5) > div > div.video-info-left > ul').find('.video-block').each(function() {
    if($(this).find('.name').text().trim().toLowerCase().includes('temporada')) {
      videosWatch.push({
        image: $(this).find('.picture').find('img').attr('src'),
        title: $(this).find('.name').text().trim(),
        season: parseInt($(this).find('.name').text().trim().split('Temporada')[1].trim().split(' ')[0]),
        episode: parseInt($(this).find('.type').find('span').text().trim().replace('Ep ', '')),
        date: $(this).find('.date').text().trim(),
        targetWatch: $(this).find('a').attr('href')
      });
    } else {
      videosWatch.push({
        image: $(this).find('.picture').find('img').attr('src'),
        title: $(this).find('.name').text().trim(),
        date: $(this).find('.date').text().trim(),
        targetWatch: $(this).find('a').attr('href')
      });
    }
    
  });
  let videosRelevant = [];
  $('#main_bg > div:nth-child(5) > div > div.video-info-right > ul').find('.video-block').each(function() {
    videosRelevant.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  res.json({
    videoInfo,
    videosWatch,
    videosRelevant
  });
}

ctrl.tempSerie = async (req, res) => {
  let title = req.params.title;
  let uri = domain__filter + `ver/${title}`;
  const $ = await request({ 
    uri,
    transform: (body) => cheerio.load(body),
  }).catch((err) => {
    console.log(err);
  });
  if(!$('.video-block')[0]) {
    return res.json({
      error: true,
      message: 'Page not found'
    })
  }
  let videoInfo = {};
  videoInfo.title = $('#main_bg > div:nth-child(5) > div > div.video-info-left > div.video-details > span').text().trim();
  videoInfo.titleEpisode = $('#main_bg > div:nth-child(5) > div > div.video-info-left > h1').text().trim()
  videoInfo.description = $('#rmjs-1').text().trim();
  if(videoInfo.titleEpisode.toLowerCase().includes('temporada')) {
    videoInfo.episode = parseInt(videoInfo.titleEpisode.split('Capítulo ')[1].trim());
    videoInfo.season = parseInt(videoInfo.titleEpisode.split('Temporada ')[1].trim().split(' ')[0]);

  }

  let videosWatch = [];
  $('#main_bg > div:nth-child(5) > div > div.video-info-left > ul').find('.video-block').each(function() {
    if($(this).find('.name').text().trim().toLowerCase().includes('temporada')) {
      videosWatch.push({
        image: $(this).find('.picture').find('img').attr('src'),
        title: $(this).find('.name').text().trim(),
        season: parseInt($(this).find('.name').text().trim().split('Temporada')[1].trim().split(' ')[0]),
        episode: parseInt($(this).find('.type').find('span').text().trim().replace('Ep ', '')),
        date: $(this).find('.date').text().trim(),
        targetWatch: $(this).find('a').attr('href')
      });
    } else {
      videosWatch.push({
        image: $(this).find('.picture').find('img').attr('src'),
        title: $(this).find('.name').text().trim(),
        date: $(this).find('.date').text().trim(),
        targetWatch: $(this).find('a').attr('href')
      });
    }
    
  });
  let videosRelevant = [];
  $('#main_bg > div:nth-child(5) > div > div.video-info-right > ul').find('.video-block').each(function() {
    videosRelevant.push({
      image: $(this).find('.picture').find('img').attr('src'),
      title: $(this).find('.name').text().trim(),
      date: $(this).find('.date').text().trim(),
      targetWatch: $(this).find('a').attr('href')
    });
  });
  res.json({
    videoInfo,
    videosWatch,
    videosRelevant
  });
}


module.exports = ctrl;