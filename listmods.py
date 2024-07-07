import os

# Only list files of type *.pw.toml
def listmods(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.pw.toml'):
                yield os.path.join(root, file)

if __name__ == '__main__':
    # Write the list of files to a file
    with open('rpg24files.txt', 'w') as file:
        for f in listmods('rpg24'):
            file.write(f + '\n')
