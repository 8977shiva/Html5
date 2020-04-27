var dragStart = (e)=> {

      e.dataTransfer.setData('text/plain', e.target.id);
    
  };
  
  var cancel =(e) =>{
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
  };
  
  var dropped = function(e) {
    var id;
    cancel(e);
  
    
      id = e.dataTransfer.getData('text/plain');

  
    e.target.appendChild(document.querySelector('#' + id));
  };
  
  var img = document.querySelector('#home-snapshot');
  img.addEventListener('dragstart', dragStart, false);
  
  var target = document.querySelector('#target-container');
  target.addEventListener('drop', dropped, false);
  target.addEventListener('dragenter', cancel, false);
  target.addEventListener('dragover', cancel, false);