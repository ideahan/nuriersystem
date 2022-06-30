/**
* Location include
* ------------------
* 레이어 팝업 링크 주소에 \'  주의
*/
(function(){


var str='';
str+='		<!-- location_area -->';
str+='		<div class="location_area">';

str+='			<!-- location -->';
str+='			<ol class="location">';
str+='				<li><i class="home"></i><span class="blind">홈</span></li>';
str+='				<li><i class="fa fa-2x fa-angle-right"></i><span>예배와 찬양</span></li>';
str+='				<li><i class="fa fa-2x fa-angle-right"></i><span>예배</span></li>';
str+='			</ol>';
str+='			<!-- location -->';

str+='			<!-- location_nav -->';
str+='			<div class="location_nav">';
str+='				<div class="menu_area">';
str+='					<ul>';
// str+='						<li class="home"><a href="#nolink">홈</a></li>';
str+='						<li class="home"><a href="#nolink"><i></i><span class="blind">홈</span></a></li>';
str+='						<li>';
str+='							<dl class="dropdown location_type">';
str+='								<dt><a href="#nolink" title="메뉴 펼치기 "role="button"><span>예배와 찬양</span><i class="fa fa-angle-down"></i></a></dt>';
str+='								<dd>';
str+='									<ul>';
str+='										<li><a href="#nolink">예배</a></li>';
str+='										<li><a href="#nolink">찬양</a></li>';
str+='									</ul>';
str+='								</dd>';
str+='							</dl>';
str+='						</li>';
str+='						<li class="ml-1">';
str+='							<dl class="dropdown location_type" >';
str+='								<dt><a href="#nolink" title="메뉴 펼치기 "role="button"><span>찬양</span><i class="fa fa-angle-down"></i></a></dt>';
str+='								<dd>';
str+='									<ul>';
str+='										<li><a href="#nolink">주일예배찬양</a></li>';
str+='										<li><a href="#nolink">열린찬양</a></li>';
str+='									</ul>';
str+='								</dd>';
str+='							</dl>';
str+='						</li>';
str+='					</ul>';


str+='					<div class="btn_area">';
str+='						<a href="#nolink" onClick="layerPopup.open(this, \'../common/totalmenu.html\')" class="totalmenu_btn" title="전체메뉴 레이어팝업 열기"><i class="fa fa-2x fa-bars"></i><span class="blind">전체메뉴</span></a>';
// str+='						<a href="#nolink" onClick="searchPopup.open(this, \'../search/HPCB1931.html\')" class="search_btn sc_search_btn"><i class="fa fa-2x fa-search"><span class="blind">통합검색</span></i></a>';
str+='					</div>';


str+='				</div>';
str+='			</div>';
str+='			<!-- //location_nav -->';
str+='		</div>';
str+='		<!-- //location_area -->';


document.write(str);


})();
