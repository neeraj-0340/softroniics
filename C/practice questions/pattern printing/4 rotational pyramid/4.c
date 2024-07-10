#include <stdio.h>

int main() {
    int n, i, j;

    // Input the number of rows for the pyramid
    printf("Enter the number of rows: ");
    scanf("%d", &n);

    // Loop to print each row of the pyramid
    for (i = 1; i <= n; i++) {
        // Print leading spaces
        for (j = 1; j < i; j++) {
            printf(" ");
        }
        // Print stars
        for (j = i; j <= n; j++) {
            printf("* ");
        }
        // Move to the next line
        printf("\n");
    }

    return 0;
}
