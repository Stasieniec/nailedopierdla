# Na ile do pierdla? 🔒

Interaktywny kalkulator przestępstw - dowiedz się jakie czyny musisz popełnić, aby trafić do więzienia na wybrany okres czasu.

## 🚀 Funkcjonalności

- **Intuicyjny slider** - wybierz czas od 1 miesiąca do 10 lat
- **Dynamiczny kalkulator** - automatyczne obliczanie kombinacji przestępstw
- **Nowoczesny design** - gradient tła, animacje, efekty hover
- **Responsywność** - działa na wszystkich urządzeniach
- **Optymalizacja** - zbudowane na Astro dla maksymalnej wydajności
- **SEO-friendly** - pełna optymalizacja dla wyszukiwarek
- **PWA Ready** - może działać jako aplikacja webowa
- **Accessibility** - dostępne dla wszystkich użytkowników

## 🛠️ Technologie

- **Astro** - framework do tworzenia szybkich stron webowych
- **Tailwind CSS v4** - stylowanie
- **TypeScript** - typowanie
- **Cloudflare Pages** - hosting
- **@astrojs/sitemap** - automatyczne generowanie sitemap
- **Schema.org** - strukturalne dane dla SEO

## 📝 Uwagi dotyczące konfiguracji

Projekt używa dwóch konfiguracji Astro:
- `astro.config.dev.mjs` - dla rozwoju lokalnego (bez adaptera Cloudflare)
- `astro.config.mjs` - dla produkcji (z adapterem Cloudflare)

To rozwiązanie eliminuje błędy podczas lokalnego developmentu związane z adapterem Cloudflare.

## 🔍 SEO & Optymalizacja

Strona jest w pełni zoptymalizowana pod SEO:

- ✅ **Meta tags** - tytuł, opis, słowa kluczowe
- ✅ **Open Graph** - optymalizacja dla social media
- ✅ **Twitter Cards** - ładne podglądy na Twitterze
- ✅ **Structured Data** - JSON-LD dla lepszego indeksowania
- ✅ **Sitemap.xml** - automatycznie generowany
- ✅ **Robots.txt** - konfiguracja dla robotów
- ✅ **Security Headers** - nagłówki bezpieczeństwa
- ✅ **Performance** - optymalizacja szybkości
- ✅ **Accessibility** - dostępność dla wszystkich
- ✅ **404 Page** - przyjazna strona błędu

### 📚 Dokumentacja SEO

- **`SEO-GUIDE.md`** - Kompletny przewodnik SEO
- **`SEO-CHECKLIST.md`** - Checklist do wdrożenia
- **`DEPLOYMENT.md`** - Instrukcje deploymentu

### 🎯 Po deploymencie

1. Zaktualizuj URL w plikach konfiguracyjnych
2. Stwórz obrazki social media (og-image.jpg)
3. Wyślij stronę do Google Search Console
4. Wyślij stronę do Bing Webmaster Tools
5. Przetestuj meta tagi (Open Graph, Twitter Cards)
6. Sprawdź wydajność (PageSpeed Insights)

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
