#include <stdio.h>
#include <conio.h>
int main()
{
    int a, b, c;
    printf("Enter 1st number:");
    scanf("%d", &a);
    printf("Enter 2nd number:");
    scanf("%d", &b);

    do
    {
        printf("enter your choice:");
        printf("1.sum, 2.difference, 3.product, 4.divide?");
        scanf(" %d ", &c);

        switch (c)
        {
        case 1:
            printf("%d + %d = %d", a, b, a + b);
            getch();
            break;

        case 2:
            prinf("%d - %d = %d", a, b, a - b);
            getch();
            break;

        case 3:
            printf("%d * %d = %d", a, b, a * b);
            getch();
            break;

        case 4:
            printf("%d / %d = %d", a, b, a / b);
            getch();
            break;

        case 5:
            printf("terminated");
            getch();
            break;

        default:
            printf("invalid command");
            break;
        }
    } while (c != 5);

    return 0;
}