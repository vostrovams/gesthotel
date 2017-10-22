var base = require('./db');

exports.afficherPaiement = function (res) {
    base.connection().query('SELECT type_paiement,date_paiement,montantPaye,client.prenom_client,client.nom_client FROM  paiement,client where paiement.id_client=client.id_client ', function (err, rows) {
        res.json(rows);
    });
}
exports.insertionPaiement=function(res,typepaie,datepaie,montantpaie,idclient){
    base.connection().query(`INSERT INTO paiement (type_paiement,date_paiement,montantPaye,id_client) VALUES ('${typepaie}','${datepaie}','${montantpaie}','${idclient}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modificationPaiement=function(res,typepaie,datepaie,montantpaie,idclient,id){
    base.connection().query(`UPDATE paiement SET type_paiement = '${typepaie}',date_paiement='${datepaie}',montantPaye='${montantpaie}',id_client='${idclient}' WHERE id_paiement = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
exports.deletePaiement=function(res,id){
    base.connection().query(`DELETE FROM paiement WHERE id_paiement = ${id}`, function (err, rows) {
        res.json(rows);
    });
}
