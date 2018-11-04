import $ from 'jquery';
import {cloneDropdown, deleteDropdown} from './modules/CloneDropdown';
import {mouseOver} from './modules/MouseOver';
import {dropdownSetup} from './modules/DropdownSetup';

function firstArray(){
  var category=['Frame', 'Mod', 'Primary', 'Secondary', 'Melee'];
  for(var i=0; i< category.length; i++)
  {
  $('<a/>', {
      html: category[i],
      class: 'dropdown__item'
      }).appendTo('.dropdown--first .dropdown__content');
  }
};

var secondId;

firstArray();
mouseOver();
dropdownSetup();
cloneDropdown();
deleteDropdown();  
