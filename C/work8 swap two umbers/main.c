
#include <stdio.h>

int main()
{
    int a,b,temp;
    printf("print number a:");
    scanf("%d",&a);
    printf("print number b:");
    scanf("%d",&b);
    
    temp = a;
    a = b;
    b = temp;
    
    printf("after swapping \n");
    printf("a = %d \n",a);
    printf("b = %d \n",b);

    return 0;
}
