# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/makhlukmars53/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/makhlukmars53/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The joke is the
GTA WASTED screen, but the one who got wasted is the make.fun ghost after
waiting 13 years for GTA 6, standing on a Vice City sunset street. The meme
picture is meme.png in this repository. The post on X is the entry; this
repository hands in the post's address in POST.json.

## The meme

WASTED, in big GTA letters, over an Ocean Drive sunset. The make.fun ghost,
the real press-kit mark, stands in the middle of the street, with "13 YEARS
WAITING FOR GTA 6" under it and make.fun written at the bottom. The picture
is a square 1024 by 1024 PNG, so it stays readable when the judge shrinks it
to 480 by 480.

## The post

The caption for the X post is in CAPTION.txt. It carries the bounty link, a
tag of @makefunai, and the play code makefun-wizard-bow-lynx. The post goes
out from the public X account @nc33_riyan before the deadline, Monday
23 November 2026, 21:00 WIB, and stays up with the account public until the
results are out.

Status: the post has not been made yet, so POST.json still holds the
placeholder address. Once the post is up, replace the placeholder with the
post's address, https://x.com/nc33_riyan/status/<id>, commit that one change,
and submit that commit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

main.ts copies POST.json from this repository to out/POST.json. That is all
the program has to do: the house reads the post itself from X.

## License

MIT. See LICENSE.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
