

var comments = [
  'Everything is perfect!',
  'Mostly all good. But not all...',
  'When you are making a photo it is good to take away a finger out of picture. It is at least unprofessional.',
  'My granny has sneezed ocasionally with photocamera in her hands - and even those photo was better',
  'I has stumbled because of the bananas peel and dropped the camera on my cat - and even those photo was better',
  'Faces of the people are distorted like somebody is beating them. How could you catch so awful moment?',
  'It is obviously photashop',
  'Mega photo! Amazing!'
];

var descriptions = [
  'Test of my new camera:)',
  'Party with friends on the beach',
  'It is really good food at that place!',
  'relax...',
  'This car is amazing',
  'enjoy every moment of your life'
];

var links = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
  'photos/26.jpg',
];

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getLikes = getRandomInRange(15,200);

var photos = [];
for (var i = 0; i < 26; i++) {
  var photo = {
    url: links[i],
    likes: getLikes,
    comments: comments[Math.floor(Math.random() * comments.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)]
  }

  photos[i] = photo;

}

var similarPhotoTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
var similarListElement = document.querySelector('.pictures');


// for (var i = 0; i < photos.length; i++) {
// var photoElement = similarPhotoTemplate.cloneNode(true);
//
//
//
//     photoElement.querySelector('img').src = photos[i].url;
//     photoElement.querySelector('.picture-likes').textContent = photos[i].likes;
//     photoElement.querySelector('.picture-comments').textContent = photos[i].comments;
//
//   similarListElement.appendChild(photoElement);
// }


 var renderPhotos = function(array) {
 var photoElement = similarPhotoTemplate.cloneNode(true);

    photoElement.querySelector('img').src = photos[i].url;
    photoElement.querySelector('.picture-likes').textContent = photos[i].likes;
    photoElement.querySelector('.picture-comments').textContent = photos[i].comments;

  return photoElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < photos.length; i++) {
  fragment.appendChild(renderPhotos(photos[i]));
}


similarListElement.appendChild(fragment);

var bigPhoto = document.querySelector('.big-picture');
bigPhoto.classList.remove('hidden');

bigPhoto.querySelector('img').src = photos[0].url;
bigPhoto.querySelector('.social__caption').textContent = photos[0].description;
bigPhoto.querySelector('.likes-count').textContent = photos[0].likes;
bigPhoto.querySelector('.social__text').textContent = photos[0].comments;

document.querySelector('.social__comments-loader').classList.add('visually-hidden');

document.querySelector('.social__footer').classList.add('visually-hidden');
