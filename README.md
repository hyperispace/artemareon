# Artemareon

## Develop

### Dependencies need to attention

1. [useGSAP](https://gsap.com/resources/React/)
2. [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
3. [@react-three/drei](https://www.npmjs.com/package/@react-three/drei), may not be used, but worth to mention since we are talking `@react-three/fiber`

### How to run

```shell
npm install
npm run dev
```

## How to collaborate

In this project we use [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) to collaborate. For branch name, we follow the template `your_name/your_branch_name` e.g. `jinjing.wu/initial-skeleton`. For commit message, we follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), e.g. `feat: initial project skeleton`.

1. Create a Branch:

   - Create a new branch for your feature or bug fix. Always start from the main branch:

     ```shell
     git checkout main
     git pull origin main
     git checkout -b your_name/your_branch_name
     ```

2. Work on Your Feature:

   - Make your changes on the new branch. Commit your changes frequently with descriptive messages:

     ```shell
     npm run std # this is our custom setup for running lint and prettify our code
     git add .
     git commit -m "feat: Add feature XYZ"
     ```

   - Ensure your code is up to date with the main branch by regularly merging the main branch into your feature branch:

     ```shell
     git checkout main
     git pull origin main
     git checkout your_name/your_branch_name
     git merge main
     ```

3. Push Your Branch to GitHub:

   - Push your branch to GitHub:

     ```shell
     git push origin your_name/your_branch_name
     ```

4. Open a Pull Request (PR):

   - Go to your repository on GitHub.
   - Click on the "Compare & pull request" button that appears after pushing your branch.
   - Fill out the PR form, describing the changes you've made, and submit it.

5. Collaborate and Review:

   - Send your PR to this channel [#g8-explore-the-code](https://hyperislandcommunity.slack.com/archives/C072Z7X0A6A) for requesting reviews from your team members.
   - Address any feedback by making additional commits to your branch. These commits will automatically be added to the open PR.

6. Merge the Pull Request:

   - Once your PR has been reviewed and approved, you can merge it

7. Delete the Branch:

   - After the PR is merged, delete your branch both locally and on GitHub:

     ```shell
     git branch -d your-branch-name
     git push origin --delete your-branch-name
     ```

8. Pull Changes into Main:

   - Ensure your local main branch is up to date:

     ```shell
     git checkout main
     git pull origin main
     ```

## Additional Tips

**Sync Often**: Regularly pull changes from the main branch into your feature branch to minimize merge conflicts.
