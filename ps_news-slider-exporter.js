/////////////////////////////////////////////////
//////// News-Slider-Exporter by Lobers ////////
///////////////////////////////////////////////


//ERSCHEINUNGSTAG
var ET = prompt ("Bitte Erscheinungstag eingeben!", "Jahr_Monat_Tag");

//DATEINAME
var Dateiname_N1_Seite1 = ET+"_n1_1.jpg";
var Dateiname_N1_Seite2 = ET+"_n1_2.jpg";
var Dateiname_N2_Seite1 = ET+"_n2_1.jpg";
var Dateiname_N2_Seite2 = ET+"_n2_2.jpg";
var Dateiname_N3_Seite1 = ET+"_n3_1.jpg";
var Dateiname_N3_Seite2 = ET+"_n3_2.jpg";
var Dateiname_N4_Seite1 = ET+"_n4_1.jpg";
var Dateiname_N4_Seite2 = ET+"_n4_2.jpg";
var Dateiname_N5_Seite1 = ET+"_n5_1.jpg";
var Dateiname_N5_Seite2 = ET+"_n5_2.jpg";
var Dateiname_N6_Seite1 = ET+"_n6_1.jpg";
var Dateiname_N6_Seite2 = ET+"_n6_2.jpg";

// ZIELORDNER
var Zielordner = Folder("Zielordner/fuer/exportierte/Nachrichten/eingeben");
// TAGESORDNER ANLEGEN/GENERIEREN
var Tagesordner = Folder(Zielordner + "/" + ET);
if(!Tagesordner.exists) Tagesordner.create(); // Falls Tagesordner noch nicht angelegt, dann anlegen


// SPEICHERVORGÄNGE DEFINIEREN
var saveFile_N1_1 = new File(Tagesordner + "/" + Dateiname_N1_Seite1);
var saveFile_N1_2 = new File(Tagesordner + "/" + Dateiname_N1_Seite2);
var saveFile_N2_1 = new File(Tagesordner + "/" + Dateiname_N2_Seite1);
var saveFile_N2_2 = new File(Tagesordner + "/" + Dateiname_N2_Seite2);
var saveFile_N3_1 = new File(Tagesordner + "/" + Dateiname_N3_Seite1);
var saveFile_N3_2 = new File(Tagesordner + "/" + Dateiname_N3_Seite2);
var saveFile_N4_1 = new File(Tagesordner + "/" + Dateiname_N4_Seite1);
var saveFile_N4_2 = new File(Tagesordner + "/" + Dateiname_N4_Seite2);
var saveFile_N5_1 = new File(Tagesordner + "/" + Dateiname_N5_Seite1);
var saveFile_N5_2 = new File(Tagesordner + "/" + Dateiname_N5_Seite2);
var saveFile_N6_1 = new File(Tagesordner + "/" + Dateiname_N6_Seite1);
var saveFile_N6_2 = new File(Tagesordner + "/" + Dateiname_N6_Seite2);

// SPEICHERVORGÄNGE ALS LISTE
var arraySave = [saveFile_N1_1, saveFile_N1_2, saveFile_N2_1, saveFile_N2_2, saveFile_N3_1, saveFile_N3_2, saveFile_N4_1, saveFile_N4_2, saveFile_N5_1, saveFile_N5_2, saveFile_N6_1, saveFile_N6_2];

///////////////////////////////////////
//////// NACHRICHT 1 ERZEUGEN ////////
/////////////////////////////////////


//////// NACHRICHT 1, SEITE 1 ////////

// EBENENSETS DEFINIEREN
var Nachricht_1 = app.activeDocument.layerSets.getByName("Nachricht_1");
var N1_1 = Nachricht_1.layerSets.getByName("N1_1");
var N1_2 = Nachricht_1.layerSets.getByName("N1_2");

// EBENENSETS SICHTBAR/UNSICHTBAR
N1_1 = Nachricht_1.layerSets.getByName("N1_1"); // Richtige Ebenensets wählen
Nachricht_1.visible = true;
N1_1.visible = true;



// FÜR WEB SPEICHERN OPTIONEN FESTLEGEN
function saveAsOptimizedJPEG(arraySave, jpegQuality) { // Parameter Speichervorgänge als Array (arraySave), Bildqualität
	var sfwOptions = new ExportOptionsSaveForWeb(); 
	sfwOptions.format = SaveDocumentType.JPEG;
	sfwOptions.includeProfile = false; 
	sfwOptions.interlaced = 0; 
	sfwOptions.optimized = true; 
	sfwOptions.quality = jpegQuality; 
	app.activeDocument.exportDocument(arraySave, ExportType.SAVEFORWEB, sfwOptions);  // Parameter Speichervorgänge als Array
}

// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N1_1.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen // Pro Nachricht eigener Dateiname (saveFile_NX_X)
saveAsOptimizedJPEG(saveFile_N1_1,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////// NACHRICHT 1, SEITE 2 ////////

// EBENENSETS SICHTBAR/UNSICHTBAR
N1_2 = Nachricht_1.layerSets.getByName("N1_2"); // Richtige Ebenensets wählen
Nachricht_1.visible = true;
N1_1.visible = false;
N1_2.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N1_2.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen // Pro Nachricht eigener Dateiname (saveFile_NX_X)
saveAsOptimizedJPEG(saveFile_N1_2,60);   // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////////////////////////////////////
//////// NACHRICHT 2 ERZEUGEN ///////
/////////////////////////////////////


//////// NACHRICHT 2, SEITE 1 ////////

// EBENENSETS DEFINIEREN
var Nachricht_2 = app.activeDocument.layerSets.getByName("Nachricht_2"); // Richtige Ebenensets wählen
var N2_1 = Nachricht_2.layerSets.getByName("N2_1");
var N2_2 = Nachricht_2.layerSets.getByName("N2_2");

// EBENENSETS SICHTBAR/UNSICHTBAR
N2_1 = Nachricht_2.layerSets.getByName("N2_1");
Nachricht_1.visible = false;
Nachricht_2.visible = true;
N2_1.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N2_1.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N2_1,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////// NACHRICHT 2, SEITE 2 ////////

// EBENENSETS SICHTBAR/UNSICHTBAR
N2_2 = Nachricht_2.layerSets.getByName("N2_2"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
N2_1.visible = false;
N2_2.visible = true;




// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N2_2.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N2_2,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


try { // Wenn ab hier alle weiteren Nachrichten in der PSD fehlen, so erzeugt Photoshop eine Fehlermeldung und bricht ab. (Else-if, Switch Abfragen scheinen nicht zu funktionieren). Diese Fehlermeldung wird hier mit try und (ganz am Ende) mit catch abgefangen und stattdessen eine selbst definierte Meldung ausgegeben)

///////////////////////////////////////
//////// NACHRICHT 3 ERZEUGEN ////////
/////////////////////////////////////

//////// NACHRICHT 3, SEITE 1 ////////

// EBENENSETS DEFINIEREN
var Nachricht_3 = app.activeDocument.layerSets.getByName("Nachricht_3"); // Richtige Ebenensets wählen
var N3_1 = Nachricht_3.layerSets.getByName("N3_1");
var N3_2 = Nachricht_3.layerSets.getByName("N3_2");

// EBENENSETS SICHTBAR/UNSICHTBAR
N3_1 = Nachricht_3.layerSets.getByName("N3_1"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false
Nachricht_3.visible = true;
N3_1.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N3_1.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N3_1,60);   // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////// NACHRICHT 3, SEITE 2 ////////

// EBENENSETS SICHTBAR/UNSICHTBAR
N3_2 = Nachricht_3.layerSets.getByName("N3_2"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false;
N3_1.visible = false;
N3_2.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N3_2.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N3_2,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


///////////////////////////////////////
//////// NACHRICHT 4 ERZEUGEN ////////
/////////////////////////////////////


//////// NACHRICHT 4, SEITE 1 ////////

// EBENENSETS DEFINIEREN
var Nachricht_4 = app.activeDocument.layerSets.getByName("Nachricht_4"); // Richtige Ebenensets wählen
var N4_1 = Nachricht_4.layerSets.getByName("N4_1");
var N4_2 = Nachricht_4.layerSets.getByName("N4_2");

// EBENENSETS SICHTBAR/UNSICHTBAR
N4_1 = Nachricht_4.layerSets.getByName("N4_1"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false
Nachricht_3.visible = false;
Nachricht_4.visible = true;
N4_1.visible = true;




// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N4_1.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N4_1,60); // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////// NACHRICHT 4, SEITE 1 ////////

// EBENENSETS SICHTBAR/UNSICHTBAR
N4_2 = Nachricht_4.layerSets.getByName("N4_2"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false;
Nachricht_3.visible = false;
Nachricht_4.visible = true;
N4_1.visible = false;
N4_2.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N4_2.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N4_2,60); // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)



///////////////////////////////////////
//////// NACHRICHT 5 ERZEUGEN ////////
/////////////////////////////////////


//////// NACHRICHT 5, SEITE 1 ////////

// EBENENSETS DEFINIEREN
var Nachricht_5 = app.activeDocument.layerSets.getByName("Nachricht_5"); // Richtige Ebenensets wählen
var N5_1 = Nachricht_5.layerSets.getByName("N5_1");
var N5_2 = Nachricht_5.layerSets.getByName("N5_2");

// EBENENSETS SICHTBAR/UNSICHTBAR
N5_1 = Nachricht_5.layerSets.getByName("N5_1"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false
Nachricht_3.visible = false;
Nachricht_4.visible = false;
Nachricht_5.visible = true;
N5_1.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N5_1.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N5_1,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////// NACHRICHT 5, SEITE 2 ////////

// EBENENSETS SICHTBAR/UNSICHTBAR
N5_2 = Nachricht_5.layerSets.getByName("N5_2"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false;
Nachricht_3.visible = false;
Nachricht_4.visible = false;
Nachricht_5.visible = true;
N5_1.visible = false;
N5_2.visible = true;




// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N5_2.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N5_2,60); // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)



///////////////////////////////////////
//////// NACHRICHT 6 ERZEUGEN ////////
/////////////////////////////////////


//////// NACHRICHT 6, SEITE 1 ////////

// EBENENSETS DEFINIEREN
var Nachricht_6 = app.activeDocument.layerSets.getByName("Nachricht_6"); // Richtige Ebenensets wählen
var N6_1 = Nachricht_6.layerSets.getByName("N6_1");
var N6_2 = Nachricht_6.layerSets.getByName("N6_2");

// EBENENSETS SICHTBAR/UNSICHTBAR
N6_1 = Nachricht_6.layerSets.getByName("N6_1"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false
Nachricht_3.visible = false;
Nachricht_4.visible = false;
Nachricht_5.visible = false;
Nachricht_6.visible = true;
N6_1.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N6_1.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N6_1,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)


//////// NACHRICHT 6, SEITE 2 ////////

// EBENENSETS SICHTBAR/UNSICHTBAR
N6_2 = Nachricht_6.layerSets.getByName("N6_2"); // Richtige Ebenensets wählen
Nachricht_1.visible = false;
Nachricht_2.visible = false;
Nachricht_3.visible = false;
Nachricht_4.visible = false;
Nachricht_5.visible = false;
Nachricht_6.visible = true;
N6_1.visible = false;
N6_2.visible = true;



// SPEICHERVORGANG (FUNKTIONSAUFRUF)
saveFile_N6_2.remove(); // Falls Datei mit selben Namen vorhanden, vor speichern entfernen
saveAsOptimizedJPEG(saveFile_N6_2,60);  // Qualität 60%, // Pro Nachricht eigener Dateiname aus Array (Parameter saveFile_NX_X)
}// end try

catch (Error) { // Fehlermeldungen, die Photoshop ausgibt, weil Ebenensets fehlen (falls Nachrichten nicht vorhanden) werden hier mit eigener Meldung abgefangen (siehe oben, ab Nachricht 3 erzeugen, bei TRY Befehl)
	alert ("Fertig!"); // Einsetzen nach letzter erzeugter Nachricht
		}
	
if (saveFile_N6_1.exists){ // Ausgabe NUR wenn alle Nachrichten-Ebenensets innerhalb der PSD abgearbeitet wurden (sonst doppeltes "Fertig" wenn alle folgenden Nachrichten ab Nachricht 3 fehlen)
alert ("Fertig!"); 
}
