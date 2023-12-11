//function load(){
  //var box=""
 //box = document.getElementById('click')
  //console.log(box)
//  document.getElementById("my-iframe").src = box
  
//}
function load() {
  if (document.getElementById('click').value==""){
    
  }else if ("https://" in document.getElementById("click")==false){
    var box=""
      box = document.getElementById('click').value
      console.log(box)
			document.getElementById("my-iframe").src = 'https://'+box
      alert(box)
}else if ("https://" in document.getElementById("click")==true){
  var box=""
      box = document.getElementById('click').value
      console.log(box)
			document.getElementById("my-iframe").src = box
      alert(box)
}
      
		}