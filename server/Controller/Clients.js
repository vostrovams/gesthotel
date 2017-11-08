var base = require('../Lib/db');
var db = base.connection();
exports.afficherList = function (res) {
    db.query('SELECT * FROM   client', function (err, rows) {
        res.json(rows);
    });
}
exports.afficherDernier = function (res) {
    db.query('SELECT * FROM client ORDER BY id_client DESC LIMIT 0 , 1', function (err, rows) {
        res.json(rows);
    });
}
exports.afficherParId = function (res, id) {
    db.query(`SELECT * FROM client  WHERE id_client = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.ajouter = function (res, nom, prenom, sexe, adresse, email, dateNais, fonction, phoneNumber, villeProv, id_emp) {
    db.query(`INSERT INTO client (nom_client, prenom_client, sexe_client, adressePhysique_client, email_client,  dateNaissance_client, fonction_client, telephone_client, villeProvenance_client, numMat_employe) VALUES ('${nom}','${prenom}', '${sexe}', '${adresse}', '${email}', '${dateNais}', '${fonction}', '${phoneNumber}', '${villeProv}', '${id_emp}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modifier = function (res, nom, prenom, sexe, adresse, email, dateNais, fonction, phoneNumber, villeProv, numMat_employe, id) {
    db.query(`UPDATE client SET nom_client = '${nom}', prenom_client='${prenom}',  sexe_client='${sexe}',  adressePhysique_client='${adresse}',  email_client='${email}', dateNaissance_client='${dateNais}', fonction_client='${fonction}', telephone_client='${phoneNumber}', villeProvenance_client='${villeProv}', numMat_employe='${numMat_employe}' WHERE id_client = ${id} `, function (err, rows) {
        res.json(rows);
    });

}
exports.supprimer = function (res, id) {
    db.query(`DELETE FROM client WHERE id_client = ${id}`, function (err, rows) {
        res.json(rows);
    });
}



