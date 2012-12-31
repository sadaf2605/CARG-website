function selectMe(value)
{
	
	suspend();
	
	alert("boo");
	
	if(value)
	{			
		switch(value)
		{
			case 1:
				document.getElementById('home').style.fontSize="20px";
				document.getElementById('home').style.color="#CCCCCC";
				break;
			
			case 2:
				document.getElementById('projects').style.fontSize="20px";
				document.getElementById('projects').style.color="#CCCCCC";
				break;
			
			case 3:				
				document.getElementById('publications').style.fontSize="20px";
				document.getElementById('publications').style.color="#CCCCCC";
				break;
			
			case 4:					
				window.document.getElementById('people').style.fontSize="20px";
				window.document.getElementById('people').style.color="#CCCCCC";
				break;
			
			case 5:
				document.getElementById('news').style.fontSize="20px";
				document.getElementById('news').style.color="#CCCCCC";
				break;
			
			case 6:
				document.getElementById('contact').style.fontSize="20px";
				document.getElementById('contact').style.color="#CCCCCC";
				break;			
				
		}
	
	}
}