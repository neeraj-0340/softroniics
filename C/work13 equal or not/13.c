#include <stdio.h>
int main()
{
    int a,b;
    printf("enter 1st number:");
    scanf("%d",&a);
    printf("enter 2nd number:");
    scanf("%d",&b);
    if(a==b){
        printf("%d and %d are equal", a,b);
    }
    else{
        printf("%d and %d are not equal", a,b);
    }

}