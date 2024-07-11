#include <stdio.h>
int main()
{
    int n,i, first = 0, second = 1, next;
    printf("Enter the number of terms :");
    scanf("%d", &n);

    for (i=1;i<=n;i++)
    {
        if (n == 0)
        {
            printf("%d", first);
            continue;
        }
        if (n == 1)
        {
            printf("%d", second);
            continue;
        }
        next = first + second;
        first = second;
        second = next;

        printf("%d,", next);
    }
}