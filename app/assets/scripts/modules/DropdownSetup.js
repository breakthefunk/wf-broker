import $ from 'jquery';

let typeElement;
let typeContent;
let itemType
let ddBtn;

export function dropdownSetup(){
    let columns = document.getElementsByClassName('col'), i;
    for(i = 0; i < columns.length; ++i){
        columns[i].addEventListener('click', function(e){
            if(e.target.matches('.dropdown__list')){
                let ddId = e.target.parentNode.parentNode.id;
                ddBtn = e.target.parentNode.parentNode.firstElementChild;
                ddBtn.value = e.target.textContent;
                if(ddId.includes('category')){
                    let typeId = ddId.replace('category', 'type');
                    typeElement = document.getElementById(typeId);
                    let typeBtn = typeElement.firstElementChild;
                    typeContent = typeElement.children[1];
                    if(typeElement.classList.contains('dropdown--hidden')){
                        typeElement.classList.remove('dropdown--hidden');
                    };
                    if(ddBtn.value == 'Frame'){
                        itemType = 'warframe'
                        typeBtn.value = 'Select Frame';
                        initialSetup();
                        fetchTypeContent();
                    };
                    if(ddBtn.value == 'Primary'){
                        itemType = 'primary'
                        typeBtn.value = 'Select Primary';
                        initialSetup();
                        fetchTypeContent();
                        
                    };
                    if(ddBtn.value == 'Secondary'){
                        itemType = 'secondary'
                        typeBtn.value = 'Select Secondary';
                        initialSetup();
                        fetchTypeContent();
                      
                    }
                    if(ddBtn.value == 'Melee'){
                        itemType = 'melee'
                        typeBtn.value = 'Select Melee';
                        initialSetup();
                        fetchTypeContent();
                    };
                };
                if(ddId.includes('type')){
                    let itemId = ddId.replace('type', 'item');
                    let itemElement = document.getElementById(itemId);
                    if(itemElement.classList.contains('dropdown--hidden')){
                        itemElement.classList.remove('dropdown--hidden');
                    };
                    let itemBtn = itemElement.firstElementChild;
                    let itemContent = itemElement.children[1];
                    while(itemContent.children[0]){
                        itemContent.removeChild(itemContent.children[0]);
                    };
                    let itemName = e.target.textContent;
                    itemBtn.value = 'Select Part';
                    fetch('frames.json').then(function(respone){
                        return respone.json();
                    }).then(function(data){
                        var key;
                        var url;
                        for (key in data) {
                            if (data.hasOwnProperty(key)) {
                                for(var i=0; i < data[key].length; i++){
                                    if(data[key][i].name == itemName){
                                        url = data[key][i].part1_url;
                                    }
                                }
                            };
                        };
                        const myHeaders = new Headers();
                        myHeaders.append('platform', 'pc');
                        myHeaders.append('language', 'en');
                        let itemUrl = 'https://api.warframe.market/v1/items/' + url;
                        fetch(itemUrl, {
                            method: 'GET',
                            headers: myHeaders,
                        }).then(function(respone){
                            return respone.json();
                        }).then(function(data){
                            var key;
                            for (key in data) {
                                if (data.hasOwnProperty(key)) {
                                    for(var i=0; i < data[key].item.items_in_set.length; i++){
                                        let listItem = data[key].item.items_in_set[i].en.item_name.replace(itemName, '');
                                        $('<a/>', {
                                            html: listItem,
                                            class: 'dropdown__list'
                                        }).appendTo(itemContent);
                                    };
                                };
                            };
                        });
                    });
                };
            };
        });
    };
};
//         $('#dd_category1 > .dropdown__checkbox').click(function(){
//             let parent = $(this).parent()
//             let itemId = $(parent).attr('id').replace('category', 'item');
//             let typeId = $(parent).attr('id').replace('category', 'type');
//             let itemBtn = '#' + itemId + " > .btn__dropdown";
//             let typeBtn = '#' + typeId + " > .btn__dropdown";
//             if ($(this).is(':checked')){
//                 $(this).next().addClass('checked');
//                 $(itemBtn).addClass('checked');
//                 $(typeBtn).addClass('checked');

//             }
//             else if(!$(this).is(':checked')){
//                 $(this).next().removeClass('checked');
//                 $(itemBtn).removeClass('checked');
//                 $(typeBtn).removeClass('checked');
//             }
//             else{
//                 alert('Please select item');
//             };
//         });
//     };
// };

function fetchTypeContent(){
    fetch('frames.json').then(function(respone){
        return respone.json();
    }).then(function(data){
        var key;
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                for(var i=0; i < data[key].length; i++){
                    if(data[key][i].tag == itemType){
                        $('<a/>', {
                            html: data[key][i].name,
                            class: 'dropdown__list'
                        }).appendTo(typeContent);
                    }
                }
            };
        };
    });
}

function initialSetup(){
    typeContent.classList.add('dropdown__content--type');
    typeElement.classList.add('dropdown--primary');
    //typeBtn.value = e.target.textContent;
    while(typeContent.children[1]){
        typeContent.removeChild(typeContent.children[1]);
    };
};

