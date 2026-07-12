from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

REQUIRED = [
    ".nojekyll",
    "README.md",
    "AGENTS.md",
    "LICENCE.md",
    "favicon.svg",
    "index.html",
    "pathway.html",
    "governance.html",
    "operating-system.html",
    "ecosystem.html",
    "opportunity-stack.html",
    "human-team.html",
    "sandy-sports.html",
    "builders.html",
    "templates.html",
    "background.html",
    "sources.html",
    "licence.html",
    "assets/css/styles.css",
    "assets/js/site.js",
    "assets/img/hero-community.png",
    "assets/img/admin-system.png",
    "assets/img/ecosystem-map.png",
    "assets/img/women-led-setup.png",
    "assets/design/concept-homepage.png",
    "docs/00-orientation.md",
    "docs/01-legitimate-process-qld.md",
    "docs/02-constitution-and-rules.md",
    "docs/03-leadership-without-burnout.md",
    "docs/04-recruiting-members-volunteers.md",
    "docs/05-marketing-and-community-trust.md",
    "docs/06-ai-first-admin-system.md",
    "docs/07-sand-sports-straddie-example.md",
    "docs/08-milestones-and-evidence-loops.md",
    "docs/09-source-map.md",
    "templates/founding-meeting-agenda.md",
    "templates/committee-role-cards.md",
    "templates/member-and-volunteer-onboarding.md",
    "templates/policy-register.md",
    "templates/risk-register.csv",
    "templates/grant-evidence-log.csv",
    "templates/ai-prompts.md",
    "data/source-register.json",
]

FORBIDDEN = [
    "C:" + "\\Users\\lukec",
    "02_" + "Processed_MD",
    "PDFs_" + "to_Sort",
    "Down" + "loads",
]

RAW_PUBLIC_LINK = re.compile(r'href="[^"]+\.(?:md|csv)"', re.IGNORECASE)


def main() -> int:
    missing = [path for path in REQUIRED if not (ROOT / path).exists()]
    if missing:
        print("Missing required files:")
        for path in missing:
            print(f" - {path}")
        return 1

    leaks = []
    for path in ROOT.rglob("*"):
        if path.is_dir() or ".git" in path.parts:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for needle in FORBIDDEN:
            if needle in text:
                leaks.append((path.relative_to(ROOT), needle))

    if leaks:
        print("Possible local path leakage found:")
        for path, needle in leaks:
            print(f" - {path}: {needle}")
        return 1

    raw_links = []
    for path in ROOT.glob("*.html"):
        text = path.read_text(encoding="utf-8")
        for match in RAW_PUBLIC_LINK.findall(text):
            raw_links.append((path.relative_to(ROOT), match))

    if raw_links:
        print("Public HTML links directly to raw support files:")
        for path, link in raw_links:
            print(f" - {path}: {link}")
        return 1

    print("Repo check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
