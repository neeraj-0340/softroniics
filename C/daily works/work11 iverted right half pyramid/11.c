#include <stdio.h>
int main()
{
    int i, k, n = 5;
    for (i = 0; i < n; i++)
    {
        for (k = n; k =n-i; k--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}