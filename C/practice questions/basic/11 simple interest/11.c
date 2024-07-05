#include <stdio.h>
int main()
{
    float rate,amt,time,si;
    printf("enter the amount, interest rate and time:");
    scanf("%f%f%f",&amt,&rate,&time);

    si=(amt*rate*time)/100;
    printf("simple interest = %f",si);

    return 0;
}