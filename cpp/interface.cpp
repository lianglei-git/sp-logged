#include <iostream>
#include <fstream>
#include <cstdlib>
#include <ctime>
using namespace std;

class WriteFile
{
public:
    int maxFileSize;
    char* path;
    WriteFile(int s = 10 * 2048)
    {
        maxFileSize = s;
        char *_path[] = {"a.log"};
        path = *_path;
    };
    void write(int num) {
        fstream f;
        cout<< path << endl;
        f.open(path,ios::out|ios::app);
        f<< num << '\n';
	    f.close();
    }
};

int mathRandom(int max = 5, int min = 1)
{
    unsigned seed = time(0);
    srand(seed);
    int _rand = rand() % max + min;
    return _rand;
}

int main()
{
    int num = mathRandom();
    WriteFile* ws = new WriteFile();
    ws->write(num);
    return 0;
}