#include <stdio.h>
int main()
{
    int i, k, n = 5;
    for(i=n;i>=1;i--)
    {
        for(k=1;k<=i;k++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}