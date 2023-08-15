

document.addEventListener("DOMContentLoaded", function(){
    partyView = new party_view();

    //통신
    axios({
        url: '/komi/partys', // 통신할 웹문서
        method: 'get', // 통신할 방식
        data: { // 인자로 보낼 데이터
          userid : 23
          ,partyid : 121
        }
    }).then(function(response){
        console.log('response : ' + response);
        partyView.init(response);
    });

});


function party_view() {
    var object = {};
}

party_view.prototype = {
    init : function(response) {

        
        
        



        var imgUrl = "/komi/resources/images/launcher.png";
        var nickname = "낭만소년";
        var region = "강원도";
        var beleiveNum = 60;
        var belImgUrl = "/komi/resources/images/launcher.png";

        var title = "삼겹살 먹으러 가실 분!";
        var category = "모임";
        var befordate = 1;
        var price = 250000;
        var deposit = 100000;
        var barPercent = (deposit == 0) ? 0 : deposit/price * 100;
        var people = 4;
        var people_price = (price - deposit)/people;
        var detail = "삼겹살 먹으러 가고 싶어요. 사람은 3명 정도면 좋을 것 같고요.\
        <br>제가 10만원 걸고 5만원만 둘이서 n빵하면 될것 같아요.\
        <br>장소는 동작구 성대시장 앞에 삼겹살 집이에요~ \
        <br>7시까지 만나요~";

        var callNum = 23;
        var chatNum = 100;
        var selecNum = 100;

        

        //프로필
        $("#article-profile-image-box img").attr("src", imgUrl);
        $("#article-nickname").text(nickname);
        $("#article-region-name").text(region);
        
        //신뢰도
        $("#bar-color-id").css({"width" : beleiveNum+"%"})
        $("#temperature-face-id").attr("src", belImgUrl);
        $("#text-color-id").text(beleiveNum+"%");

        //게시글 타이틀
        $("#article-title").text(title);
        $("#article-category").text(category);
        $("#article-befordate").text(befordate);

        //총금액
        $("#article-price").text("가격 : " + comma(String(price)) + "원");

        //거치금
        $("#article-deposit").text("예치금 : " + comma(String(deposit)) + "원");

        //막대 크기
        $("#article-deposit-bar").css({"width": barPercent + "%"});

        //인원
        $("#article-people").text("모집인원 " + people + "명");
        $("#article-people-price").text("인당 " + comma(String(people_price)) + "원");

        //게시글 내용
        $("#article-detail p").html(detail);

        //하단 
        $("#article-counts").text("찜 " + callNum + " ∙ 채팅 " + chatNum + " ∙ 조회 " + selecNum);





    }
    ,
    makeMessage : function(){
        var str = '\
        <div class="chating-body-msg">\
            <div class="chating-body-msg-w">\
                <div class="chating-body-msg-profile">\
                    <img class="chating-body-msg-profile-img" src="/komi/resources/images/profile.png">\
                    <div class="chating-body-msg-profile-name">'+name+'</div>\
                </div>\
                <div class="chating-body-msg-box">\
                    <div class="chating-body-msg-box-read bubble-msg">'
                        +contents+
                    '</div>\
                    <div class="chating-body-msg-box-date">\
                        '+date+'\
                    </div>\
                    <button class="chating-body-msg-box-pop">\
                        <img class="chating-body-msg-box-pop-img" src="./komi/resources/images/msg_pop_img.png">\
                    </button>\
                </div>\
            </div>\
        </div>';
    }
    ,
    buttonEvent : function(){
        

        //프로필
        $("#article-profile-image").on("click", function(){
            
        })

        //프로필
        document.getElementById("article-profile-image").addEventListener("click", function(){
            
        })
    }
}

function comma(str) {
    


    return str;
}