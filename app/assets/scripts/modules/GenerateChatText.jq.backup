import $ from 'jquery';

export function generateChatText(){
    let msgArray = []
    $('.btn_generate').on('click', function(e) {
        e.preventDefault();
        $('div.section').find('.dropdown_btn').each(function(){
        msgArray.push($(this).val());
        console.log(msgArray); // < read the length of the amended array here
        });
        msgArray = [];
    });
};

