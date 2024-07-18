#include <stdio.h>
void sum();
void main()
{
    printf("printing product of two numbers \n");
    sum();
}
void sum()
{
    int a,b;
    printf("enter two numbers :");
    scanf("%d %d",&a,&b);
    printf("%d * %d = %d",a,b,a*b);
}