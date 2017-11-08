var base = require('../Lib/db');
var db = base.connection();
exports.afficherReservation=function(res){
    db.query('SELECT num_reservation,date_reservation,dateExpiration_reservation,dateArrivee_client,dateDepart_client,client.nom_client,chambre.libelle_chambre,categorie.libelle_categorie,categorie.tarif FROM reservation,client,chambre,categorie where reservation.id_client=client.id_client and reservation.id_chambre=chambre.id_chambre and chambre.id_categorie=categorie.id_categorie',function(err,rows){
        res.json(rows);
    });
}
exports.insertionReservation=function(res,numres,dateres,dateExpires,datearrivclit,datedepartcliet,idclient,idchambre){
    db.query(`INSERT INTO reservation (num_reservation,date_reservation,dateExpiration_reservation,dateArrivee_client,dateDepart_client,id_client,id_chambre) VALUES ('${numres}','${dateres}','${dateExpires}','${datearrivclit}','${datedepartcliet}','${idclient}','${idchambre}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modificationReservation=function(res,numres,dateres,dateExpires,datearrivclit,datedepartcliet,idclient,idchambre,id){
    db.query(`UPDATE reservation SET num_reservation = '${numres}',date_reservation='${dateres}',dateExpiration_reservation='${dateExpires}',dateArrivee_client='${datearrivclit}',dateDepart_client='${datedepartcliet}',id_client='${idclient}',id_chambre='${idchambre}' WHERE id_reservation = '${id}'`, function (err, rows) {
        res.json(rows);
    });
}
exports.suppressionReservation=function(res,id){
    db.query(`DELETE FROM reservation WHERE id_reservation =' ${id}'`, function (err, rows) {
        res.json(rows);
    });
}

