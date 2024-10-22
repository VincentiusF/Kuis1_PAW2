const UMKM = require('../model/umkm');

const createdumkm = (req, res) => {
    const umkm = new umkm({
        nama_umkm : req.body.nama_umkm,
        alamat_umkm : req.body.alamat_umkm,
        kecamatan : req.body.kecamatan,
        kelurahan : req.body.kelurahan
    });

    console.log(umkm);
    umkm.save()
    .then((createdumkm) => {
        res.status(201).json({
            message : "Data berhasil disimpan",
            nama_umkmId : createdumkm._id,
            alamat_umkm : createdumkm.alamat_umkm,
            kecamatan : createdumkm.kecamatan,
            kelurahan : createdumkm.kelurahan
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message :'Internal server error' 
        })
    });
};

module.exports = {createdumkm}