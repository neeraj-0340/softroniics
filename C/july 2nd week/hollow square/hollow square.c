#include <stdio.h>

int main()
{
    int i,j,n=6;
    for(i=0;i<=n;i++)
    {
        for(j=0;j<=n;j++)
        {
            if(i==0||i==n||j==0||j==n) 
            {
               printf("* "); 
            }
        else
        {
        printf("  ");
        }
        }
        printf("\n");
    }
   
    return 0;
}