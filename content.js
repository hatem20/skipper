// content.js

var url = window.location.href;     // Returns full URL
var substring = "CoursePolling.aspx";
if(url.indexOf(substring) > -1){   //check questionaire url
 button_1="ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_RegistCourseGenerlPollButton";
 button_2="ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_SelectStaffButton";
 button_3="ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_RegistStaffGenerlPollButton";
 button_4="ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_FinishPollButton0";
 method_prefix='step_';
	for(var i=1;i<5;i++){
    if(document.getElementById(window["button_"+i]) != null){
			window[method_prefix + i]();
		}
	}
}
function step_1(){
	for(var x=0;x<5;x++){
		var a=[12,8,10,8,7];
		for(var z=0;z<a[x];z++){
			document.getElementById("ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_CourseFormView_SectionsDataList_PointsGridView_"+x+"_RadioButtonList1_"+z+"_"+Math.floor((Math.random()*5)+0)+"_"+z+"").click()
		}
	}
  document.getElementById(button_1).click()
}

function step_2(){
	document.getElementById("ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_SelectStaffListCheckBoxList_0").click()
	document.getElementById(button_2).click();
}

function step_3(){
	for(var z=0;z<10;z++){
		document.getElementById("ContentPlaceHolder1_ContentPlaceHolder1_HeadContentPlaceHolder_StaffPollFormView_DataList1_StaffPollGridView_0_VBRadioButton_"+z+"").click();
	}
  document.getElementById(button_3).click();
}

function step_4(){
	document.getElementById(button_4).click();
}
