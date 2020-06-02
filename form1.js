

function displayValue() 
{ 
			var a=0 ,ca=0,b=0,cb=0,c=0,cc=0,d=0,cd=0,e=0,ce=0,f=0,cf=0;
            var element = document.getElementById('display_alert')    
            // history    
            var ele = document.getElementsByName('history'); 
            for(i = 0; i < ele.length; i++) 
            { 
                if(ele[i].checked) 
                {
                	ca+=1;
                	if(ca>2)
            		{
            			a="true";
            			break;
            		}
            	} 
            }
            //close_contact
            var bele = document.getElementsByName('close_contact'); 
              
            for(i = 0; i < bele.length; i++) 
            { 
                if(bele[i].checked) 
                {   
                    cb=1;
                	b=bele[i].value;
                	break;
            	} 
            }
            //symptoms  
            var elem = document.getElementsByName('symptoms');  
            for(i = 0; i < elem.length; i++) 
            { 
                if(elem[i].checked) 
                {
                	cc+=1;
                	if(cc>3)
            		{
            			c="true";
            			break;
            		}
            	}  
            } 
            //you_service
            var dele = document.getElementsByName('you_service');   
            for(i = 0; i < dele.length; i++)
            { 
                if(dele[i].checked) 
                {   cd=1;
                	d=dele[i].value;
                	break;
            	} 
            }  
            //someone_service
            var eele = document.getElementsByName('someone_service');  
            for(i = 0; i < eele.length; i++)
            { 
                if(eele[i].checked) 
                {   ce=1;
                	e=eele[i].value;
                	break;
            	} 
            } 
            //travel
            var fele = document.getElementsByName('travel');  
            for(i = 0; i < fele.length; i++)
            { 
                if(fele[i].checked) 
                {   cf=1;
                    f=fele[i].value;
                    break;
                } 
            } 
            //response
            if((ca<1) || (cb<1) || (cc<1) || (cd<1) || (ce<1) || (cf<1)){
                element.classList.remove("alert-warning");
                element.classList.remove("alert-danger");
                element.classList.add("alert-dark");
                document.getElementById("display_alert").innerHTML = "Please fill the required Fields!";

            }
            else{

                if ( b=="true"||((e=="true"|| d=="true" || b=="true") && c=="true" && a=="true") ||((e=="true"|| d=="true" || b=="true") && c=="true") || ((e=="true"|| d=="true" || b=="true") && a=="true") || (c=="true" && a=="true") || (c=="true" && f=="true") )
                {
                    element.classList.remove("alert-warning");
                    element.classList.remove("alert-dark");
                    element.classList.add("alert-danger");
                    document.getElementById("display_alert").innerHTML = "If the information provided by you is accurate, it indicates that you are either unwell or at risk. Your test results and location history need to be sent to the Health Ministry to help you and help identify potential hotspots where infection may be spreading!";
                	//alert("");
                } 
                else
                {	
                    element.classList.remove("alert-dark");
                    element.classList.remove("alert-danger");
                    element.classList.add("alert-warning");
                	document.getElementById("display_alert").innerHTML = "Your infection risk is low. We recommend that you stay at home to avoid any chance of exposure to the Novel Coronavirus and follow all preventive measures!";
                }
            }

} 