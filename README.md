# Community Club Builder: Sandy Sports Example

This repo is a multi-page public website and practical playbook for building a community club that is legal, welcoming, digitally organised, and light enough that it does not burn out one person.

The worked example is a possible sand sports club on Minjerribah / North Stradbroke Island. It is separate from the Amity and 10-12 Ballow Road concept repos, but it references them as nearby context. It does not assume sand courts already exist, does not claim Ballow Road ownership or control, and treats a purpose-built Dunwich facility as a future horizon. The club idea here is not "claim a site first". It is "build a trustworthy club first, then earn the right to use places well".

## Core Lesson

If one person is the operating system, the club is already fragile.

The club has to be designed so that:

- leadership is mixed gender, with trusted female leadership from the start
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
- `opportunity-stack.html` - agile evidence, opportunity navigation and rule posture.
- `human-team.html` - four-person committee archetypes and selection spectrum.
- `sandy-sports.html` - Sandy Sports worked example.
- `builders.html` - local templates and adjacent builder links.
- `templates.html` - human-facing template guide for the source template files.
- `background.html` - human-facing guide map for the background docs.
- `sources.html` - official sources, source posture and generated-asset boundary.
- `licence.html` - HTML licence and use boundary.

## Playbook Docs

For human readers, use `background.html` and `templates.html` first. The Markdown guide layer remains as the source/workshop layer:

1. [Orientation](docs/00-orientation.md)
2. [Legitimate Queensland Club Process](docs/01-legitimate-process-qld.md)
3. [Constitution and Rules Starter](docs/02-constitution-and-rules.md)
4. [Leadership Without Burnout](docs/03-leadership-without-burnout.md)
5. [Recruiting Members and Volunteers](docs/04-recruiting-members-volunteers.md)
6. [Marketing and Community Trust](docs/05-marketing-and-community-trust.md)
7. [AI-first Admin System](docs/06-ai-first-admin-system.md)
8. [Sandy Sports Worked Example](docs/07-sand-sports-straddie-example.md)
9. [Milestones and Evidence Loops](docs/08-milestones-and-evidence-loops.md)
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

As at 7 July 2026, the official Queensland guidance says an incorporated association requires at least 7 members, a not-for-profit purpose, a physical Queensland address, the right founding meeting steps, adopted rules, and an elected management committee. Check the official links in the legal process guide before lodging anything, because rules, fees and grants change.

## Related Public Context

- [Ballow Road Sand and Screen Hub](https://auraofintelligence.github.io/ballow-road-sand-screen-hub/)
- [Dunwich Ferry Terminal Open Data Lab](https://auraofintelligence.github.io/dunwich-gumpi-ferry-terminal-open-data-lab/)
- [Amity Outdoor Fitness and Safer Access](https://auraofintelligence.github.io/amity-outdoor-fitness-grant/)
- [Stradbroke Grants Lab](https://auraofintelligence.github.io/stradbroke-grants-lab/)
- [Straddie Tenders Lab](https://auraofintelligence.github.io/straddie-tenders-lab/)
- [Straddie Maker-Space Lab](https://auraofintelligence.github.io/straddie-makerspace-lab/)
- [Ready S.E.T. Co-op Trust Hub](https://auraofintelligence.github.io/ready-set-co-op-trust-hub/)
- [Ready S.E.T. Co-op Hyperlocal Media](https://auraofintelligence.github.io/ready-set-co-op-hyperlocal-media/)
- [Quandamooka Film Festival](https://auraofintelligence.github.io/quandamooka-film-festival/)
- [Film Club Documentary Builders](https://auraofintelligence.github.io/film-club-documentary-builders/)
- [Straddie Noticeboard Network](https://auraofintelligence.github.io/straddie-noticeboard-network/)

Those public pages are neighbouring context. This repo is the club-building operating model that could support a sand sports idea without merging every site, funding, tender or film story into one legal body.

## Local Checks

From this folder:

```powershell
python scripts\check_repo.py
```

That checks the website and guide have expected files and scans for local path leakage before anything is shared publicly.
