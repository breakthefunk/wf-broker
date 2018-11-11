import $ from 'jquery';

let typeElement;
let typeContent;
let typeBtn;
let itemUrl;

export function dropdownSetup(){
    let categoryDropdown = document.getElementsByClassName('col'), i;
    for(i = 0; i < categoryDropdown.length; ++i){
    categoryDropdown[i].addEventListener('click', function(e){
        if(e.target.matches('.dropdown__list')){
            let categoryId = e.target.parentNode.parentNode.id;
            e.target.parentNode.parentNode.firstElementChild.value = e.target.textContent;
            let typeId = categoryId.replace('dd_category', 'dd_type');
            typeElement = document.getElementById(typeId);
            typeBtn = typeElement.firstElementChild;
            typeContent = typeElement.children[1];
            if(typeElement.classList.contains('dropdown--hidden')){
                typeElement.classList.remove('dropdown--hidden');
            };
            if(e.target.parentNode.parentNode.firstElementChild.value == 'Frame'){
                initialSetup();
                fetch('frames.json').then(function(respone){
                        return respone.json();
                    }).then(function(data){
                        let stringify = JSON.stringify(data);
                        let object = JSON.parse(stringify);
                        for(var i=0; i < object.Frames.length; i++){
                            $('<a/>', {
                            html: object.Frames[i].name,
                            class: 'dropdown__list'
                            }).appendTo(typeContent);
                        };
                    });
                };
            }
            if(e.target.parentNode.parentNode.firstElementChild.value == 'Primary'){
                initialSetup();
                fetch('frames.json').then(function(respone){
                    return respone.json();
                })
                .then(function(data){
                    let stringify = JSON.stringify(data);
                    let object = JSON.parse(stringify);
                    for(var i=0; i < object.Primary.length; i++){
                        $('<a/>', {
                            html: object.Primary[i].name,
                            class: 'dropdown__list'
                        })
                        .appendTo(typeContent);
                        const myHeaders = new Headers();
                        myHeaders.append('platform', 'pc');
                        myHeaders.append('language', 'en');
                        let partUrl = object.Primary[i].part1_url;
                        let itemUrl = 'https://api.warframe.market/v1/items/' + partUrl;
                        fetch(itemUrl, {
                            method: 'GET',
                            headers: myHeaders,
                        }).then(function(respone){
                            return respone.json();
                        }).then(function(j){
                            console.log(j);
                        });
                    }
                });
                
            }
            if(e.target.parentNode.parentNode.firstElementChild.value == 'Secondary'){
                initialSetup();
                fetch('frames.json').then(function(respone){
                    return respone.json();
                })
                .then(function(data){
                    let stringify = JSON.stringify(data);
                    let object = JSON.parse(stringify);
                    for(var i=0; i < object.Secondary.length; i++){
                        $('<a/>', {
                        html: object.Secondary[i].name,
                        class: 'dropdown__list'
                        }).appendTo(typeContent);
                    };
                });
            }
            if(e.target.parentNode.parentNode.firstElementChild.value == 'Melee'){
                initialSetup();
                fetch('frames.json').then(function(respone){
                    return respone.json();
                })
                .then(function(data){
                    let stringify = JSON.stringify(data);
                    let object = JSON.parse(stringify);
                    for(var i=0; i < object.Melee.length; i++){
                        $('<a/>', {
                        html: object.Melee[i].name,
                        class: 'dropdown__list'
                        }).appendTo(typeContent);
                    };
                });
            };
        });  
        $('#dd_category1 > .dropdown__checkbox').click(function(){
            let parent = $(this).parent()
            let itemId = $(parent).attr('id').replace('category', 'item');
            let typeId = $(parent).attr('id').replace('category', 'type');
            let itemBtn = '#' + itemId + " > .btn__dropdown";
            let typeBtn = '#' + typeId + " > .btn__dropdown";
            if ($(this).is(':checked')){
                $(this).next().addClass('checked');
                $(itemBtn).addClass('checked');
                $(typeBtn).addClass('checked');

            }
            else if(!$(this).is(':checked')){
                $(this).next().removeClass('checked');
                $(itemBtn).removeClass('checked');
                $(typeBtn).removeClass('checked');
            }
            else{
                alert('Please select item');
            }
        });
    };
};

function initialSetup(){
    typeContent.classList.add('dropdown__content--type');
    typeElement.classList.add('dropdown--primary');
    //typeBtn.value = e.target.textContent;
    while(typeContent.children[1]){
        typeContent.removeChild(typeContent.children[1]);
    };
};

// function typeDropdownSetup(){
//     let typeSelector = typeId + ' > .dropdown__content > .dropdown__list'
//     let itemSelector = typeSelector.replace('type', 'item');
//     $(typeSelector).click(function(){ 
//         let typeInput = $(this);
//         let typeId = '#' + $(this).parent().parent().attr('id');
//         let itemId = typeId.replace('dd_type', 'dd_item');
//         let itemBtn = $(itemId).find(">:category-child");
//         let itemContent = $(itemId).children().eq(1);
//         $($(this).parent().prev('input')).prop('value', $(this).html());
//         if($(itemId).hasClass('dropdown--hidden')){
//             $(itemId).removeClass('dropdown--hidden');
//             $(itemId).addClass('dropdown--visible');
//         }
//         let checkItemType = $(this).parent().parent().hasClass('dropdown--frame');
//         if(checkItemType == true){
//             $(itemContent).empty();
//             let frameParts = [];
//             $.getJSON('frames.json', function(data) {
//                 $.each(data, function(index, value){
//                     for (var i = 0; i < value.length; i++) {
//                         if($(typeInput).html() == value[i].name){
//                             frameParts.push(value[i].part1);
//                             frameParts.push(value[i].part2);
//                             frameParts.push(value[i].part3);
//                             frameParts.push(value[i].blueprint);
//                             frameParts.push(value[i].set);
//                         }
//                     }
//                 });
//                 for(var i=0; i < frameParts.length; i++)
//                 {
//                     $('<a/>', {
//                     html: frameParts[i],
//                     class: 'dropdown__list'
//                     }).appendTo(itemContent);
//                 }
//                 $(itemSelector).click(function(){
//                     let itemString = $(this).html();
//                     $(itemBtn).prop('value', itemString);
//                 });
//             });
//         }
//     });
//   };
// };



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
//     function setHeader(xhr) {
//         xhr.setRequestHeader('platform', 'pc');
//         xhr.setRequestHeader('language', 'en');
//     }
// });

// const myHeaders = new Headers();
// myHeaders.append('platform', 'pc');
// myHeaders.append('language', 'en');
// return fetch('https://api.warframe.market/v1/items', {
//     method: 'GET',
//     headers: myHeaders,
// }).then(function(respone){
//     console.log(myHeaders);
//     return respone.json();
//     }).then(function(data){
//         console.log(data);
//     });
// };