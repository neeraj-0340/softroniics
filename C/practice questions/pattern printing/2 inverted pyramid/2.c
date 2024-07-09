#include <stdio.h>
int main()
{
    int i,j,n,k;
    printf("Enter number of rows : ");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        for(j=n-i;j<=1;j--)
        {
            printf(" ");
        }
        for(k<=i;k<=1;k--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}