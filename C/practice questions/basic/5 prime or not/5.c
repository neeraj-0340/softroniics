#include <stdio.h>

int main()
{
    int num;
    int isprime = 1;
    printf("enter a number :");
    scanf("%d", &num);
    if (num <= 1)
    {
        isprime = 0;
    }
    else
    {
        int divisor = num / 2;
        while (divisor > 1)
        {
            if (num % divisor == 0)
            {
                isprime = 0;
                break;
            }
            divisor--;
        }
    }
    if (isprime)
    {
        printf("%d is a prime number.\n", num);
    }
    else
    {
        printf("%d is not a prime number.\n", num);
    }
    return 0;
}