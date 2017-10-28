var base = require('../Lib/db');
var db = base.connection();
exports.afficherList = function (res) {
    db.query('SELECT * FROM   client', function (err, rows) {
        res.json(rows);
    });
}
exports.afficherParId = function (res, id) {
    db.query(`SELECT * FROM client  WHERE id_client = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.ajouter = function (res, nom, prenom, sexe, adresse, email, dateArrive, dateNais, fonction, phoneNumber, villeProv, id_emp) {
    db.query(`INSERT INTO client (nom_client, prenom_client, sexe_client, adressePhysique_client, email_client, dateArrivee_client, dateNaissance_client, fonction_client, telephone_employe, villeProvenance_client, numMat_employe) VALUES ('${nom}','${prenom}', '${sexe}', '${adresse}', '${email}', '${dateArrive}', '${dateNais}', '${fonction}', '${phoneNumber}', '${villeProv}', '${id_emp}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modifier = function (res, nom, prenom, sexe, adresse, email, dateArrive, dateDepart, dateNais, fonction, phoneNumber, villeProv, id_emp, id) {
    db.query(`UPDATE client SET nom_client = '${nom}', prenom_client='${prenom}',  sexe_client='${sexe}',  adressePhysique_client='${adresse}',  email_client='${email}', dateArrivee_client='${dateArrive}', dateDepart_client='${dateDepart}', dateNaissance_client='${dateNais}', fonction_client='${fonction}', telephone_employe='${phoneNumber}', villeProvenance_client='${villeProv}', numMat_employe='${id_emp}'  WHERE id_client = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.supprimer = function (res, id) {
    db.query(`DELETE FROM client WHERE id_client = ${id}`, function (err, rows) {
        res.json(rows);
    });
}



