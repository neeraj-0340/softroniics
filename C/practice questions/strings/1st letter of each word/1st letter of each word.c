#include <stdio.h>
#include <string.h>

int main() {
    char str[100];
    int i, len;

    printf("Enter a string: ");
    scanf("%s", str);

    len = strlen(str);

    printf("%c",str[0]);
    for (i = 1; i < len; i++) {
        if (str[i - 1] == ' ') {
            printf("%c", str[i]);
        }
    }

    printf("\n");

    return 0;
}