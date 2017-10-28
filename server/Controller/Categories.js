var base = require('../Lib/db');
var db = base.connection();
exports.afficherList = function (res) {
    db.query('SELECT * FROM   categorie', function (err, rows) {
        res.json(rows);
    });
}
exports.afficherParId = function (res, id) {
    db.query(`SELECT * FROM categorie  WHERE 	id_categorie = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.ajouter = function (res, libelle_categorie, tarif) {
    db.query(`INSERT INTO categorie (libelle_categorie, tarif) VALUES ('${libelle_categorie}','${tarif}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modifier = function (res, id, libelle_categorie, tarif) {
    db.query(`UPDATE categorie SET libelle_categorie = '${libelle_categorie}', tarif='${tarif}' WHERE id_categorie = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.supprimer = function (res, id) {
    db.query(`DELETE FROM categorie WHERE id_categorie = ${id}`, function (err, rows) {
        res.json(rows);
    });
}



