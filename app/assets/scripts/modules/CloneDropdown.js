import $ from 'jquery';

var firstIndex = 1;
var firstClone = 2;
var secondIndex = 1;
var secondClone = 2;
var thirdIndex = 1;
var thirdClone = 2;

export function cloneDropdown(){
    $('.btn__copy').on('click', function() {;
        let firstNextIndex = '#dd_first' + (firstIndex);
        $($(firstNextIndex).clone(true, true).attr('id', 'dd_first' + (firstClone)).insertAfter('.dropdown--first:last'));
        $('.dropdown--first .btn__dropdown--ignore:last').prop('value', 'Select Category');
        let secondNextIndex = '#dd_second' + (secondIndex); 
        $($(secondNextIndex).clone(true, true).attr('id', 'dd_second' + (secondClone)).removeClass('dropdown--visible').addClass('dropdown--hidden').insertAfter('.dropdown--second:last'));
        $('.dropdown--second .btn__dropdown:last').prop('value', 'Select Type');
        let thirdNextIndex = '#dd_third' + (thirdIndex);
        $($(thirdNextIndex).clone(true, true).attr('id', 'dd_third' + (thirdClone)).removeClass('dropdown--visible').addClass('dropdown--hidden').insertAfter('.dropdown--third:last'));
        $('.dropdown--third .btn__dropdown:last').prop('value', 'Select Item');
        console.log($('.dropdown--third'));
        firstClone++
        firstIndex++
        secondClone++
        secondIndex++
        thirdClone++
        thirdIndex++
    });
};

export function deleteDropdown(){
    $(".btn__remove").on('click', function(){
      console.log('run');
        let colLastDiv = $('#column_first div:last').parent().attr('id');
        if(colLastDiv != 'dd_first1'){           
            $('#column_first div').eq(-2).remove();
            $('#column_second div').eq(-2).remove();
            $('#column_third div').eq(-2).remove();
            firstClone--
            firstIndex--
            secondClone--
            secondIndex--
            thirdClone--
            thirdIndex--
        }
    });
};




