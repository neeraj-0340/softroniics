#include <stdio.h>

int main()
{
    int n;
    printf("Enter a no:");
    scanf("%d",&n);
    
    int i,fib0=0,fib1=1,fibn;
    for(i=1;i<=n;i++)
    {
        printf("%d",fib0);
        fibn=fib0+fib1;
        fib0=fib1;
        fib1=fibn;
    }

    return 0;
}