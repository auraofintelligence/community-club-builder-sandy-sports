# Community Club Builder: Sandy Sports Example

This repo is a multi-page public website and practical playbook for building a community club that is legal, welcoming, digitally organised, and light enough that it does not burn out one person.

The worked example is a possible sand sports club on Minjerribah / North Stradbroke Island. It is separate from the Amity and 10-12 Ballow Road concept repos, but it references them as nearby context. The club idea here is not "claim a site first". It is "build a trustworthy club first, then earn the right to use places well".

## Core Lesson

If one person is the operating system, the club is already fragile.

The club has to be designed so that:

- leadership is mixed gender or female-led from the start
- women, girls, families, Elders, young people and visitors all feel the club is for them
- admin is shared, visible and automated wherever possible
- AI helps with drafts, reminders, records and grant evidence, but people still make the decisions
- no one joins the committee just to control assets, status, money, access or mates' favours

## Website Map

- `index.html` - public gateway and pathfinder.
- `pathway.html` - phased club-building pathway.
- `governance.html` - legal shell, constitution and committee culture.
- `operating-system.html` - AI-first admin architecture and privacy posture.
- `ecosystem.html` - grants, tenders, film, documentary and site-context labs.
- `sandy-sports.html` - Sandy Sports worked example.
- `builders.html` - local templates and adjacent builder links.
- `sources.html` - official sources, source posture and generated-asset boundary.

## Playbook Docs

Read these in order if you want the Markdown guide layer:

1. [Orientation](docs/00-orientation.md)
2. [Legitimate Queensland Club Process](docs/01-legitimate-process-qld.md)
3. [Constitution and Rules Starter](docs/02-constitution-and-rules.md)
4. [Leadership Without Burnout](docs/03-leadership-without-burnout.md)
5. [Recruiting Members and Volunteers](docs/04-recruiting-members-volunteers.md)
6. [Marketing and Community Trust](docs/05-marketing-and-community-trust.md)
7. [AI-first Admin System](docs/06-ai-first-admin-system.md)
8. [Sandy Sports Worked Example](docs/07-sand-sports-straddie-example.md)
9. [First 90 Days](docs/08-first-90-days.md)
10. [Source Map](docs/09-source-map.md)

Templates live in [templates](templates).

## Local Preview

From this folder:

```powershell
python -m http.server 4194
```

Open:

```text
http://localhost:4194/
```

The site is static and can also be opened by double-clicking `index.html`.

## What This Repo Is

This is a guide, not legal advice. It is meant to help a founding group understand the steps before they speak to the Office of Fair Trading, Council, insurers, Traditional Owner bodies, sporting bodies, funders and local partners.

As at 7 July 2026, the official Queensland guidance says an incorporated association needs at least 7 members, must be not-for-profit, must have a physical Queensland address, must hold the right founding meeting steps, must adopt rules, and must elect a management committee. Check the official links in the legal process guide before lodging anything, because rules, fees and grants change.

## Related Public Context

- [Amity Outdoor Fitness and Safer Access](https://github.com/auraofintelligence/amity-outdoor-fitness-grant)
- [Amity Point](https://github.com/auraofintelligence/amity-point)
- [Ballow Road Sand and Screen Hub](https://github.com/auraofintelligence/ballow-road-sand-screen-hub)
- [Stradbroke Grants Lab](https://github.com/auraofintelligence/stradbroke-grants-lab)
- [Straddie Tenders Lab](https://github.com/auraofintelligence/straddie-tenders-lab)
- [Quandamooka Film Festival](https://github.com/auraofintelligence/quandamooka-film-festival)
- [Film Club Documentary Builders](https://github.com/auraofintelligence/film-club-documentary-builders)

Those repos are neighbouring context. This repo is the club-building operating model that could support a sand sports idea without merging every site, funding, tender or film story into one legal body.

## Local Checks

From this folder:

```powershell
python scripts\check_repo.py
```

That checks the website and guide have expected files and scans for local path leakage before anything is shared publicly.
