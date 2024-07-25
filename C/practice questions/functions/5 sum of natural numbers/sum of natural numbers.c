#include <stdio.h>
int sum();
int main()
{
    int result;
    result = sum();
    printf("sum of natural numbers till limit is :%d", result);
    return 0;
}
int sum()
{
    int n, i, sum = 0;
    printf("enter a natural number:");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        sum = sum + i;
    }
    return sum;
}
