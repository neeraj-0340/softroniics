#include <stdio.h>
#include <math.h>
int main()
{
    float amt,rate,time,ci;
    printf("Enter principal amount, rate and time in year:");
    scanf("%f%f%f",&amt,&rate,&time);

    ci=amt * pow((1 + rate / 100), time) - amt;
    printf("compound interest is %f:",ci);

    return 0;
}