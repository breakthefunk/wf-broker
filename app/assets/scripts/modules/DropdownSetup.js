import $ from 'jquery';

var secondId;

export function dropdownSetup(){
    $('#dd_first1 > .dropdown__content > .dropdown__item').click( function(){ 
        let firstId = '#' + $(this).parent().parent().attr('id');
        secondId = firstId.replace('dd_first', 'dd_second');
        let secondBtn = $(secondId).find(">:first-child");
        let secondContent = $(secondId).children().eq(1);
        $($(this).parent().prev('input')).prop('value', $(this).html());
        if($(secondId).hasClass('dropdown--hidden')){
            $(secondId).removeClass('dropdown--hidden');
            $(secondId).addClass('dropdown--visible');
        };
        if($(this).html() == 'Frame'){
            secondContent.addClass('dropdown__content--second');
            $(secondId).addClass('dropdown--frame');
            $(secondBtn).prop('value',  $(this).html());
            $(secondContent).empty();
            let frames = [];
            $.getJSON('frames.json', function(data) {
                $.each(data, function(index, value){
                    for (var i = 0; i < value.length; i++) {
                        frames.push(value[i].name);
                    }
                });
                for(var i=0; i < frames.length; i++)
                {
                    $('<a/>', {
                    html: frames[i],
                    class: 'dropdown__item'
                    }).appendTo(secondContent);
                }
                secondDropdownSetup();
            });  
        }
        if($(this).html() == 'Mod'){
            $(secondBtn).prop('value', $(this).html());
            $(secondContent).empty();
            var mods=['Mod1', 'Mod2', 'Mod3', 'Mod4', 'Mod5', 'Mod6', 'Mod7'];
            for(var i=0; i< mods.length; i++)
            {
            $('<a/>', {
                html: mods[i],
                class: 'dropdown__item'
                }).appendTo(secondContent);
            }
            secondDropdownSetup();
        }
        if($(this).html() == 'Primary'){
            $(secondBtn).prop('value', $(this).html());
            $(secondContent).empty();
            var weapons=['Weapon1', 'Weapon2'];
            for(var i=0; i< weapons.length; i++)
            {
            $('<a/>', {
                html: weapons[i],
                class: 'dropdown__item'
                }).appendTo(secondContent);
            }
            secondDropdownSetup();
        }
    });
    $('#dd_first1 > .dropdown__checkbox').click(function(){
        let parent = $(this).parent()
        let thirdId = $(parent).attr('id').replace('first', 'third');
        let secondId = $(parent).attr('id').replace('first', 'second');
        let thirdBtn = '#' + thirdId + " > .btn__dropdown";
        let secondBtn = '#' + secondId + " > .btn__dropdown";
        if ($(this).is(':checked')){
            $(this).next().addClass('checked');
            $(thirdBtn).addClass('checked');
            $(secondBtn).addClass('checked');

        }
        else if(!$(this).is(':checked')){
            $(this).next().removeClass('checked');
            $(thirdBtn).removeClass('checked');
            $(secondBtn).removeClass('checked');
        }
        else{
            alert('Please select third');
        }
    });
};

function secondDropdownSetup(){
    let secondSelector = secondId + ' > .dropdown__content > .dropdown__item'
    let thirdSelector = secondSelector.replace('second', 'third');
    $(secondSelector).click(function(){ 
        let secondInput = $(this);
        let secondId = '#' + $(this).parent().parent().attr('id');
        let thirdId = secondId.replace('dd_second', 'dd_third');
        let thirdBtn = $(thirdId).find(">:first-child");
        let thirdContent = $(thirdId).children().eq(1);
        $($(this).parent().prev('input')).prop('value', $(this).html());
        if($(thirdId).hasClass('dropdown--hidden')){
            $(thirdId).removeClass('dropdown--hidden');
            $(thirdId).addClass('dropdown--visible');
        }
        let checkItemType = $(this).parent().parent().hasClass('dropdown--frame');
        if(checkItemType == true){
            $(thirdContent).empty();
            let frameParts = [];
            $.getJSON('frames.json', function(data) {
                $.each(data, function(index, value){
                    for (var i = 0; i < value.length; i++) {
                        if($(secondInput).html() == value[i].name){
                            frameParts.push(value[i].part1);
                            frameParts.push(value[i].part2);
                            frameParts.push(value[i].part3);
                            frameParts.push(value[i].blueprint);
                            frameParts.push(value[i].set);
                        }
                    }
                });
                for(var i=0; i < frameParts.length; i++)
                {
                    $('<a/>', {
                    html: frameParts[i],
                    class: 'dropdown__item'
                    }).appendTo(thirdContent);
                }
                $(thirdSelector).click(function(){
                    let thirdString = $(this).html();
                    $(thirdBtn).prop('value', thirdString);
                });
            });
        }
    });
  };

// $(document).ready(function() {
//     $.ajax({
//         url: 'https://api.warframe.market/v1/items',
//         type: 'GET',
//         dataType: 'json',
//         success: function(response) { 
//             alert('hello!');
//             console.log(response);
//         },
//         error: function() { alert('boo!'); },
//         beforeSend: setHeader
//     });
// });
// function setHeader(xhr) {
//     xhr.setRequestHeader('platform', 'pc');
//     xhr.setRequestHeader('language', 'en');
// }
  