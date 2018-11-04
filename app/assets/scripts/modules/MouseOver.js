import $ from 'jquery';

export function mouseOver(){
  $('#dd_first1').mouseover(function(){
    let id = $(this).attr('id');
    let idProper = '#' + id;
    let contentPath = idProper + ' > .dropdown__content';
    let contentHeight = $(contentPath).get(0).scrollHeight;
    let pushHeight = contentHeight + 1;
    let translateVal = 'translateY(' + pushHeight + 'px)';
    let secondContent = contentPath.replace('first', 'second');
    $(secondContent).css('transition', 'none');
    $(contentPath).css("height", contentHeight);
    $(this).nextUntil(id).css('transform', translateVal);
  });
  $('#dd_first1').mouseout(function(){
    let id = $(this).attr('id');
    let idProper = '#' + id;
    let contentPath = idProper + ' > .dropdown__content';
    let secondContent = contentPath.replace('first', 'second');
    $(secondContent).css('transition', 'height 0.5s ease');
    $(contentPath).css("height", '0px');
    $(this).nextUntil(id).css('transform', 'translateY(0px');
  });
  $('#dd_third1').mouseover(function(){
    let id = $(this).attr('id');
    let idProper = '#' + id;
    let contentPath = idProper + ' > .dropdown__content';
    let contentHeight = $(contentPath).get(0).scrollHeight;
    let secondContent = contentPath.replace('third', 'second');
    let pushHeight = contentHeight + 1;
    let translateVal = 'translateY(' + pushHeight + 'px)';
    $(secondContent).css('transition', 'none');
    $(contentPath).css("height", contentHeight);
    $(this).nextUntil(id).css('transform', translateVal);
  });
  $('#dd_third1').mouseout(function(){
    let id = $(this).attr('id');
    let idProper = '#' + id;
    let contentPath = idProper + ' > .dropdown__content';
    let secondContent = contentPath.replace('third', 'second');
    $(secondContent).css('transition', 'height 0.5s ease');
    $(contentPath).css("height", '0px');
    $(this).nextUntil(id).css('transform', 'translateY(0px');
  });
  $('#dd_second1').mouseover(function(){
    let id = $(this).attr('id');
    let idProper = '#' + id;
    let contentPath = idProper + ' > .dropdown__content';
    let contentHeight = $(contentPath).get(0).scrollHeight;
    let firstId = id.replace('second', 'first');
    let firstThis = '#' + firstId;
    let thirdId = id.replace('second', 'third');
    let thirdThis = '#' + thirdId;
    let pushHeight = contentHeight + 1;
    let translateVal = 'translateY(' + pushHeight + 'px)';
    let firstContent = contentPath.replace('second', 'first');
    let thirdContent = contentPath.replace('second', 'third');
    $(firstContent).css('transition', 'none');
    $(thirdContent).css('transition', 'none');
    $(contentPath).css("height", contentHeight);
    $(this).nextUntil(id).css('transform', translateVal);
    $(firstThis).nextUntil(firstId).css("transform", translateVal);
    $(thirdThis).nextUntil(thirdId).css("transform", translateVal);
  });
  $('#dd_second1').mouseout(function(){
    let id = $(this).attr('id');
    let idProper = '#' + id;
    let contentPath = idProper + ' > .dropdown__content';
    let firstId = id.replace('second', 'first');
    let firstThis = '#' + firstId;
    let thirdId = id.replace('second', 'third');
    let thirdThis = '#' + thirdId;
    let firstContent = contentPath.replace('second', 'first');
    let thirdContent = contentPath.replace('second', 'third');
    $(firstContent).css('transition', 'height 0.5s ease');
    $(thirdContent).css('transition', 'height 0.5s ease');
    $(contentPath).css("height", '0px');
    $(this).nextUntil(id).css('transform', 'translateY(0px)');
    $(firstThis).nextUntil(firstId).css("transform", 'translateY(0px)');
    $(thirdThis).nextUntil(thirdId).css("transform", 'translateY(0px)');
  });
};
