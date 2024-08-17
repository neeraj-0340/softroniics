#include <stdio.h>
#include <string.h>
int main()
{
    int i, j, flag, l, n = 10, k = 1;
    int a[10] = {1, 3, 2, 4, 5, 3, 2, 4, 5, 2};
    int b[n];
    flag = 0;
    b[0]=a[0];

    for (i = 1; i < n; i++)
    {
        for (j =0; j < k; j++)
        {
            if (a[i] == b[j])
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        {
            b[k] = a[i];
            k++;    
        }
    }

    for (i = 0; i < k; i++)
    {
        printf("%d ", b[i]);
    }

    return 0;
}