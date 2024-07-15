#include <stdio.h>
int main()
{
    int i, j, k, n=6;
    for(i=1;i<n;i++)
    {
        for(j=1;j<i;j++)
        {
            printf(" ");
        }
        for(k=1;k<=n-2;k++)
       {
         printf("* ");
       }
       printf("\n");
    }
}