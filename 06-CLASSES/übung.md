# Übung Classes
- Programmieren Sie öffentliche Klassen, die das Interface ITransport implementieren:
    -	Car
    -	Bicycle
    -	Ship
    -	Plane
- und den im Interface definierten Methoden:
    -	Accelerate: Erhöht die Geschwindigkeit, darf aber Maximal-Geschwindigkeit nicht überschreiten
    -	Brake: Setzt die Geschwindigkeit runter, darf aber in den Minus-Bereich nicht reingehen
    -	Start: Wechselt von Zustand aus zu an
    -	Stop: Wechselt von Zustand an zu aus
    -	DescribeMe: Gibt Informationen über das Transportmittel als String zurück
- Überlegen Sie welche Datentypen die Eigenschaften am besten abbilden und welche Zugriffsmodifizierer (public/ private) geeignet sind. 
- Programmieren Sie zudem einen oder mehrere Konstruktoren.
- Erweitern Sie die Klassen Ship und Plane zudem so, dass es ein ITransport-Objekt aufnehmen und in seiner DescribeMe()-Methode Informationen darüber ausgeben kann.
- Schreiben Sie danach eine Datei main.ts und dort eine Methode, welche als Parameter zwei Transportmittelobjekte übernimmt und nach Prüfung der Interfaces entweder ein Objekt auf das andere belädt oder eine Fehlermeldung ausgibt. 
Legen Sie eine Instanz der Klasse Transport in main.ts an. Rufen Sie die Methode DescribeMe() auf.
- Was muss man beim Aufteilen in mehrere Dateien beachten


Viel Erfolg!