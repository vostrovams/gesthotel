var express = require('express');
var bodyParser = require('body-parser');
var daoCat = require('../DaoCategories');
var daoClient = require('../DaoClients');
var daoPay = require('../DaoPaiement');
var daoEmp = require('../DaoEmployer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('client/'));

//middleware categorie by @voldy
app.get('/categories', function (req, res) {
    console.log('traitement requette GET ...');
    daoCat.afficherList(res);
});

app.get('/categories/:id', function (req, res) {
    console.log('traitement requette GET ...');
    daoCat.afficherParId(res, req.params.id);
});

app.post('/categories', function (req, res) {
    console.log('Traitement requette POST ...');
    daoCat.ajouter(res, req.body.libelle_categorie, req.body.tarif);
});

app.put('/categories/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    daoCat.modifier(res, req.params.id, req.body.libelle_categorie, req.body.tarif);
});

app.delete('/categories/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    daoCat.supprimer(res, req.params.id);
});

//middleware client by @voldy
app.get('/client', function (req, res) {
    console.log('traitement requette GET ...');
    daoClient.afficherList(res);
});
app.get('/client/:id', function (req, res) {
    console.log('traitement requette GET ...');
    daoClient.afficherParId(res, req.params.id);
});
app.post('/client', function (req, res) {
    console.log('Traitement requette POST ...');
    daoClient.ajouter(res, req.body.nom, req.body.prenom, req.body.sexe, req.body.adresse, req.body.email, req.body.dateArrive, req.body.dateNais, req.body.fonction, req.body.phoneNumber, req.body.villeProv, req.body.id_emp);
});
app.put('/client/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    daoClient.modifier(res, req.body.nom, req.body.prenom, req.body.sexe, req.body.adresse, req.body.email, req.body.dateArrive, req.body.dateDepart, req.body.dateNais, req.body.fonction, req.body.phoneNumber, req.body.villeProv, req.body.id_emp, req.params.id);
});
app.delete('/client/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    daoClient.supprimer(res, req.params.id);
});

//middleware paiement by @Gael
app.get('/paiement', function (req, res) {
    console.log('traitement requette GET ...');
    daoPay.afficherPaiement(res);

});
app.post('/paiement', function (req, res) {
    console.log('Traitement requette POST ...');
    daoPay.insertionPaiement(res, req.body.typepaie, req.body.datepaie, req.body.montantpaie, req.body.idclient);
});
app.put('/paiement/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    daoPay.modificationPaiement(res, req.body.typepaie, req.body.datepaie, req.body.montantpaie, req.body.idclient, req.params.id);
});
app.delete('/paiement/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    daoPay.deletePaiement(res, req.params.id);
});
//middleware paiement by @Gael
app.get('/employer', function (req, res) {
    console.log('traitement requette GET ...');
    daoEmp.afficherEmployer(res);

});
app.post('/employer', function (req, res) {
    console.log('Traitement requette POST ...');
    daoEmp.insertionEmployer(res, req.body.matricule, req.body.nom, req.body.prenom, req.body.etatCivil, req.body.sexe, req.body.adressePhysique, req.body.dateNaissance, req.body.email, req.body.telephone, req.body.id_departement);
});
app.put('/employer/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    daoEmp.modificationEmployer(res, req.body.nom, req.body.prenom, req.body.etatCivil, req.body.sexe, req.body.adressePhysique, req.body.dateNaissance, req.body.email, req.body.telephone, req.body.id_departement, req.params.id);
});
app.delete('/employer/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    daoEmp.deleteEmployer(res, req.params.id);
});


app.listen(3001, () => {
    console.log('le serveur tourne sur le port 3001');
});
