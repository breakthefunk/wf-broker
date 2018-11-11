import $ from 'jquery';
import {cloneAllDropdowns, deleteDropdown} from './modules/CloneDropdown';
import {moMoEvents} from './modules/MouseOver';
import {dropdownSetup, frames} from './modules/DropdownSetup';

function firstArray(){
  var category=['Frame', 'Mod', 'Primary', 'Secondary', 'Melee'];
  for(var i=0; i< category.length; i++)
  {
  $('<a/>', {
      html: category[i],
      class: 'dropdown__list'
      }).appendTo('.dropdown--category .dropdown__content');
  }
};

firstArray();
dropdownSetup();
cloneAllDropdowns();
deleteDropdown(); 
moMoEvents();
