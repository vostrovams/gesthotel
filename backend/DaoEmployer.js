var base = require('./db');

exports.afficherEmployer = function (res) {
    base.connection().query('SELECT nom_employe,prenom_employe,etatCivil_employe,sexe_employe,adressePhysique_employe,dateNaissance_employe,email_employe,telephone_employe,departement.nom_departement FROM  employe,departement where employe.id_departement=departement.id_departement ', function (err, rows) {
        res.json(rows);
    });
}
exports.insertionEmployer=function(res,matricule,nom,prenom,etatCivil,sexe,adressePhysique,dateNaissance,email,telephone,id_departement){
    base.connection().query(`INSERT INTO employe (numMat_employe,nom_employe,prenom_employe,etatCivil_employe,sexe_employe,adressePhysique_employe,dateNaissance_employe,email_employe,telephone_employe,id_departement) VALUES ('${matricule}','${nom}','${prenom}','${etatCivil}','${sexe}','${adressePhysique}','${dateNaissance}','${email}','${telephone}','${id_departement}')`, function (err, rows) {
        res.json(rows);
    });
}
exports.modificationEmployer=function(res,nom,prenom,etatCivil,sexe,adressePhysique,dateNaissance,email,telephone,id_departement,id){
    base.connection().query(`UPDATE employe SET nom_employe = '${nom}',prenom_employe='${prenom}',etatCivil_employe='${etatCivil}',sexe_employe='${sexe}',adressePhysique_employe='${adressePhysique}',dateNaissance_employe='${dateNaissance}',email_employe='${email}',telephone_employe='${telephone}',id_departement='${id_departement}' WHERE numMat_employe = '${id}'`, function (err, rows) {
        res.json(rows);
    });
}
exports.deleteEmployer=function(res,id){
    base.connection().query(`DELETE FROM employe WHERE numMat_employe = '${id}'`, function (err, rows) {
        res.json(rows);
    });
}
