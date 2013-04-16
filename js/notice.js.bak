$(document).ready(function(){
	try
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	}
	catch (e)
	{
		try
		{
			xmlDoc = document.implementation.createDocument("","",null);
		}
		catch (e)
		{
			alert(e.message);
			return;
		}
	}
	xmlDoc.async = false;
	xmlDoc.load("xml.notice.xml");

	document,getElementById("print").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	
});
