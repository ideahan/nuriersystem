/**
* Skip include
* ------------------
*/

//초기 레이아웃 세팅시 화면 튀는현상 방지
// document.body.style.display='none';

(function(){

	var str='';
	var hdName = jQuery('body').attr('class');
	if(!hdName){hdName=''};
//	alert(hdName);

	str+='<a href="#content" class="skip btn_white btn_sm">본문 바로가기</a><!-- //skip -->';

	switch(hdName){

		case 'inBanner':
			str+='<div class="topBanner">';
			str+='	<div class="inBox">';
			str+='		<!--이미지로 넣는 경우 w:820px h:80px이하로 html로 하는 경우 css포함 배경색은 topBanner에 세팅 흰색 배경 불가 -->';
			str+='		<!--img src="../../../resource/images/img/img_topBanner.png" alt="한신평신도 성서대학 개강 개강일 2017. 03. 07(화요일) 입학자격 : 한신교회 교인은 누구나 (타교인도 등록가능) 입학금 : 한학기에 10,000원 제출서류 : 입학지원서 기간 : 한 학기 13주 과정 "-->';
			str+='		<ul>';
			str+='			<li>';
			str+='				<strong>한신평신도 <i>성서대학 개강</i></strong>';
			str+='				<span>개강일 2017. 03. 07(화요일)</span>';
			str+='			</li>';
			str+='			<li>';
			str+='				<ul class="subTxt">';
			str+='					<li>입학자격 : 한신교회 교인은 누구나 (타교인도 등록가능)</li>';
			str+='					<li>입학금 : 한학기에 10,000원</li>';
			str+='					<li>제출서류 : 입학지원서</li>';
			str+='					<li>기간 : 한 학기 13주 과정</li>';
			str+='				</ul>';
			str+='			</li>';
			str+='		</ul>';
			str+='		<div class="innerBtn">';
			str+='			<input type="checkbox" name="" id="innerClosechk">';
			str+='			<label for="innerClosechk">오늘은 그만보기</label>';
			str+='			<a href="#nolink" class="innerClose">닫기</a>';
			str+='		</div>';
			str+='	</div>';
			str+='</div>';
		break;
	}

document.write(str);


})();
