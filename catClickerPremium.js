document.body.innerHTML = '';
document.body.style.background= "white";

var catPictureUrlBase = 'https://static.pexels.com/photos/*/pexels-photo.jpg';
var numberOfCatPictures = 5;
var urlId = 20785;

for (var i = 0; i < numberOfCatPictures; i++){
  var urlReplacement = urlId + i;
  var targetUrl = catPictureUrlBase.replace(/\*/g,urlReplacement);
  console.log('Target url is '+ targetUrl);
  var element = document.createElement('div');
  //element.href = targetUrl;
  element.textContent = targetUrl;
  element.addEventListener('click',(function(targetUrl,element){
    var image = document.createElement('img');
    image.style.display="none";
    image.src = targetUrl;
    image.clickCount = 0;
    image.addEventListener('click',function(){
      this.clickCount++;
      console.log("image "+ this.src + " clicked "+ this.clickCount+ " times");
      if(this.clickCount == 5){
        this.style.display = "none";
      }
    },false);
    document.body.appendChild(image);
    return function(){
      if (image.style.display === "none")
        image.style.display = "block";
      else{
        image.style.display= "none";
      }
    };
  })(targetUrl,this),false);
  document.body.appendChild(element);
}
