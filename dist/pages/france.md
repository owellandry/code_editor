# Syntaxe

Il s'agit d'un petit éditeur de code qui peut être exécuté sur le Web ou, si l'utilisateur le souhaite, il peut être exécuté localement

L'éditeur de code est ** code ouvert **, il est donc libre d'utilisation

## UTILISATION LOCALE

Ensuite, le processus d'installation sera affiché au cas où l'utilisateur souhaite qu'il s'exécute localement

### Liste des étapes

### 0. Ouvrir le terminal

dans ubuntu la commande est

```bash
Ctrl+Maj+T
```

![img](https://media.discordapp.net/attachments/1133765208322617435/1133766050790527026/image.png)

dans windows la commande est

```bash
Gagner + R
```

Une barre des tâches apparaîtra dans laquelle nous placerons

```bash
commande
```

et nous vous donnerons entrer

![img](https://media.discordapp.net/attachments/1133765208322617435/1133765220368646184/post-811-0-09793100-1525811504.png)


### 1. Téléchargez le fichier

### Vérifiez si Git est installé

Avant de continuer, il est important de vérifier si Git est déjà installé sur votre système. Pour ce faire, suivez ces étapes :

1. Ouvrez un terminal ou une ligne de commande dans votre système d'exploitation.

2. Tapez la commande suivante et appuyez sur Entrée :

```bash
git --version
```

3. Si Git est installé, vous verrez la version de Git que vous avez sur votre système. Sinon, vous verrez un message d'erreur indiquant que la commande n'est pas reconnue ou installée.

### Installation de Git

Si Git n'est pas installé sur votre système, suivez les étapes appropriées pour l'installer en fonction de votre système d'exploitation :

####Les fenêtres:

1. Allez sur le site officiel de Git : https://git-scm.com/

2. Téléchargez le programme d'installation pour Windows.

3. Exécutez le programme d'installation et suivez les instructions de l'assistant d'installation.

4. Une fois l'installation terminée, veuillez vérifier à nouveau l'installation en suivant les étapes mentionnées ci-dessus.

####mac OS :

1. Vous pouvez installer Git via les outils de ligne de commande Xcode, qui sont généralement déjà installés sur macOS. Ouvrez un terminal et tapez :

```bash
git --version
```

2. Si Git n'est pas installé, macOS vous demandera de l'installer automatiquement.

#### Linux :

Sur les distributions basées sur Debian (comme Ubuntu) :

```bash
mise à jour sudo apt
sudo apt installer git
```

Sur les distributions basées sur Red Hat (telles que CentOS ou Fedora) :

```bash
sudo miam installer git
```

Sur les distributions basées sur Arch Linux :

```bash
sudo pacman -S git
```

### Vérification de l'installation

Après l'installation, vérifiez à nouveau si Git est correctement installé en suivant les étapes mentionnées ci-dessus.

Si tout est correct, nous allons passer la commande suivante

```bash
git clone https://github.com/owellandry/code_editor.git
```

### 2.

Une fois que nous aurons le référentiel cloné, nous entrerons dans le dossier nécessaire pour pouvoir exécuter les scripts nécessaires

nous placerons

```bash
cdcode_editor
```
La chose normale serait d'exécuter la commande

```bash
installation npm
```
Mais si nous le faisons comme ça, nous obtiendrons cette erreur

![img](https://media.discordapp.net/attachments/1055292395505332336/1133994208504594442/image.png)

Pour le résoudre, nous allons placer la commande suivante

```bash
nettoyage du cache npm --force
```
```bash
rm -r node_modules
```
```bash
npm installer --force
```
```bash
début npm
```

### 3.
### 4.