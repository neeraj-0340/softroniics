#include <stdio.h>
int main()
{
    int n;
    printf("input number:");
    scanf("%d",&n);

    if(n>0){
        printf("%d is positive",n);
    }
    else if(n=0){
        printf("%d is zero",n);
    }
    else if(n<0){
        printf("%d is negative",n);
    }
}