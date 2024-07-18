#include <stdio.h>
int sum();
void main()
{
    int result;
    result = sum();
    printf("factorial of numbers till the limit is :%d",result);
}
int sum()
{
    int i,n,fact=1;
    printf("enter the limit:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        fact *= i;
    }
    return fact;
}