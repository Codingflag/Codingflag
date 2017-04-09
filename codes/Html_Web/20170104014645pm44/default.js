function countWords(){
  var allwords = [];
  var counts = {};
  var txt = arguments[0];
  if(txt === undefined || txt.length <= 2) {
    return false;
  }
  var keys = [];
  var data = '';
  var nonword = [
    'the','a','in','on','it','an','of','and','to','by','is','from','at','are','as','that'
  ];
  allwords = txt.split(/\b\W+\b/);
  for(var i=0;i<allwords.length;i++){
    var word = allwords[i].toLowerCase();
    if(/\b\d+\b/.test(word) === false &&
      nonword.findIndex(function(a){
        return word === a;
      }) === -1 &&
      word.length >= 2) {
        if(counts[word] === undefined){
          counts[word] = 1;
          keys.push(word);
        } else {
          counts[word] += 1;
        }
    }
  }
  keys.sort(function(a,b){
    return -(counts[a]-counts[b]);
  });
  for(var i=0;i<20;i++){
    data += "<div class='row'>";
    data += '<span>'+keys[i] + '</span>';
    var percentage = Math.round((counts[keys[i]]/allwords.length)*5000);
    data += '<span style="width:'+percentage+'px;"></span>';
    data += '</div>';
  }
  return data;
}


/*Drag and Drop*/

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  var files = evt.dataTransfer.files;
  var reader = new FileReader();
  reader.onload = function(event) {
       if(countWords(event.target.result) !== false){
         document.getElementById('drop_zone').style.display = "none";
         document.getElementById('counter').innerHTML = countWords(event.target.result);
       } else {
         return ;
       }
  }
  reader.readAsText(files[0],"UTF-8");
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy';
}
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);