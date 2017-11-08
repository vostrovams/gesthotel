var express = require('express');
var bodyParser = require('body-parser');
var Categorie = require('./Controller/Categories');
var Client = require('./Controller/Clients');
var Paiement = require('./Controller/Paiements');
var Employer = require('./Controller/Employers');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/'));

//middleware categorie by @voldy
app.get('/categories', function (req, res) {
    console.log('traitement requette GET ...');
    Categorie.afficherList(res);
});

app.get('/categories/:id', function (req, res) {
    console.log('traitement requette GET ...');
    Categorie.afficherParId(res, req.params.id);
});

app.post('/categories', function (req, res) {
    console.log('Traitement requette POST ...');
    Categorie.ajouter(res, req.body.libelle_categorie, req.body.tarif);
});

app.put('/categories/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    Categorie.modifier(res, req.params.id, req.body.libelle_categorie, req.body.tarif);
});

app.delete('/categories/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    Categorie.supprimer(res, req.params.id);
});

//middleware client by @voldy
app.get('/client', function (req, res) {
    console.log('traitement requette GET ...');
    Client.afficherList(res);
});
app.get('/clientLast', function (req, res) {
    console.log('traitement requette GET ...');
    Client.afficherDernier(res);
});
app.get('/client/:id', function (req, res) {
    console.log('traitement requette GET ...');
    Client.afficherParId(res, req.params.id);
});
app.post('/client', function (req, res) {
    console.log('Traitement requette POST ...');
    Client.ajouter(res, req.body.nom, req.body.prenom, req.body.sexe_client, req.body.adresse, req.body.email, req.body.dateNais, req.body.fonction, req.body.phoneNumber, req.body.villeProv, req.body.id_emp);
});
app.put('/client/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    Client.modifier(res, req.body.nom_client, req.body.prenom_client, req.body.sexe_client, req.body.adressePhysique_client, req.body.email_client, req.body.dateNaissance_client, req.body.fonction_client, req.body.telephone_client, req.body.villeProvenance_client, req.body.numMat_employe, req.params.id);
});
app.delete('/client/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    Client.supprimer(res, req.params.id);
});

//middleware paiement by @Gael
app.get('/paiement', function (req, res) {
    console.log('traitement requette GET ...');
    Paiement.afficherPaiement(res);

});
app.post('/paiement', function (req, res) {
    console.log('Traitement requette POST ...');
    Paiement.insertionPaiement(res, req.body.typepaie, req.body.datepaie, req.body.montantpaie, req.body.idclient);
});
app.put('/paiement/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    Paiement.modificationPaiement(res, req.body.typepaie, req.body.datepaie, req.body.montantpaie, req.body.idclient, req.params.id);
});
app.delete('/paiement/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    Paiement.deletePaiement(res, req.params.id);
});
//middleware paiement by @Gael
app.get('/employer', function (req, res) {
    console.log('traitement requette GET ...');
    Employer.afficherEmployer(res);

});
app.post('/employer', function (req, res) {
    console.log('Traitement requette POST ...');
    Employer.insertionEmployer(res, req.body.matricule, req.body.nom, req.body.prenom, req.body.etatCivil, req.body.sexe, req.body.adressePhysique, req.body.dateNaissance, req.body.email, req.body.telephone, req.body.id_departement);
});
app.put('/employer/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    Employer.modificationEmployer(res, req.body.nom, req.body.prenom, req.body.etatCivil, req.body.sexe, req.body.adressePhysique, req.body.dateNaissance, req.body.email, req.body.telephone, req.body.id_departement, req.params.id);
});
app.delete('/employer/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    Employer.deleteEmployer(res, req.params.id);
});


app.listen(3001, () => {
    console.log('le serveur tourne sur le port 3001');
});
