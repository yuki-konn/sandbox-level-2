# GIT COMMANDS
### INSTALL GIT BASH

1. Run the command `git --version`
2. If there's an error, install [Git Bash](https://git-scm.com/)
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI

1. Run the command `gh --version`
2. If there's an error, install [GitHub CLI](https://cli.github.com/)
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME

1. Run the command `git config user.name`.
2. If it's not correct, run the command git config user.name "myUserName".

### CONFIGURE USER EMAIL

1. Run the command `git config user.email`.
2. If it's not correct, run the command gi config user.email "my@email.com".

### COPY THE REPOSITORY LINK

1. Open GitHub.
2. Open the repository.
3. Click on the green Code button.
4. Copy the HTTPS link.

### PULL FROM GITHUB
```
git init
git remote add origin https://github.com/myRepositoryLink
git pull origin main
```

### DELETE UNUSED FILES

1. If there are files that VS Code doesn't need (like Glitch files), delete those.

### CREATE A NEW REPOSITORY IN GITHUB

1.  Click on the cat icon at the top left.
2.  Click on the green new button at the top left.
3.  Enter the repository name.
4.  Click Create repository.
5.  Do not change the default settings.

### PUSH TO GITHUB FOR THE FIRST TIME
```
gh auth login 
git remote set-url origin https://github.com/myRepositoryLink2
git add .
git commit -m "added files"
git push --set-upstream origin main
```

### PUSH TO GITHUB REGULARLY
```
git add .
git commit -m "the changes I made"
git push
```

### RENAME DEFAULT BRANCH TO MAIN

`git branch -M main`

### SET DEFAULT BRANCH TO MAIN

`git config --global init.defaultBranch main`

### DELETE SOURCE CONTROL
```
ls -a
rm -r .git
```

### COMMAND DESCRIPTIONS
1. git init
   - Initializes source control 
2. git pull origin main
   - Copies files from the origin
3. gh auth login
   - Grants authorization to push to your repository
4. git remote set-url origin
   - Sets the origin
5. git push --set-upstream origin main
   - Pushes files to GitHub and makes origin and main the default options
