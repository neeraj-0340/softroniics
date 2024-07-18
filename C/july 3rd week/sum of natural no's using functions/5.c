#include <stdio.h>
int sum();
void main()
{
    int result;
    result = sum();
    printf("%d",result);
}
int sum()
{
    int i,n,sum=0;
    printf("enter the limit :");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        sum=sum +i;
    }
    printf("sum of natural number is :");
    return sum;
}