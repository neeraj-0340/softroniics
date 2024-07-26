#include <stdio.h>
int main()
{
    int i, j, n, temp, a[105];
    printf("enter size of array :");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (a[j] > a[i])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    printf("maximum element is :");
        printf("%d\n", a[0]);
         printf("minimum element is :");
        printf("%d\n", a[n-1]);
}