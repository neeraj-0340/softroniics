#include <stdio.h>
#include <string.h>
struct adm
{
    char a1[100], a2[100], a3[100], username[100], password[100];
    int a4;
    float a6;
};

int main()
{
    int i = 1, n, m = 1, j = 1,p,y;
    struct adm admin[100];
    struct adm book[100];
    struct adm user[100];
    char username[100] = "admin";
    char pass[100] = "abc";

    do
    {
    x:
        printf("1.admin\n");
        printf("2.user\n");
        printf("3.Exit\n");
        printf("Enter your option:\n");
        scanf("%d", &n);

        switch (n)
        {
        case 1:
            printf("enter user name and password :\n");
            scanf("%s", admin[i].a1);
            scanf("%s", admin[i].a2);

            if (strcmp(admin[i].a1, username) == 0 && strcmp(admin[i].a2, pass) == 0)
            {
                printf("login successful\n");
                int choice;
                char choice2[100];
                while (1)
                {
                y:
                    printf("1. add book\n");
                    printf("2. display book\n");
                    printf("3. update\n");
                    printf("4. delete\n");
                    printf("5.exit menu\n");
                    printf("Enter your option: ");
                    scanf("%d", &choice);
                    switch (choice)
                    {
                    case 1:
                    z:
                        printf("record no : %d \n", j);
                        printf("enter book name :");
                        scanf("%s", book[j].a1);
                        for(p=1;p<j;p++)
                        {
                            if(strcmp(book[j].a1,book[p].a1)==0)
                            {
                                printf("book already exist enter another book details\n");
                                goto z;
                            }
                           /*else{
                                book[j].a1=book[j].a3;
                            }*/
                        }
                        printf("enter author name :");
                        scanf("%s", book[j].a2);
                        printf("enter price :");
                        scanf("%f", &book[j].a6);
                        printf("record succesfuly created\n");
                        j++;
                        break;
                    case 2:
                       
                        for (i = 1; i <= j; i++)
                        {
                            {
                                printf("book name :%s \n", book[i].a1);
                                printf("author name :%s \n", book[i].a2);
                                printf("price :%.2f \n", book[i].a6);
                            }
                        }
                        break;
                    case 3:
                        float amount;
                        printf("enter the book name to be updated :\n");
                        scanf("%s", choice2);
                        printf("enter the amount to be changed\n");
                        scanf("%f",&amount);
                        for (i = 1; i <= j; i++)
                        {
                            if (strcmp(choice2, book[i].a1) == 0)
                            {
                                book[i].a6 = amount;
                                printf("updated successfuly");
                                goto y;
                            }
                        }
                    case 4:
                        int k;
                        printf("enter the book name :\n");
                        scanf("%s", choice2);
                        for (i = 1; i <= j; i++)
                        {
                            if (strcmp(choice2, book[i].a1) == 0)
                            {
                                for (k = i; k < j; k++)
                                {
                                    book[k] = book[k + 1];
                                }
                                j--;
                                printf("deleted \n");
                            }
                        }
                        break;
                    case 5:
                        goto x;
                    default:
                        printf("Invalid option!\n");
                    }
                }
                break;
            }
            else
            {
                printf("wrong username and password");
            }

        case 2:
        m:
            int choice6;
            printf("user menu\n");
            printf("1. register\n");
            printf("2. login\n");
            printf("3. go back\n");
            printf("enter option\n");
            scanf("%d" ,& choice6);
            switch (choice6)
            {
            case 1:
                printf("enter name :");
                scanf("%s", user[m].a1);
                printf("enter age :");
                scanf("%s", user[m].a2);
                printf("enter address :");
                scanf("%d", &user[m].a4);
                printf("enter user name :");
                scanf("%s", user[m].username);
                printf("enter password :");
                scanf("%s", user[m].password);
                printf("registered succesfuly \n");
                m++;
                goto m;
            case 2:
                char username1[100], password[100];
                printf("Enter username: ");
                scanf("%s", username1);
                printf("Enter password: ");
                scanf("%s", password);

                for ( y = 1; y < m; y++)
                {
                    if (strcmp(user[y].username, username1) == 0 && strcmp(user[y].password, password) == 0)
                    {
                        l:
                        int choice3;
                        while (1)
                        {
                            printf("User menu\n");
                            printf("1. Display books\n");
                            printf("2. Search books\n");
                            printf("3. go back\n");
                            printf("Enter a choice: ");
                            scanf("%d", &choice3);

                            switch (choice3)
                            {
                            case 1:
                            {
                                for (int l = 1; l <= j; l++)
                                {
                                    printf("Book name: %s\n", book[l].a1);
                                    printf("Author name: %s\n", book[l].a2);
                                    printf("Price: %.2f\n", book[l].a6);
                                }
                                goto l;
                            }
                            case 2:
                            {
                                char choice4[100];
                                printf("Enter the book name: ");
                                scanf("%s", choice4);
                                for (int y = 0; y < j; y++)
                                {
                                    if (strcmp(choice4, book[y].a1) == 0)
                                    {
                                        printf("Book name: %s\n", book[y].a1);
                                        printf("Author name: %s\n", book[y].a2);
                                        printf("Price: %.2f\n", book[y].a6);
                                    }
                                }
                                goto l;
                            }
                            case 3:
                                goto m;
                            default:
                                printf("Invalid option\n");
                            }

                        case 3:
                            printf("Exit\n");
                            break;

                        default:
                            printf("Invalid option\n");
                        }
                    }
                }
            }
        }
    }
        while (n != 3);
        return 0;
    }