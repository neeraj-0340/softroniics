#include <stdio.h>
#include <string.h>

int main()
{
    char s[100];
    int len,count=0;
    char ch;
    printf("\n Enter the String : ");
    scanf("%[^\n]%*c", s);
    
    printf("\n Enter character to count : ");
    scanf(" %c", &ch);
    len = strlen(s);

    for (int i = 0; i <= len - 1; i++)
    {
        if (s[i] == ch)
        {
            count++;
        }
    }
    printf("Occurences : %d",count);
    return 0;
}