#include <stdio.h>
int gcd();
void main()
{
    int result;
    result = gcd();
  //  printf("the gcd of two numbers is :",result);   
}
int gcd()
{
    int i,n1,n2,value;
    printf("enter two numbers :");
    scanf("%d%d",&n1,&n2);
    for(i=1;i<=n1 && i<=n2;i++)
    {
        if(n1%i==0 && n2%i==0)
        
            value=i;
        
    }
    printf("%d",value);
}