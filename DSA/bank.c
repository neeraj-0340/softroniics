#include <stdio.h>
#include <string.h>
#include<stdlib.h>
struct employee 
 { 
 char name[50];
 int age;
 char place[50];
 int phone;
 float amt;
 float deposit;
 int code;
 float withdrawal;
 
 };
int main()
{
   int option,i=0,cd,de,wi,temp,b,j,d=0;
   struct employee e[5];
   
     a:
      printf("\n1.create account\n2.display details\n3.deposit\n4.withdrawal.\n5.exit\n");
        printf("enter the option:\n");
         scanf("%d",&option);
        switch(option)
     {
            case 1:
                // for(i=0;i<2;i++)
                
                    // printf("enter your details %d\n",i+1);    
                    printf("enter your name :");
                    scanf("%s",e[i].name);
                    printf("enter your phone number:");
                    scanf("%d",&e[i].phone);
                    printf("enter your age:");
                    scanf("%d",&e[i].age);
                    printf("enter your place:");
                    scanf("%s",e[i].place);
                    printf("enter your amt:");
                    scanf("%f",&e[i].amt);
                     printf("enter your code :");
                    scanf("%d",&e[i].code);
                    printf("\n");
                    
                    for(j=0;j<5;j++)
                    {
                        if(j!=temp&&e[j].code==e[temp].code)
                        {
                            printf("already exist.\nenter new code.");
                            scanf("%d",&b);
                            e[temp].code=b;
                        }
                    }
                    
                i=i+1;
                goto a;
            break;
        	case 2:
        	printf("enter your code to know acct details:");
        	scanf("%d",&cd);
        	for(i=0;i<5;i++)
        	{
        	if(cd==e[i].code)
        	{
        	   printf("%s\n",e[i].name); 
        	   printf("%d\n",e[i].phone);
        	   printf("%d\n",e[i].age);
        	   printf("%s\n",e[i].place);
        	   printf("%f\n",e[i].amt);
        	   
        	 }
        	}
        	 goto a;
        	 break;
        	 case 3:
        	 printf("enter your code:");
        	 scanf("%d",&cd);
        	
        	 for(i=0;i<5;i++){
                if(cd==e[i].code){
                    d=1;
                }

            }
            if(d==0){
                printf("Invalid code\n");
            }
            else{
                 printf("enter your deposit:");
        	 scanf("%d",&de);
        	 for(i=0;i<5;i++)
        	{
        	   if(cd==e[i].code)
        	   {
        	       
        	       
        	       e[i].amt=e[i].amt+de;
        	        printf("%f",e[i].amt);
        	   }
        	 }
            }
        	
        	 goto a;
        	 break;
        	 case 4:
        	 printf("enter your code:");
        	 scanf("%d",&cd);
        	 printf("enter the amt to be withdrawal:");
        	 scanf("%d",&wi);
        	 for(i=0;i<5;i++)
        	 {
        	     if(cd==e[i].code)
        	     {
        	         printf("%f\n",e[i].amt);
        	         if(wi<e[i].amt&&wi>0)
        	         {
        	             
        	         e[i].amt=e[i].amt-wi;
        	         printf("%f",e[i].amt);
        	     }
        	     
        	     else
        	     {
        	         printf("insufficient");
        	     }
        	 }
        	 }
        	 goto a;
        	 break;
        	 case 5:
        	 exit(0);
        	 break;
        	
    }
     
    return 0;
}