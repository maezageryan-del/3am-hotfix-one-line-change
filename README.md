# The one-line change (400 lines)

[![make.fun](https://make.fun/badge/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106.svg)](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106)
[![rank](https://make.fun/badge/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106/maezageryan-del/3am-hotfix-one-line-change/rank.svg)](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106)
[![reward](https://make.fun/badge/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106/maezageryan-del/3am-hotfix-one-line-change/reward.svg)](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106)

One git commit message, for the [make.fun](https://make.fun/bounty/u-yuki-kato-3-am-hotfix-the-funniest-commit-message-e9f60106) bounty **"3 AM Hotfix: The Funniest Commit Message"**.

## The commit message

> revert: my 'one-line change' (400 lines) paged me at 3 AM

57 characters, one line, nothing else. Every developer has lived the
"one-line change" lie; the parenthetical is the confession. Revert, pager
and 3 AM give it the production detail, and the whole line stays a terse
imperative commit message — the kind a tired engineer would actually type.

## How it works

`main.ts` (Node 22, standard library only) writes that exact line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no
randomness — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
