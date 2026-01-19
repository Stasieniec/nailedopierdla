# Na ile do pierdla? 🔒

Interaktywny kalkulator przestępstw - dowiedz się jakie czyny musisz popełnić, aby trafić do więzienia na wybrany okres czasu.

## 🚀 Funkcjonalności

- **Intuicyjny slider** - wybierz czas od 1 miesiąca do 10 lat
- **Dynamiczny kalkulator** - automatyczne obliczanie kombinacji przestępstw
- **Nowoczesny design** - gradient tła, animacje, efekty hover
- **Responsywność** - działa na wszystkich urządzeniach
- **Optymalizacja** - zbudowane na Astro dla maksymalnej wydajności

## 🛠️ Technologie

- **Astro** - framework do tworzenia szybkich stron webowych
- **Tailwind CSS v4** - stylowanie
- **TypeScript** - typowanie
- **Cloudflare Pages** - hosting

## 📝 Uwagi dotyczące konfiguracji

Projekt używa dwóch konfiguracji Astro:
- `astro.config.dev.mjs` - dla rozwoju lokalnego (bez adaptera Cloudflare)
- `astro.config.mjs` - dla produkcji (z adapterem Cloudflare)

To rozwiązanie eliminuje błędy podczas lokalnego developmentu związane z adapterem Cloudflare.

## 📦 Instalacja

```bash
npm install
```

## 🔧 Uruchomienie lokalne

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

Zbudowana aplikacja trafi do folderu `dist/`

## 🌐 Deployment na Cloudflare Pages

### Metoda 1: Przez Dashboard Cloudflare

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Wybierz swoje repozytorium
4. Ustaw następujące ustawienia:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `18` lub wyższy
5. Kliknij **Save and Deploy**

### Metoda 2: Przez Wrangler CLI

```bash
# Zainstaluj Wrangler globalnie
npm install -g wrangler

# Zaloguj się
wrangler login

# Zbuduj projekt
npm run build

# Deploy
wrangler pages deploy dist
```

## 📁 Struktura projektu

```
/
├── public/             # Pliki statyczne
│   └── favicon.svg
├── src/
│   ├── pages/         # Strony aplikacji
│   │   └── index.astro
│   └── styles/        # Style CSS
│       └── global.css
├── astro.config.mjs   # Konfiguracja Astro
├── wrangler.jsonc     # Konfiguracja Cloudflare Workers
└── package.json
```

## ⚙️ Konfiguracja

Projekt jest skonfigurowany do działania na Cloudflare Pages z następującymi ustawieniami:

- **Adapter:** `@astrojs/cloudflare`
- **Output:** `server` (Server-Side Rendering)
- **Tailwind CSS:** v4 z `@tailwindcss/vite`

## ⚠️ Disclaimer

To jest projekt edukacyjny stworzony wyłącznie w celach rozrywkowych i informacyjnych. 

**NIE POPEŁNIAJ PRZESTĘPSTW!**

Informacje zawarte w aplikacji są uproszczone i nie stanowią porady prawnej.

## 📝 Licencja

MIT

## 🤝 Kontakt

Jeśli masz pytania lub sugestie, śmiało otwórz issue na GitHubie!
