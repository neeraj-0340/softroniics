#include <stdio.h>
int main()
{
    int i, j, n = 10;
    int a[10] = {1, 3, 2, 4, 5, 3, 2, 4, 5, 2};

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (a[i] == a[j])
            {
                printf("%d", a[i]);
                break;
            }
        }
    }

    return 0;
}