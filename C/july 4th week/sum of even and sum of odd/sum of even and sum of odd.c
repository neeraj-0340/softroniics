#include <stdio.h>

int main()
{
     int i,n,evensum=0,oddsum=0;
   
   int a[5]={1,2,3,4,5};
   
   for(i=0;i<5;i++)
    {
         
        if(a[i]%2==0)
        {
           evensum=evensum+a[i];
        }
        else
        {
            oddsum=oddsum+a[i];
        }
    }
    printf("sum of even numbers is : %d",evensum);
    printf("\nsum of odd numbers is : %d",oddsum);
    return 0;
}