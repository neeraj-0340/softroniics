#include <stdio.h>
int main()
{
    int i, j, k, n;
    printf("enter number of rows");
    scanf("%d", &n);
    for (k = 0; k <= n; k++)
    {
        printf("* ");
    }
    printf("\n");
    for (i = n - 1; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            printf("  ");
        }
        printf("* \n");
    }
    for (k = 0; k <= n; k++)
    {
        printf("* ");
    }
    return 0;
}