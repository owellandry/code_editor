# Syntaxia

È un piccolo editor di codice che può essere eseguito sul Web o, se l'utente lo desidera, può essere eseguito localmente

L'editor di codice è **codice aperto**, quindi è gratuito

## USO LOCALE

Successivamente, verrà mostrato il processo di installazione nel caso in cui l'utente desideri che venga eseguito localmente

### Elenco dei passaggi

### 0. Apri Terminale

in Ubuntu il comando è

```bash
Ctrl + Shift + T
```

![img](https://media.discordapp.net/attachments/1133765208322617435/1133766050790527026/image.png)

in Windows il comando è

```bash
Win + R 
```

Apparirà una barra delle applicazioni in cui posizioneremo

```bash
cmd
```

e ti daremo l'accesso

![img](https://media.discordapp.net/attachments/1133765208322617435/1133765220368646184/post-811-0-09793100-1525811504.png)


### 1. Scarica il file

### Controlla se Git è installato

Prima di procedere, è importante verificare se Git è già installato sul tuo sistema. Per fare ciò, segui questi passaggi:

1. Apri un terminale o una riga di comando nel tuo sistema operativo.

2. Digitare il seguente comando e premere Invio:

``` bash
git --versione
```

3. Se Git è installato, vedrai la versione di Git che hai sul tuo sistema. In caso contrario, verrà visualizzato un messaggio di errore che indica che il comando non è stato riconosciuto o installato.

### Installazione di Git

Se Git non è installato sul tuo sistema, segui i passaggi appropriati per installarlo in base al tuo sistema operativo:

#### Finestre:

1. Vai al sito web ufficiale di Git: https://git-scm.com/

2. Scarica il programma di installazione per Windows.

3. Eseguire il programma di installazione e seguire le istruzioni della procedura guidata di installazione.

4. Al termine dell'installazione, verificare nuovamente l'installazione seguendo i passaggi sopra menzionati.

####Mac OS:

1. Puoi installare Git tramite Xcode Command Line Tools, che di solito è già installato su macOS. Apri un terminale e digita:

``` bash
git --versione
```

2. Se Git non è installato, macOS ti chiederà di installarlo automaticamente.

####Linux:

Nelle distribuzioni basate su Debian (come Ubuntu):

```bash
sudo apt update
sudo apt install git
```

Nelle distribuzioni basate su Red Hat (come CentOS o Fedora):

```bash
sudo yum install git
```

Nelle distribuzioni basate su Arch Linux:

```bash
sudo pacman -S git
```

### Verifica dell'installazione

Dopo l'installazione, controlla di nuovo se Git è installato correttamente seguendo i passaggi sopra menzionati.

Se tutto è corretto, procederemo a inserire il seguente comando

```bash
git clone https://github.com/owellandry/code_editor.git
```

###2.

Una volta che avremo il repository clonato, entreremo nella cartella necessaria per poter eseguire gli script necessari

posizioneremo

```bash
cd code_editor
```
La cosa normale sarebbe eseguire il comando

```bash
npm install
```

Ma se lo facciamo proprio così, otterremo questo errore

![img](https://media.discordapp.net/attachments/1055292395505332336/1133994208504594442/image.png)

Per risolverlo inseriremo il seguente comando

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

###3.
###4.