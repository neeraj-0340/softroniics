#include <stdio.h>
int sum();
int main()
{
    int result;
    printf("the product of two number is :\n");
    result=sum();
    printf("%d",result);
}
int sum()
{
int a,b;
printf("enter two nnumbers :");
scanf("%d %d",&a,&b);
return a*b;
}