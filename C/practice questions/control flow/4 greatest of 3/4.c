#include <stdio.h>
int main()
{
    int a, b, c;
    printf("1st no:");
    scanf("%d", &a);
    printf("2nd no:");
    scanf("%d", &b);
    printf("3rd no:");
    scanf("%d", &c);
    if (a > b && a > c)
    {
        printf("%d is the largest", a);
    }
    else if (b > a && b > c)
    {
        printf("%d is the largest", b);
    }
    else
    {
        printf("%d is the largest", c);
    }

    return 0;
}
