#include <stdio.h>
int main()
{
    int b, h, area, perimeter;
    printf("Enter the breadth and height :");
    scanf("%d%d", &b, &h);

    area = b * h;

    perimeter = 2 * (b + h);

    printf("area is %d and perimeter is %d", area, perimeter);
}