export function cloneAllDropdowns(){
    let copyBtn = document.getElementsByClassName('btn__copy');
    copyBtn[0].addEventListener('click', function(){
        cloneCategoryDropdown();
        cloneTypeDropdown();
        cloneItemDropdown();
    });
};

let categoryIndex = 1;
let categoryCloneIndex = 2;
let typeIndex = 1;
let typeCloneIndex = 2;
let itemIndex = 1;
let itemCloneIndex = 2;

function cloneCategoryDropdown(){
    let categoryIndexCount = 'dd_category' + (categoryIndex);
    let categoryCloneCount = 'dd_category' + (categoryCloneIndex);
    let categoryId = document.getElementById(categoryIndexCount);
    let categoryClone = categoryId.cloneNode(true);
    categoryId.parentNode.insertBefore(categoryClone, categoryId.nextSibling);
    categoryClone.setAttribute('id', categoryCloneCount);
    categoryClone.childNodes[1].value = "Select Category";
    categoryCloneIndex++
    categoryIndex++
};

function cloneTypeDropdown(){
    let typeIndexCount = 'dd_type' + (typeIndex);
    let typeCloneCount = 'dd_type' + (typeCloneIndex);
    let typeId = document.getElementById(typeIndexCount);
    let typeClone = typeId.cloneNode(true);
    typeId.parentNode.insertBefore(typeClone, typeId.nextSibling);
    typeClone.setAttribute('id', typeCloneCount);
    typeClone.classList.remove('dropdown--visible');
    typeClone.classList.add('dropdown--hidden');
    typeClone.childNodes[1].value = "Select Type";
    typeCloneIndex++
    typeIndex++
};

function cloneItemDropdown(){
    let itemIndexCount = 'dd_item' + (itemIndex);
    let itemCloneCount = 'dd_item' + (itemCloneIndex);
    let itemId = document.getElementById(itemIndexCount);
    let itemClone = itemId.cloneNode(true);
    itemId.parentNode.insertBefore(itemClone, itemId.nextSibling);
    itemClone.setAttribute('id', itemCloneCount)
    itemClone.childNodes[1].value = "Select Item";
    itemCloneIndex++
    itemIndex++
};

export function deleteDropdown(){
    let removeBtn = document.getElementsByClassName('btn__remove');
    removeBtn[0].addEventListener('click', function(){
        let colLastDiv = document.querySelectorAll('#column_category > .dropdown:last-child')[0].id;
        if(colLastDiv != 'dd_category1'){   
            let categoryColumn = document.getElementById('column_category');
            let categoryColumnChild = categoryColumn.lastChild.previousElementSibling;
            categoryColumn.removeChild(categoryColumnChild);
            let typeColumn = document.getElementById('column_type');
            let typeColumnChild = typeColumn.lastChild.previousElementSibling;
            typeColumn.removeChild(typeColumnChild);
            let itemColumn = document.getElementById('column_item');
            let itemColumnChild = itemColumn.lastChild.previousElementSibling;
            itemColumn.removeChild(itemColumnChild);
            categoryCloneIndex--
            categoryIndex--
            typeCloneIndex--
            typeIndex--
            itemCloneIndex--
            itemIndex--
        }
    });
};




