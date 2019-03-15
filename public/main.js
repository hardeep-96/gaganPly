// Make sure sw are supported


if(window.location.href.indexOf('Gaganply2') >= 0){

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../gaganply_cached_site.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
}

else{
    if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('gaganply_cached_site.js')
      .then(reg => {console.log('Service Worker: Registered (Pages)')
      displayNotification();
    })
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
}
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('gaganply_cached_site.js')
//       .then(reg => console.log('Service Worker: Registered (Pages)'))
//       .catch(err => console.log(`Service Worker: Error: ${err}`));
//   });
// }
//Notification
function displayNotification() {

    let options = {
      body: "Take experiece of our MDF Premium Range",
      icon: "https://res.cloudinary.com/www-gaganply-com/image/upload/v1550430018/gaganply/logo.png",
      vibrate: [400,100,300],
      image: "https://res.cloudinary.com/www-gaganply-com/image/upload/v1550430588/gaganply/gaganply2/mdf_slider2.jpg",
      badge: 'https://res.cloudinary.com/www-gaganply-com/image/upload/v1550430018/gaganply/logo.png',
      data: {primaryKey : 1},
      requireInteraction: true,
      actions: [
        {action: 'exploer',
         title: 'Yes, I would like to',
         icon: 'https://res.cloudinary.com/www-gaganply-com/image/upload/v1552166169/gaganply/like.png'},
         {action: 'close',
         title: 'No,may be later',
         icon: 'https://res.cloudinary.com/www-gaganply-com/image/upload/v1552166169/gaganply/dislike.png'},
      ]
    };
  
  if(Notification.permission == 'granted'){
    navigator.serviceWorker.getRegistration()
    .then(reg => {reg.showNotification("Welcome to GaganPly",options)
  
  })
    .catch(err => "error while showing notification: %c"+err,"color:red")
  }
  else{
  Notification.requestPermission((status)=> console.log("curret status of Notification: ",status));
  displayNotification();
  }
  
  }
