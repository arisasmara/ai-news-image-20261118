# One image of 18 November 2026

Entry for the make.fun bounty **news-image-20261118** — "Sum up 18 November's
world news in one image". The program (`main.ts`) copies the pre-rendered
image `entry.png` to `/output/entry.png`, byte for byte. No network, no
randomness: two runs write identical bytes.

## What the image shows

A flat editorial news montage (1024×1024, PNG, 293,430 bytes), deep teal-navy
with amber accents and white text. A banner names the day — **18 NOVEMBER
2026** — then one hero panel and a 2×2 grid sum up the day's five most
consequential stories:

| Panel | Story (verified) |
|---|---|
| Hero — APEC OPENS IN SHENZHEN | The 33rd APEC Economic Leaders' Meeting opens in Shenzhen, 18–19 Nov; Xi Jinping chairs and delivers the keynote at the APEC CEO Summit opening ceremony; Trump arrives from Manila. Sources: Aju Press, Le Monde, 17–18 Nov 2026. |
| TRUMP MEETS MARCOS | Trump holds bilateral talks with Philippine President Ferdinand Marcos Jr. at Malacañang, followed by a state luncheon, then flies to Shenzhen for APEC. Sources: Reuters via BusinessWorld, The Diplomat Affairs, 17 Nov 2026. |
| GULF: ALL-CLEAR | Bahrain issues an all-clear early Wednesday after an overnight potential-threat warning; Kuwait's air defences counter hostile drone attacks. Follow-up to the 17 Nov Gulf escalation. Source: Reuters, 18 Nov 2026 00:16 UTC. |
| CYCLONE AKVAN GROWS | Cyclone Akvan intensifies to a Severe Cyclonic Storm on the morning of 18 Nov; orange alert for Andhra Pradesh and adjoining south Odisha; landfall forecast around noon 20 Nov. Source: India Meteorological Department bulletins, 17–18 Nov 2026. |
| EU: €45BN FOR UKRAINE | The European Commission presents to member states a proposal for an additional €45bn in loans for Ukraine in 2027 (about two-thirds of the estimated €70bn 2027 gap); needs all 27 capitals; leaders debate it 26–27 Nov. Sources: Financial Times, 16 Nov; Kyiv Independent, 17 Nov 2026. |

Notes on accuracy: the EU item is a proposal being presented, not an approved
loan; Akvan's landfall is a forecast ("due Nov 20"), not an 18 Nov event; the
Xi–Trump–Putin trilateral is 19 Nov, not 18 Nov, and is not shown.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`. Running it twice produces identical bytes.

## License

MIT — see `LICENSE`.
