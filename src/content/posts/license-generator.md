---
title: "License generator"
desc: "the readme from my license generator made in Go"
date: "2023-1-15"
published: true
---


# Github License Generator

## Preview

![demo](https://github.com/eliasuran/license-gen/assets/118540201/e07991c0-61af-40db-a9e7-fa1708362bdc)

Generate a license for github project from command line. Built with Go utilizing the github api.

### Installation

#### Manual installation

```
git clone https://github.com/eliasuran/license-generator
cd license-generator
go install
```

Run the program

```
license-gen
```

If running license-gen doesn't work, you likely haven't set up a shell path for go binaries. To add a shell path, use this guide from point number 3: https://go.dev/doc/tutorial/compile-install

After adding the shell path either temporarily or to your bash or zsh rc, it should work.
