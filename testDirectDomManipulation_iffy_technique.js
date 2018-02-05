document.body.innerHTML = '';
document.body.style.background= "white";

var nums = [1,2,3];

for (var i = 0; i < nums.length; i++){
  var num = nums[i];
  var element = document.createElement('div');
  element.textContent = num;
  element.addEventListener('click',(function(alertNum){
    return function(){
      alert(alertNum);
    };
  })(num),false);
  document.body.appendChild(element);
}
