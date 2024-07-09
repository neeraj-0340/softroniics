#include <stdio.h>
#include <stdlib.h>
int main()
{
    int num1, num2, choice;

        printf("enter two numbers :");
        scanf("%d %d",&num1,&num2);

        printf("1. add\n");
        printf("2. subtract\n");
        printf("3. product\n");
        printf("4. divide\n");
        printf("5. exit\n");

        printf("enter you choice");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("%d + %d = %d\n", num1, num2, num1 + num2);
            break;

        case 2:
            printf("%d - %d = %d\n", num1, num2, num1 - num2);
            break;

        case 3:
            printf("%d * %d = %d\n", num1, num2, num1 * num2);
            break;

        case 4:
            printf("%d / %d = %d\n", num1, num2, num1 / num2);
            break;

        case 5:
            exit(0);
            break;

        default:
            printf("invalid choice");
            break;
        }
    
    return 0;
}