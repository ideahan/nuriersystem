/**
* Header include
* ------------------
* 레이어 팝업 링크 주소에 \'  주의
*/
(function(){

var str='';
var hdName = jQuery('#wrap').attr('class');
if(!hdName){hdName=''};
//alert(hdName);
	str+='	<!-- header -->';
	str+='	<header id="header">';
	str+='		<h1><img src="../../../resource/images/common/img_njt_logo.png" alt="NJT Creative group" /></h1>';
	str+='		<ul>';
	str+='			<li><a class="meun01" href="../html/NJT-MA001.html">INTRO</a></li>';
	str+='			<li><a class="meun02" href="../html/NJT-CO001.html">COMPANY</a></li>';
	str+='			<li><a class="meun03" href="../html/NJT-BU001.html">BUSINESS</a></li>';
	str+='			<li><a class="meun04" href="../html/NJT-PO001.html">PORTFOLIO</a></li>';
	str+='			<li><a class="meun05" href="../html/NJT-NE001.html">NEWS</a></li>';	
	str+='			<li><a class="meun06" href="../html/NJT-RE001.html">RECRUIT</a></li>';
	str+='			<li><a class="meun07" href="../html/NJT-CU001.html">CONTACT US</a></li>';
	str+='		</ul>';
	str+='	</header>';
	str+='	<!-- header -->';


document.write(str);

})();


	