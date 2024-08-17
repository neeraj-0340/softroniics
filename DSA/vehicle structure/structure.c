#include <stdio.h>

struct vehicle
{
    char a1[100], a2[100], a3[100];
    int a4[100];
};

int main()
{
    int i = 1, option, tyres;
    struct vehicle v[100];

    do
    {
        printf("1.Vehicle registration\n");
        printf("2.Display vehicle\n");
        printf("3.Exit\n");
        printf("Enter your option:\n");
        scanf("%d", &option);

        switch (option)
        {
        case 1:
            printf("Vehicle owner name:");
            scanf("%s", v[i].a1);
            printf("Vehicle name:");
            scanf("%s", v[i].a2);
            printf("Vehicle model:");
            scanf("%s", v[i].a3);
            printf("Enter the number of tyres:");
            scanf("%d", &v[i].a4);
            printf("Successfully registered\n");
            i++;
            break;

        case 2:
            printf("Enter the number of tyres:");
            scanf("%d", &tyres);
            for (int j = 1; j <= i; j++)
            {
                if (v[j].a4 == tyres)
                {
                    printf("Vehicle owner name:%s\n", v[j].a1);
                    printf("Vehicle name:%s\n", v[j].a2);
                    printf("Vehicle model:%s\n", v[j].a3);
                    printf("Number of tyres:%d\n", v[j].a4);
                }
            }
            break;

        case 3:
            printf("Exit\n");
            break;

        default:
            printf("Invalid option\n");
        }
    } 
    while (option != 3);
    return 0;
}