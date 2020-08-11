# COLLABORATE

Thanks for your interest in improving the [Guildflow website](https://guildflow.com/).

The following is a guide on how to build the site locally to test changes.

## What needs work?

You can look to the [issues list](https://github.com/Guildflow/guildflow-marketing-website) for some documented things to work on.

If you have a small bug fix, broken link or typo feel free to make pull request.

If you want to work on something bigger it's probably best to make an issue first and start a discussion about it.

## Install Hugo

The Guildflow website is built through the static website generator [Hugo](https://gohugo.io).

If you are on macOS than installing Hugo with [Homebrew](https://brew.sh/) can be as easy as:

    $ brew install hugo

If you need an introduction to Hugo or more install options check out its [Getting Starting](https://gohugo.io/getting-started/) help guides.

## Fork and Clone the Repo

If you are not a member of the Guildflow team, you'll want to first fork the repo. You'll then clone your own repo to your local computer.

Once you are happy with your changes you can put them on a new branch and push it back up to your private fork on GitHub.

Then you'll make a pull request on the main repo using GitHub. A pull request is a formal way to ask to review and merge your private fork's branch changes into the main Guildflow repo.

If you are a member of the Guildflow team with elevated access you can push branch changes directly to the main repo, but please do use pull requests and ask for a review before to get changes merged. 

If you need help learning how git and GitHub work check out this index of [Resources to learn Git](https://try.github.io/).

## Install the NPM Dependencies

Because the Guildflow website uses [TailwindCSS](https://tailwindcss.com/) and [TailwindUI](https://tailwindui.com/) to help style the pages you'll need to install some npm packages.

These packages are defined in `package.json` and if you already have `npm` installed can be from the root of the project setup with:

    $ npm install

For more info on `npm`, check out the [npm command line documentation](https://docs.npmjs.com/cli/npm).

## Run Hugo Locally

During development Hugo can generate the static site and use a local web server to serve it at: `http://localhost:1313/`. 

Even nicer is that as you make edits to the content the web page will refresh to show you the latest version.

To start up the server use:

    $ hugo server

There are some other helpful options you can use when launching the local server.

`--disableFastRender` is helpful way to force a full rebuild when changes are observed. This can an be expensive for large site, which we are not currently.

    $ hugo server --disableFastRender

`--buildDrafts` and `--buildFuture` allow you to have posts which are marked with a future published date to render now.

    $ hugo server --disableFastRender --buildDrafts --buildFuture

See the [Hugo Documentation](https://gohugo.io/documentation/) for more options on the local server as well as any questions about themes, file layout or content. 

## Thanks

If you have a question about contributions that is not addressed here, please [make an issue](https://github.com/Guildflow/guildflow-marketing-website/issues/new). 

Thanks again for your help!
