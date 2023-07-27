# Syntaxia

Es handelt sich um einen kleinen Code-Editor, der entweder im Web oder auf Wunsch des Benutzers lokal ausgeführt werden kann

Der Code-Editor ist **offener Code** und kann daher kostenlos verwendet werden

## LOKALE VERWENDUNG

Als nächstes wird der Installationsprozess angezeigt, falls der Benutzer möchte, dass er lokal ausgeführt wird

### Liste der Schritte

### 0. Öffnen Sie das Terminal

In Ubuntu lautet der Befehl

```bash
Ctrl + Shift + T
```

![img](https://media.discordapp.net/attachments/1133765208322617435/1133766050790527026/image.png)

In Windows lautet der Befehl

```Bash
Win + R
```

Es erscheint eine Taskleiste, in der wir platzieren

```Bash
cmd
```

und wir geben Ihnen Einlass

![img](https://media.discordapp.net/attachments/1133765208322617435/1133765220368646184/post-811-0-09793100-1525811504.png)


### 1. Laden Sie die Datei herunter

### Überprüfen Sie, ob Git installiert ist

Bevor Sie fortfahren, ist es wichtig zu prüfen, ob Git bereits auf Ihrem System installiert ist. Gehen Sie dazu folgendermaßen vor:

1. Öffnen Sie ein Terminal oder eine Befehlszeile in Ihrem Betriebssystem.

2. Geben Sie den folgenden Befehl ein und drücken Sie die Eingabetaste:

```Bash
git --version
```

3. Wenn Git installiert ist, sehen Sie die Version von Git, die Sie auf Ihrem System haben. Andernfalls wird eine Fehlermeldung angezeigt, die besagt, dass der Befehl nicht erkannt oder installiert wurde.

### Git-Installation

Wenn Git nicht auf Ihrem System installiert ist, befolgen Sie die entsprechenden Schritte, um es basierend auf Ihrem Betriebssystem zu installieren:

####Windows:

1. Gehen Sie zur offiziellen Git-Website: https://git-scm.com/

2. Laden Sie das Installationsprogramm für Windows herunter.

3. Führen Sie das Installationsprogramm aus und befolgen Sie die Anweisungen des Installationsassistenten.

4. Nachdem die Installation abgeschlossen ist, überprüfen Sie bitte die Installation erneut, indem Sie die oben genannten Schritte ausführen.

####Mac OS:

1. Sie können Git über die Xcode Command Line Tools installieren, die normalerweise bereits auf macOS installiert sind. Öffnen Sie ein Terminal und geben Sie Folgendes ein:

```Bash
git --version
```

2. Wenn Git nicht installiert ist, werden Sie von macOS aufgefordert, es automatisch zu installieren.

#### Linux:

Auf Debian-basierten Distributionen (wie Ubuntu):

```bash
sudo apt update
sudo apt install git
```

Auf Red Hat-basierten Distributionen (wie CentOS oder Fedora):

```bash
sudo yum install git
```

Auf Arch Linux-basierten Distributionen:

```bash
sudo pacman -S git
```

### Installationsüberprüfung

Überprüfen Sie nach der Installation erneut, ob Git korrekt installiert ist, indem Sie die oben genannten Schritte ausführen.

Wenn alles korrekt ist, geben wir den folgenden Befehl ein

```bash
git clone https://github.com/owellandry/code_editor.git
```

### 2.

Sobald wir das geklonte Repo haben, geben wir den erforderlichen Ordner ein, um die erforderlichen Skripte ausführen zu können

wir werden platzieren

```bash
cd code_editor
```
Das Normale wäre, den Befehl auszuführen

```bash
npm install
```

Aber wenn wir es einfach so machen, erhalten wir diesen Fehler

![img](https://media.discordapp.net/attachments/1055292395505332336/1133994208504594442/image.png)

Um das Problem zu lösen, geben wir den folgenden Befehl ein

```bash
npm cache clean --force
```
```bash
rm -r node_modules
```
```bash
npm install --force
```
```bash
npm start
```

### 3.
### 4.