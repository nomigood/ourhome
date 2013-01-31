/* ============================================================
 * Distalbay system
 * nomi
 * 2013.01.15
============================================================ */

//footer selectbox
$(document).ready(function(){
    var fm = $('#fmsite > p > a')
    var title = $('.family_title')                                  //패밀리 사이트 타이틀 변수로 선언한다.
    var list = $('.family_list')                                    //패밀리 사이트 리스트 변수로 선언한다.
    
    //타이틀을 클릭했을때    
    fm.click(function(){                                           //#fmsite1 아래에 p태그를 클릭했을때 실행
        if($(this).hasClass('on')){                    //family title on 클래스가 있으면 실행
            list.animate({height:'0px'},'fast');      //ul태그 높이갚을 0으로 바꾼다
            $(this).removeClass("on");                 //타이틀에 family title on이란 클래스를 삭제한다
        }else{                                                      //family title on 클래스가 없을때 실행
            list.animate({height:'120px'},'normal');  //ul태그 높이갚을 180px으로 바꾼다
            $(this).addClass("on");                    //타이틀에 family title on이란 클래스를 추가한다
        }
        return false  
    });
        
    list.mouseleave(function(){                     //리스트에 마우스가 떠났을때 서브메뉴가 사라짐
        list.animate( { height: '0px' },'fast');    //ul태그 높이갚을 0으로 바꾼다
        title.removeClass("on");       //타이틀에 family title on이란 클래스를 삭제한다
    });
    
});
