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

1. `git init`
2. Run the command `git config user.name`.
3. If it's not correct, run the command `git config user.name "myUserName"`.
4. To set it as default, run the command `git config --global user.name`.

### CONFIGURE USER EMAIL

1. `git init`
2. Run the command `git config user.email`.
3. If it's not correct, run the command `git config user.email "my@email.com"`.
4. To set it as default, run the command `git config --global user.email`.

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
rm -rf .git
```

`-rf` means recursive and force

### VIEW BRANCHES

`git branch`

### CREATE A BRANCH

`git branch whatYouWantToDo`

### SWITCH TO A BRANCH

`git switch myBranch`

### MERGE CHANGES

1. Switch to the branch that will absorb the changes. Example `git switch main`
2. `git merge myBranch`

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

---

### MERGE TEST

1. `git init`
2. `git config user.name "myUserName"`
3. `git config user.email "my@email.com"`
4. `touch index.html`
5. `git add .`
6. `git commit -m "added files"`
7. Create a GitHub repository called merge-test
8. `git remote add origin https://github.com/yuki-konn/merge-test.git`
9. `git push --set-upstream origin main`
10. `git branch myBranch`
11. `git switch myBranch`
12. Add `<p>Hello World!</p>` to index.html
13. Save the Changes CTRL + S
14. `git add .`
15. `git commit -m "updated files"`
16. `git switch main`
17. Change the history from `Auto` to `All`.
18. `git merge myBranch`
19. `git push`
20. git switch myBranch
21. Add `<p>Amazing World!</p>` to index.html
22. Save the Changes CTRL + S
23. `git add .`
24. `git commit -m "updated files"`
25. `git switch main`
26. `touch about.html`
27. `git add .`
28. `git commit -m "added a file"`
29. `git merge myBranch`
30. Approve the merge by closing the merge editor or the VIM editor (type :qa and ENTER)
31. `git rebase myBranch`
32. `git push` (merged and rebased code)
33. `git switch myBranch`
34. `git rebase main`
35. Add `<h1>About Page</h1>` to about.html
36. Save the changes CTRL + S
37. `git add .`
38. `git commit -m "added heading"`
39. `git switch main`
40. Add `<h2>About Page</h2>` to about.html
41. Save the changes CTRL + S
42. `git add .` (created a conflict)
43. `git commit -m "added heading"`
44. `git merge myBranch`
45. Select a resolution.
46. Save the changes CTRL + S
47. `git add .`
48. `git commit -m "merged changes"`
49. `git push` (fixed a merge conflict)