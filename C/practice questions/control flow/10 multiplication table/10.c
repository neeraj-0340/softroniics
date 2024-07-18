#include <stdio.h>
int main()
{
    int i,n,j;
    printf("enter a number :");
    scanf("%d",&n);

    for(i=1;i<=n;i++){
        for(j=1;j<=10;j++){
            printf("%d * %d = %d \n",i,j,j*i);
        }
        printf("\n");
    }
}