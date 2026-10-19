# Kreidekönig

Billard-Spiel mit 16 Saloons, Chefs, Effet, Kreide, Kurvenbällen, 8-Ball, Blackball, 9-Ball, Mini-Snooker und Snooker – als Android-App, komplett offline spielbar.

## App installieren

1. Auf dem Handy die Seite **Releases** dieses Repositorys öffnen (rechts bzw. unter „Releases“, oder `/releases/latest` an die Adresse anhängen).
2. `Kreidekoenig.apk` antippen und herunterladen.
3. Die Datei öffnen. Beim ersten Mal fragt Android, ob Installationen aus dieser Quelle erlaubt sind – zulassen.

Neue Versionen werden einfach über die alte installiert. Der Spielstand bleibt dabei erhalten.

## Wie die App entsteht

Bei jedem Push auf `main` baut GitHub Actions automatisch die APK (`.github/workflows/android.yml`):
das Spiel liegt in `www/index.html`, three.js und die Schriften werden lokal eingebunden, Capacitor verpackt alles als Android-App.

`signing/kreidekoenig.keystore` ist der feste Signaturschlüssel. Er sorgt dafür, dass Updates über die alte Version installiert werden können. Nicht löschen oder austauschen, sonst muss die App vorher deinstalliert werden und der Spielstand geht verloren.
