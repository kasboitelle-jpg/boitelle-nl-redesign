# Design brief — redesign boitelle.nl

_Resultaat van de Grill Me-sessie op 2026-06-28. Dit is de leidraad voor plan + bouw._

## Type project
Puur redesign: **zelfde pagina's, structuur en boodschap behouden**, maar volledig nieuw, mooier ontwerp + alle marketingteksten herschreven.

## Beslissingen

### Techniek & beheer
- **Astro**, statische site, **hosten op Vercel**.
- Beheer **in code** (jij/ik). Vader bewerkt niet zelf; inhoud verandert zelden.
- **Contactformulier via mailto-link** (opent mailprogramma). Bewust gekozen voor eenvoud; kan later met één wijziging een echte formulierdienst worden.
- Oplevering: **complete site, lokaal te bekijken en klaar om naar Vercel te deployen**. Domein boitelle.nl (nu bij Wix) koppelen we als losse laatste stap.

### Visuele richting
- **Nieuw ontwerp, eigen richting** (niet gebonden aan het Wix-template).
- Sfeer: **warm & menselijk** — toegankelijk en mensgericht, met de datagedreven bewijskracht (cijfers, klanten) subtiel verwerkt.
- Kleuren: **warme aarde-tinten** — crème/zand basis, terracotta/klei accent, zachte salie-groen voor rust/vertrouwen, warm-donkergrijze tekst.
- Typografie: **warme serif-koppen + strakke sans bodytekst**.
- Animatie: **uitgesproken & dynamisch** (scroll-reveals, beweging) maar smaakvol/sjiek — past bij serieuze B2B-klanten.
- Logo: **strakke tekst-wordmark** ("Boitelle" in serif, "HR Proactief" subtiel ernaast). Geen los logobestand.
- Beeld: **bouwen zónder foto's** (warmte uit kleur/type/vorm), met nette plekken vrijgehouden zodat een foto van Mark + klantlogo's (VGZ, Politie Academie, universiteiten) later toe te voegen zijn.

### Teksten
- Toon: **warm-professioneel, met "u"** — helderder en zelfverzekerder dan nu.
- **Marketingteksten vrij herschrijven** (Home, Waarom ons?, Opleidingen-intro).
- **Juridische teksten letterlijk behouden** (Algemene Voorwaarden + klachtenprocedure + privacy onder Kwaliteit) — alleen netter opgemaakt, betekenis intact.

### Structuur (exact zoals nu)
- Menu: **Home · Waarom ons? · Kwaliteit · Voorwaarden · Contact**.
- **Opleidingen** blijft een losse pagina, bereikbaar via URL maar **niet in het menu** (zoals nu).
- Contactformulier in de footer op elke pagina.

### Standaard meegenomen (geen aparte vraag nodig)
- Volledig responsive (mobiel/tablet/desktop).
- Toegankelijk (semantische HTML, contrast, focus).
- Nette pagina-titels/meta zoals nu (bijv. "Home | Boitelle | HR Proactief"), favicon.

## Pagina's & inhoud (bron: content/)
| Pagina | Bestand | Aanpak tekst |
|---|---|---|
| Home | content/01-home.md | Vrij herschrijven |
| Waarom ons? | content/02-waarom-ons.md | Vrij herschrijven |
| Kwaliteit | content/03-kwaliteit.md | Marketing-intro vrij; klachten/privacy letterlijk |
| Opleidingen (verborgen) | content/04-opleidingen.md | Vrij herschrijven |
| Voorwaarden | content/05-voorwaarden.md | Letterlijk behouden |
