var a = true;
function show(sidebar)
{
	if(a==true)
	{
		sidebar.style.left = "0px";
		sidebar.style.transition  = "left 0.6s linear";
		a=false;
	}
	else
	{
		sidebar.style.left = "-200px";
		sidebar.style.transition  = "left 0.6s linear";
		a=true;
	}

}
