# Assessment

## Opdracht
Your last task is to build a user friendly responsive Angular webpage that allows to upload a picture of a receipt or invoice, submit that to our API, cover the loading time and then show that picture + the response of our API in a nicely structured table view that contains the invoice data. 
It must support both JPEG and PDF documents. 
There must be an option to retry a document, try another document and an option to download the file and JSON response. 

## Uitwerking
Ik heb er voor gekozen om de applicatie in drie onderdelen te verdelen; upload, download en het tonen van de data.

### Upload
Binnen het upload component wordt er een call naar de API gedaan. Alleen PDF en JPEG bestanden zijn toegestaan.

### Download
Het JSON response wat terug komt van de API kan worden gedownload. Net als het bestand wat geupload is.

### Data
Het JSON response wat van de API komt heb ik in drie onderdelen verdeeld; Customer, Order en Data. Deze drie onderdelen heb ik op cards weergegeven. 

## Runnen
De applicatie kan gerund worden met NPM. Aangezien mijn API key afgeschermd is, kan er niet daadwerkelijk een bestand geupload worden. In plaats daarvan heb ik de data van een factuur in de code gezet om te laten zien hoe het eindresultaat (na het uploaden van een bestand) er uit komt te zien.

## Overige
Voor de UI heb ik gebruik gemaakt van componenten van PrimeNG (zoals de FileUploadModule, ProgressBarModule en ButtonModule). https://www.primefaces.org/primeng/showcase/#/

Daarnaast heb ik in de map ' docs' twee sequentiediagrammen toegevoegd.
