// top_btn
$(document).ready(function() {
    // top_btn
    $("#top_btn").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });

    //slider
    $('.sub_video .player iframe').hide();
    $('.sub_video .player iframe').eq(0).show();
    $('.slider_wrap a').click(function () {
        $('.sub_video .player iframe').hide();
        let imgid=$(this).attr('href');
        $(imgid).fadeIn();
        $('.slider_wrap a').removeClass('on');
        $(this).addClass('on');
    })

    //slider
    var videoSwiper = new Swiper(".videoSwiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: ".slider .next_btn",
            prevEl: ".slider .prev_btn",
        },
        breakpoints: {
            900: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
        },
    });

    //slider
    var programSwiper = new Swiper(".programSwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: ".img_wrap .next_btn",
            prevEl: ".img_wrap .prev_btn",
        },
    });
    //slider
    var programSwiper2 = new Swiper(".programSwiper2", {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: ".img_wrap2 .next_btn",
            prevEl: ".img_wrap2 .prev_btn",
        },
    });

    /* 탭메뉴 */
    $(".tab").click(function(){
        $iid = $(this).attr("id").split("_").pop();
        currentTab = $iid;
    
        $(".tab-content").hide();
        $("#section_"+$iid).show();
    
        $(".tab").attr("class","tab");
        $(this).attr("class","tab on");
    });

    $(".tabHead").click(function(){
        $iid = $(this).attr("id").split("_").pop();
        currentTab = $iid;

        $(".tabHead_cont").hide();
        $("#tab"+$iid).show();

        $(".tabHead").attr("class","tabHead");
        $(this).attr("class","tabHead active");
    });

    $(".tab2").click(function(){
        $iid = $(this).attr("id").split("_").pop();
        currentTab = $iid;
    
        $(".tab-content2").hide();
        $("#section2_"+$iid).show();
    
        $(".tab2").attr("class","tab2");
        $(this).attr("class","tab2 on");
    });

});




var timer1;
var tempFrm;

/* 팝업창 */
function popupLayer(layerId){

    //초기화
    $(".dim-layer").removeClass("active");

    $("#"+layerId).addClass("active");
    $("html, body").css("overflow-y", "hidden");
    $("html, body").css("touch-action", "none");
    $("html, body").css("-webkit-overflow-scriolling", "none");
    $("html, body").css("overscroll-behavior", "none");
    $contents = $("#"+layerId).find(".pop-layer");

    // var $elWidth = ~~($contents.outerWidth()),
    //     $elHeight = ~~($contents.outerHeight());

    // $contents.css({
    //     marginTop: -$elHeight /2,
    //     marginLeft: -$elWidth/2
    // })
    
    $contents.find(".btn-layerClose").click(function(){
        $("#"+layerId).removeClass("active");
        $("html, body").css("overflow-y", "auto");
        $("html, body").css("touch-action", "auto");
        $("html, body").css("-webkit-overflow-scriolling", "auto");
        $("html, body").css("overscroll-behavior", "auto");
        stopTime();
    });
};


function hintLayer(layerId) {
    $("#" + layerId).show();
    $contents = $("#" + layerId).find(".hint_poplayer");
    var $elWidth = ~~($contents.outerWidth()),
    $elHeight = ~~($contents.outerHeight());
    //$contents.css({ 	marginTop: -$elHeight /2, 		marginLeft: -$elWidth/2 	})
    $contents.find(".btn-hintClose, .btSt1").click(function () {
        $("#" + layerId).hide();
    });
};

function resultLayer(layerId) {
    $("#" + layerId).show();
    $contents = $("#" + layerId).find(".hint_poplayer");
};

$(function () {
    $('.selec_ra').click(function () {
        // 5개 모두 선택했을때 알림
        var sum = 0;
        var qus = "";
        if ($('input:radio[class="selec_ra"]:checked').length >= 5) {
            for (var i = 1; i <= 5; i++) {
                if ($('input:radio[name="quiz' + i + '"]:checked').val() == $("#oa_chk" + i).val()) {
                    sum += 1;
                } else {
                    qus += i + ",";
                }
            }
            var txt = "";
            if (sum >= 4) {
                // $("#rouletteImg").attr("src", "./images/main/Roulette_active.gif");
                $.getJSON(
                    "https://ipsi.tsu.ac.kr/torg/ipsi/opencam/event_rul2?hakbun=202025013&callback=" +
                    "?",
                    function (data) {
                        console.log(data);
                        //성공 시 액션
                        $(".btSt1").show();
                        //$("#alerttxt").html(result.alerttxt);
                        //$("#gifttxt").html(data.alerttxt);
                        //$("#gifttxt").html(result.giftNm);
                        var myTimer = setTimeout(function () {
                            resultLayer('layer2');
                        });
                    }
                );
            } else {
                $("#fal_chk").val(qus.slice(0, -1));
                $("#info").html(
                    qus.slice(0, -1) + "번 문제가 틀렸네요.<br>hint를 확인해볼까요?"
                )
                resultLayer('layer1');
            }
        }
    });
});

function falchk() {
    var fal_chk = $("#fal_chk")
    .val()
    .split(",");
    for (var i = 0; i < fal_chk.length; i++) {
        $('input:radio[name="quiz' + fal_chk[i] + '"]').prop("checked", false);
    }
    var target = $('#layer1.event_layer');
    target.fadeOut();
};

function event_popup() {
    $('div#event').fadeOut();
    $('.event_layer').fadeOut();
    //$('div#event span.btn-layerClose').click();

    //$(".dim-layer").removeClass("active");

    $("#event_form").addClass("active");
    $("html, body").css("overflow-y", "hidden");
    $("html, body").css("touch-action", "none");
    $("html, body").css("-webkit-overflow-scriolling", "none");
    $("html, body").css("overscroll-behavior", "none");
    $contents = $("event_form").find(".pop-layer");
    
    $("#event_form .btn-layerClose").click(function(){
        $("#event_form").removeClass("active");
        $("html, body").css("overflow-y", "auto");
        $("html, body").css("touch-action", "auto");
        $("html, body").css("-webkit-overflow-scriolling", "auto");
        $("html, body").css("overscroll-behavior", "auto");
    });
};


function zipcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("postaddr1").value = roadAddr;
            // document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                // document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                // document.getElementById("sample4_extraAddress").value = '';
            }
        }
    }).open();
}


$.postJSON = function(url, data, func) { 
        $.post(url+(url.indexOf("?") == -1 ? "?" : "&")+"callback=?", data, func, "json"); 
    } 

function school_code(type)
{
    document.domain ="tsu.ac.kr";
    var window_left = (screen.width-640)/2;
    var window_top = (screen.height-480)/2;
    window.open('highcode.php?type=' + type,'고교코드검색','width=650,height=400,SCROLLBARS=yes, RESIZABLE=yes, status=yes,top=' + window_top + ',left=' + window_left + '');
}





// 학과탐방신청 폼 넘기기
$(document).on('click','#btnInsert', function() {
    if(!$("#user_nm").val()){
        alert("이름을 입력해주세요.");
        return ;
    }else if(!$("#phone").val()){
        alert("휴대폰을 입력해주세요.");
        return ;
    }else if(!$("#email").val()){
        alert("이메일을 입력해주세요.");
        return ;
    }else if(!$("#high").val() && !$("#high_etc")){
        alert("재학중인 학교 혹은 학교명을 직접 입력해주세요.");
        return ;
    }else if(!$("#hakgwa_cd option:selected").val()){
        alert("관심학과를 선택해주세요.");
        return ;
    }else if(!$("#tour_dt").val() || !$("#tour_ti").val()){
        alert("일시를 입력해주세요.");
        return ;
    }else if(!$("#tour_cnt").val()){
        alert("인원를 입력해주세요.");
        return ;
    }

    var trans_num = $("#phone").val();
    var regNumber = /^[0-9]*$/;
                
    if(!regNumber.test(trans_num))
    {
        alert("휴대폰번호는 숫자만 입력해주세요");
        return ;
    }

    if(trans_num.length==11 || trans_num.length==10) 
    {
    }
    else 
    {
        alert("유효하지 않은 휴대폰번호입니다.");
        return;
    }
    
    if(!$("#insertForm #auth_complet").val()){
        alert("휴대폰인증을 해주세요.");
        return ;
    }

    if(!$("input:checkbox[id='agree']").is(":checked")){
        alert("개인정보수집에 동의해주세요.");
        return ;
    }

    
    if(confirm("신청하시겠습니까?")){
        $.ajax({
            type:"post",
            url: './bbs/ajax.tour.php',
            dataType:"json",
            cache:false,
            data:$("#insertForm").serialize(),
            error:function(error){
                console.log(error);
            },
            success:function(result){
                if(result == '0') {
                    alert("이미 신청하셨습니다.");
                } else {
                    alert('신청이 완료되었습니다.');
                    location.href="/";								
                }										
            }
        });

    }else{
        return false;
    }
    
});

$(document).on('click','#btnInsert2', function() {
    

    if(!$("#user_nm2").val()){
        alert("이름을 입력해주세요.");
        return ;
    }else if(!$("#phone2").val()){
        alert("휴대폰을 입력해주세요.");
        return ;
    }else if(!$("#email2").val()){
        alert("이메일을 입력해주세요.");
        return ;
    }else if(!$("#high2").val() && !$("#high_etc2").val()){
        alert("재학중인 학교 혹은 학교명을 직접 입력해주세요.");
        return ;
    }else if(!$("#hakgwa_cd2 option:selected").val()){
        alert("관심학과를 선택해주세요.");
        return ;
    }


    var trans_num = $("#phone2").val();
    var regNumber = /^[0-9]*$/;
                
    if(!regNumber.test(trans_num))
    {
        alert("휴대폰번호는 숫자만 입력해주세요");
        return ;
    }
    
    if(!$("#insertForm2 #auth_complet").val()){
        alert("휴대폰인증을 해주세요.");
        return ;
    }

    if(trans_num.length==11 || trans_num.length==10) 
    {
    }
    else 
    {
        alert("유효하지 않은 휴대폰번호입니다.");
        return;
    }
    
    if(!$("input:checkbox[id='agree2']").is(":checked")){
        alert("개인정보수집에 동의해주세요.");
        return ;
    }

    
    if(confirm("신청하시겠습니까?")){
        var data = $("#insertForm2").serialize();
        $.getJSON('//ipsi.tsu.ac.kr/torg/ipsi/opencam/event_write_proc2/Y?that=11&callback=?', data, function(result) {
            if(result.result == "success"){

                alert(result.alerttxt);
                location.href = "/";
    
                /*if(data.cupn_no != ""){
                    $("#cpunNo").html(data.cupn_no);
                    popupLayer('layer1');
                }else{
                    alert("신청이 완료되었습니다.\n당첨자는 개별로 연락드립니다.");
                    location.href = "/torg/ipsi/opencam"
                }*/
    
            }else{
                //alert("이미 신청하셨습니다.");
                alert(result.alerttxt);
            }							
        });
    }else{
        return false;
    }
});

$(document).on('click','#btnInsert3', function() {
    if(!$("#user_nm3").val()){
        alert("이름을 입력해주세요.");
        return ;
    }else if(!$("#phone3").val()){
        alert("휴대폰을 입력해주세요.");
        return ;
    }else if(!$("#email3").val()){
        alert("이메일을 입력해주세요.");
        return ;
    }else if(!$("#high3").val()){
        alert("재학중인 학교 혹은 학교명을 직접 입력해주세요.");
        return ;
    }else if(!$("#hakgwa_cd3 option:selected").val()){
        alert("관심학과를 선택해주세요.");
        return ;
    }else if(!$("#tour_dt3").val() || !$("#tour_ti3").val()){
        alert("일시를 입력해주세요.");
        return ;
    }else if(!$("#tour_cnt3").val()){
        alert("인원를 입력해주세요.");
        return ;
    }

    if(!$('input.hakgwa_list').val()) {
        alert("관심학과를 선택해주세요.");
        return ;
    }

    var trans_num = $("#phone3").val();
    var regNumber = /^[0-9]*$/;
                
    if(!regNumber.test(trans_num))
    {
        alert("휴대폰번호는 숫자만 입력해주세요");
        return ;
    }

    if(trans_num.length==11 || trans_num.length==10) 
    {
    }
    else 
    {
        alert("유효하지 않은 휴대폰번호입니다.");
        return;
    }
    
    if(!$("#insertForm3 #auth_complet").val()){
        alert("휴대폰인증을 해주세요.");
        return ;
    }

    if(!$("input:checkbox[id='agree3']").is(":checked")){
        alert("개인정보수집에 동의해주세요.");
        return ;
    }

    
    if(confirm("신청하시겠습니까?")){
        $.ajax({
            type:"post",
            url: './bbs/ajax.tour.php',
            dataType:"json",
            cache:false,
            data:$("#insertForm3").serialize(),
            error:function(error){
                console.log(error);
            },
            success:function(result){
                if(result == '0') {
                    alert("이미 신청하셨습니다.");
                } else {
                    alert('신청이 완료되었습니다.');
                    location.href="/";								
                }										
            }
        });

    }else{
        return false;
    }	
});

$(document).on('click','#btnInsert4', function() {
    if(!$("#user_nm4").val()){
        alert("이름을 입력해주세요.");
        return ;
    }else if(!$("#phone4").val()){
        alert("휴대폰을 입력해주세요.");
        return ;
    }

    var trans_num = $("#phone4").val();
    var regNumber = /^[0-9]*$/;
                
    if(!regNumber.test(trans_num))
    {
        alert("휴대폰번호는 숫자만 입력해주세요");
        return ;
    }

    if(trans_num.length==11 || trans_num.length==10) 
    {
    }
    else 
    {
        alert("유효하지 않은 휴대폰번호입니다.");
        return;
    }			
    
    $.ajax({
        type:"post",
        url: './bbs/ajax_check.php',
        dataType:"json",
        cache:false,
        data:$("#insertForm4").serialize(),
        error:function(error){
            console.log(error);
        },
        success:function(result){
            if (result != ''){								
                var item = '';

                item += '<div class="check_item">';
                    item += '<h2 class="tit" style="font-size: 30px;">신청 확인</h2>';
                    item += '<div class="hak_visi details_box">';
                        item += '<ul>';
                            item += '<li class="input_box">';
                                item += '<label>구분</label>';
                                item += '<span>'+ result.type +'</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>이름</label>';
                                item += '<span>'+ result.name +'</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>휴대폰</label>';
                                item += '<span>'+ result.phone +'</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>이메일</label>';
                                item += '<span>'+ result.email +'</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>재학중인학교</label>';
                                item += '<span>'+ result.high +'</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>관심학과</label>';
                                item += '<span>'+ result.hakgwa +'</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>일시</label>';
                                item += '<span>'+ result.date + ' ' + result.time +'시</span>';
                            item += '</li>';
                            item += '<li class="input_box">';
                                item += '<label>인원</label>';
                                item += '<span>'+ result.cnt +'명</span>';
                            item += '</li>';
                        item += '</ul>';
                    item += '</div>';
                item += '</div>';

                $('div#request_confirm div.hak_visi').append(item);

            } else {
                alert('신청하신 내역이 없습니다.');
            }						
        }
    });
});



jQuery(function($){
    $.datepicker.regional["ko"] = {
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)", "7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],
        monthNamesShort: ["1월","2월","3월","4월","5월","6월", "7월","8월","9월","10월","11월","12월"],
        dayNames: ["일","월","화","수","목","금","토"],
        dayNamesShort: ["일","월","화","수","목","금","토"],
        dayNamesMin: ["일","월","화","수","목","금","토"],
        weekHeader: "Wk",
        dateFormat: "yymmdd",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: ""
    };
    $.datepicker.setDefaults($.datepicker.regional["ko"]);
});

$(function() {
    $("#tour_dt, #tour_dt3").datepicker({ changeMonth: true, changeYear: true, dateFormat: "yy-mm-dd", showButtonPanel: true, yearRange: "c-99:c+99", minDate: "+0d" });
});


$(function() {
    $('.tour_gubun').change(function() {
        // 학과탐방/설명회 신청에서 구분에 따라 나오는 내용 다르게 하기
        var value = $(this).val();
        $('input.hakgwa_list').remove();
        $('div.hakgwa_box span').remove();
        $('select#hakgwa_cd option:eq(0)').prop('selected', true);
        if(value == 'B') {
            // 설명회 신청일 경우 학년 안보이게, 학과 다중으로 선택 가능하게
            $('div.input_box.hakyeon').hide();
            $('div.hakgwa_list').show();
            $('input.hak_type').val('B');
        } else {
            $('div.input_box.hakyeon').show();
            $('div.hakgwa_list').hide();
            $('input.hak_type').val('A');
        }
    });

    $('select#hakgwa_cd, select#hakgwa_cd3').change(function() {
        // 설명회 신청 / 입시설명회 신청에서 관심학과 선택 시 다중으로 선택 하기
        // 학과 탐방일 경우 한개만 들어가게
        var pabox = $(this).parents('form');
//						var targetval = $('input.tour_gubun:checked').val();
        var targetval = pabox.find('input.hak_type').val();
        var value = $(this).val();
        var text = $(this).find('option:selected').text();
//						var hiddenval = $('input.hakgwa_list').val();
        var hiddenval = pabox.find('input.hakgwa_list').val();

        if(targetval == 'B') {
            // 설명회 신청에서만 사용
            // 중복으로 들어갈 경우 리턴펄쓰
            var alertcode = '';
            var itm = pabox.find('span.hakgwa_item');
            itm.each(function() {
                var itmval = $(this).find('button').data('id');

                if(itmval == value) {
                    alert('이미 선택된 학과입니다.');
                    //$('select#hakgwa_cd option:eq(0)').prop('selected', true);
                    alertcode = '1';
                }
            });
            if(alertcode == '1') return false;
        }

        if (!hiddenval) {
            // 학과 정보가 없으면 학과 정보 추가
            $('<input>').attr({'type': 'hidden', 'name': 'hakgwa_list'}).addClass('hakgwa_list').val(value).prependTo(pabox);
        } else {
            var hiddenvalsum = hiddenval + ',' + value;
            //$('input.hakgwa_list').val(hiddenvalsum);
            pabox.find($('input.hakgwa_list')).val(hiddenvalsum);
        }

        if(targetval == 'B') {
            // 설명회 신청일 경우 학과 다중 선택

            var hakgwabox = '';
            hakgwabox += '<span class="hakgwa_item">';
            hakgwabox +=	'<span>'+ text +'</span>';
            hakgwabox +=	'<button type="button" class="hakgwa_close" data-id="'+ value +'"><span>삭제</span></button>';
            hakgwabox += '</span>';

            //$('div.hakgwa_box').append(hakgwabox);
            pabox.find($('div.hakgwa_box')).append(hakgwabox)
        } else if (targetval == 'A') {
            
            // $('input.hakgwa_list').val(value);
            pabox.find($('input.hakgwa_list')).val(value);
        }
    });

    $(document).on('click', 'button.hakgwa_close', function() {
        var target = $(this).parents('span.hakgwa_item');
        target.remove();

        var itm = '';
        if($('span.hakgwa_item').length > 0) {
            $('span.hakgwa_item').each(function() {
                var value = $(this).find('button').data('id');

                itm += value + ',';
            });
            itm1 = itm.slice(0, -1);
            $('input.hakgwa_list').val(itm1);
        } else {
            $('input.hakgwa_list').remove();
        }
    });
});



