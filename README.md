# Photoshop-News-Slider-Exporter

Exportiert einen News-Slider mit maximal 6 Nachrichten, jede davon mit einem Teaser und der eigentlichen Nachricht.
Das Script arbeitet sich durch ein Photoshop-Template, was folgendermaßen aufgebaut ist:

Nachrichten-Ordner-1  
* Unterordner-1_Seite-1 
* Unterornder-2_Seite-2


Nachrichten-Ordner-2  > Unterordner-1_Seite-1 
                      > Unterornder-2_Seite-2

und so weiter.

Bei der Scriptausführung wird der User gebeten einen Erscheinungstag als Dateiname in der Form "Jahr_Monat_Tag" einzugeben.
Das Script hängt dann an diesem Dateinamen eine Erweiterung nach folgendem Schema:

"_n1_n1" für Nachricht 1, Seite 1 (Teaser)
"_n1_n2" für Nachricht 1, Seite 2 (eigentliche Nachricht)

"_n2_n1" für Nachricht 2, Seite 1 (Teaser)
"_n2_n2" für Nachricht 2, Seite 2 (eigentliche Nachricht)

und so weiter.

Ein Ordner wird erstellt und nach dem Erscheinungstag benannt. Darin werden alle Slider als "für Web speichern" exportiert. In Zusammenarbeit mit Photoshop-Aktionen, sechs an der Zahl können erstellt werden,
jede für eine Nachricht, welche dann die nicht genutzten Nachrichten/Ordner löscht, bevor das Script ausgeführt wird. Dadurch wird sichergestellt, dass auch nur die tatsächliche Anzahl an Nachrichten exportiert wird. Zum Beispiel erstellt der User eine Aktion namens "2 Nachrichten", die folgendes erledigt:

1.) Lösche Nachrichten-Ordner 3 bis 6 (nicht benutzte)
2.) Starte das Script
3.) Slide 1 und 2 werden exportiert
4.) Löschung von Nachrichten-Ordner 3 bis 6 wird Rückgängig gemacht (um das Photoshop-Template mit allen Nachrichten zum Wiedergebrauch zu erhalten und Nachkorrekturen der letzten Version zu ermöglichen)
5.) Speichern und Schließen des Photoshop-Templates

--------------------------------------------------------------------------------------------------------------------------------

Exports a news-slider for a total amount of 6 messages, each with a teaser and main content.
The script iterates through a Photoshop-Template-Document which is set up as follows:

News-Folder-1
  Subfolder-1_Page-1
  Subfolder-2_Page-2


News-Folder-2
  Subfolder-1_Page-1
  Subfolder-2_Page-2

and so on.

When running, the user is asked to type in a release date as a filename with the scheme "Year_Month_Day".
The script then appends an extension to the filename as follows:

"_n1_n1" for news slide 1 page 1 (teaser)
"_n1_n2" for news slide 1 page 2 (main content)

"_n2_n1" for news slide 2 page 1 (teaser)
"_n2_n2" for news slide 2 page 2 (main content)

and so on.

A folder will be created and named according to the chosen release date. All news slides are exported "as save for web" inside this folder. In conjunction with Photoshop actions, six of which can be created, one for each news, that will delete all unused news/folders before running the script. This way only the right amount of news are exported. For example the user creates an action called "2 news" which will do the following:

1.) Delete news-folders 3 to 6 (unused)
2.) Run the script
3.) Slides 1 and 2 are exported
4.) Deletion of news-folders 3 to 6 is undone (to keep the Photoshop-Template-Document with all news sliders for reusage and to make sure that further correction of the last version can be done)
5.) Save and exit the Photoshop-Template


