#include <stdio.h>
int main()
{
    int n, i, sum=0;
    printf("enter a natural number:");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        sum = sum + i;
    }
    printf("the sum of natural numbers till %d is %d", n, sum);

    return 0;
}