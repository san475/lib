/*
   Basic linear search, returns index
   */

#include <stdio.h>
#include <stdlib.h>

int main(int argc, int argv[])
{
	for(int i = 1; i < argc; i++)
	{
		printf("%d\n", argv[0]);
		printf("%d\n", argv[i]);
		if(argv[0] == argv[i])
		{
			printf(" -- Found Match!!\n");
			return i;
		}
	}
	return -1;
}
