let id;
let contentHeight;

export function moMoEvents(){
  let colId = document.getElementsByClassName('col'), i;
  for(i = 0; i < colId.length; ++i){
    colId[i].addEventListener('mouseover', function(e){
      if(e.target.matches('.dropdown')){
        id = e.target.id;
        contentHeight = e.target.children[1].scrollHeight;
        e.target.children[1].style.height = contentHeight;
        mouseOverStyle();
      }
      if(e.target.matches('.dropdown__content')){
        id = e.target.parentNode.id;
        contentHeight = e.target.scrollHeight;
        e.target.style.height = contentHeight;
        mouseOverStyle();
      }
      if(e.target.matches('.btn__dropdown')){
        id = e.target.parentNode.id;
        contentHeight = e.target.nextElementSibling.scrollHeight;
        e.target.nextElementSibling.style.height = contentHeight;
        mouseOverStyle();
      }
      if(e.target.matches('.dropdown__list') || e.target.matches('.dropdown__autocomplete')){
        id = e.target.parentNode.parentNode.id;
        contentHeight = e.target.parentNode.scrollHeight
        e.target.parentNode.style.height = contentHeight;
        mouseOverStyle();
      };
      if(e.target.matches('#myInput')){
        id = e.target.parentNode.parentNode.parentNode.parentNode.id;
        contentHeight = e.target.parentNode.parentNode.parentNode.scrollHeight
        e.target.parentNode.parentNode.parentNode.style.height = contentHeight;
        mouseOverStyle();
      };
    });
  };
  for(i = 0; i < colId.length; ++i){
    colId[i].addEventListener('mouseout', function(e){
      if(e.target.matches('.dropdown__list')){
        id = e.target.parentNode.parentNode.id;
        e.target.parentNode.style.height = '0px';
        mouseOutStyle();
      };
      if(e.target.matches('.btn__dropdown')){
        id = e.target.parentNode.id;
        e.target.nextElementSibling.style.height = '0px';
        mouseOutStyle();
      };
      if(e.target.matches('.dropdown')){
        id = e.target.id;
        e.target.children[1].style.height = '0px';
        mouseOutStyle();
      }
    });
  };
};

function mouseOverStyle(){
  let translateVal = 'translateY(' + contentHeight + 'px)';
  let ddNextSiblings = document.querySelectorAll('#' + id + ' ~ div'), i;
  for(i = 0; i < ddNextSiblings.length; ++i){
    ddNextSiblings[i].style.transform = translateVal;
  };
  // ddNextSiblings.forEach(element => {
  //   element.style.transform = translateVal;
  // });
  if(id.includes('category')){
    let typeDdContent = document.getElementById('column_type').getElementsByClassName('dropdown__content'), i;
    for(i = 0; i < typeDdContent.length; ++i){
      typeDdContent[i].style.transition = 'none';
    };
  };
  if(id.includes('type')){
    let ddContentGrp1 = document.getElementsByClassName('dropdown__content--grp1'), i;
    for(i = 0; i < ddContentGrp1.length; ++i){
      ddContentGrp1[i].style.transition = 'none';
    };
    let catDdId = id.replace('type', 'category');
    let catDdNextSiblings = document.querySelectorAll('#' + catDdId + ' ~ div'), j;
    for(j = 0; j < catDdNextSiblings.length; ++j){
      catDdNextSiblings[j].style.transform = translateVal;
    };
    let itemDdId = id.replace('type', 'item');
    let itemDdNextSiblings = document.querySelectorAll('#' + itemDdId + ' ~ div'), k;
    for(k = 0; k < itemDdNextSiblings.length; ++k){
      itemDdNextSiblings[k].style.transform = translateVal;
    };
  };
  if(id.includes('item')){
    let typeDdContent = document.getElementById('column_type').getElementsByClassName('dropdown__content'), i;
    for(i = 0; i < typeDdContent.length; ++i){
      typeDdContent[i].style.transition = 'none';
    };
  };
  selectAnimationOn();
};

function mouseOutStyle(){
  let ddNextSiblings = document.querySelectorAll('#' + id + ' ~ div'), i;
  for(i = 0; i < ddNextSiblings.length; ++i){
    ddNextSiblings[i].style.transform = 'translateY(0px)';
  };;
  if(id.includes('category')){
    let typeDdContent = document.getElementById('column_type').getElementsByClassName('dropdown__content'), i;
    for(i = 0; i < typeDdContent.length; ++i){
      typeDdContent[i].style.transition = 'height 0.5s ease';
    };
  };
  if(id.includes('type')){
    let ddContentGrp1 = document.getElementsByClassName('dropdown__content--grp1'), i;
    for(i = 0; i < ddContentGrp1.length; ++i){
      ddContentGrp1[i].style.transition = 'height 0.5s ease';
    };
    let catDdId = id.replace('type', 'category');
    let catDdNextSiblings = document.querySelectorAll('#' + catDdId + ' ~ div'), j;
    for(j = 0; j < catDdNextSiblings.length; ++j){
      catDdNextSiblings[j].style.transform = 'translateY(0px)';
    };
    let itemDdId = id.replace('type', 'item');
    let itemDdNextSiblings = document.querySelectorAll('#' + itemDdId + ' ~ div'), k;
    for(k = 0; k < itemDdNextSiblings.length; ++k){
      itemDdNextSiblings[k].style.transform = 'translateY(0px)';
    };
  };
  if(id.includes('item')){
    let typeDdContent = document.getElementById('column_type').getElementsByClassName('dropdown__content'), i;
    for(i = 0; i < typeDdContent.length; ++i){
      typeDdContent[i].style.transition = 'height 0.5s ease';
    };
  };
  selectAnimationOff();
};

function selectAnimationOff(){
  let ddElement = document.getElementById(id).firstElementChild;
  ddElement.classList.remove('btn__dropdown--fadeInOut');
  if(id.includes('category')){
    let typeId = id.replace('category', 'type');
    let typeDdBtn = document.getElementById(typeId).firstElementChild;
    typeDdBtn.classList.remove('btn__dropdown--fadeInOut');
    let itemId = id.replace('category', 'item');
    let itemDdBtn = document.getElementById(itemId).firstElementChild;
    itemDdBtn.classList.remove('btn__dropdown--fadeInOut');
  };
  if(id.includes('type')){
    let catId = id.replace('type', 'category');
    let catDdBtn = document.getElementById(catId).firstElementChild;
    catDdBtn.classList.remove('btn__dropdown--fadeInOut');
    let itemId = id.replace('category', 'item');
    let itemDdBtn = document.getElementById(itemId).firstElementChild;
    itemDdBtn.classList.remove('btn__btn__dropdown--fadeInOut');
  };
  if(id.includes('item')){
    let catId = id.replace('item', 'category');
    let catDdBtn = document.getElementById(catId).firstElementChild;
    catDdBtn.classList.remove('btn__dropdown--fadeInOut');
    let typeId = id.replace('category', 'type');
    let typeDdBtn = document.getElementById(typeId).firstElementChild;
    typeDdBtn.classList.remove('btn__dropdown--fadeInOut');
  };
};

function selectAnimationOn(){
  let ddElement = document.getElementById(id).firstElementChild;
  ddElement.classList.add('btn__dropdown--fadeInOut');
  if(id.includes('category')){
    let typeId = id.replace('category', 'type');
    let typeDdBtn = document.getElementById(typeId).firstElementChild;
    typeDdBtn.classList.add('btn__dropdown--fadeInOut');
    let itemId = id.replace('category', 'item');
    let itemDdBtn = document.getElementById(itemId).firstElementChild;
    itemDdBtn.classList.add('btn__dropdown--fadeInOut');
  };
  if(id.includes('type')){
    let catId = id.replace('type', 'category');
    let catDdBtn = document.getElementById(catId).firstElementChild;
    catDdBtn.classList.add('btn__dropdown--fadeInOut');
    let itemId = id.replace('category', 'item');
    let itemDdBtn = document.getElementById(itemId).firstElementChild;
    itemDdBtn.classList.add('btn__dropdown--fadeInOut');
  };
  if(id.includes('item')){
    let catId = id.replace('item', 'category');
    let catDdBtn = document.getElementById(catId).firstElementChild;
    catDdBtn.classList.add('btn__dropdown--fadeInOut');
    let typeId = id.replace('category', 'type');
    let typeDdBtn = document.getElementById(typeId).firstElementChild;
    typeDdBtn.classList.add('btn__dropdown--fadeInOut');
  };
};

