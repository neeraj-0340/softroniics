
#include <stdio.h>

int main()
{
    float n,c;
    printf("enter the fahrenheit value:");
    scanf("%f", &n);
    c=(n-32)*5/9;
    printf("converted value: %f",c);

    return 0;
}
