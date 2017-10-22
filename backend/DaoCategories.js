var base = require('./db');

exports.afficherList = function (res) {
    base.connection().query('SELECT * FROM   categorie', function (err, rows) {
        res.json(rows);
    });
}
exports.afficherParId = function (res, id) {
    base.connection().query(`SELECT * FROM categorie  WHERE 	id_categorie = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.ajouter = function (res, libelle_categorie, tarif) {
    base.connection().query(`INSERT INTO categorie (libelle_categorie, tarif) VALUES ('${libelle_categorie}','${tarif}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modifier = function (res, id, libelle_categorie, tarif) {
    base.connection().query(`UPDATE categorie SET libelle_categorie = '${libelle_categorie}', tarif='${tarif}' WHERE id_categorie = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.supprimer = function (res, id) {
    base.connection().query(`DELETE FROM categorie WHERE id_categorie = ${id}`, function (err, rows) {
        res.json(rows);
    });
}



