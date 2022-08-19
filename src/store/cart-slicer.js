import { createSlice } from "@reduxjs/toolkit/";

const cartSlice = createSlice({
    name: 'custCart',
    initialState: { 
        pesenan: [],
        totalQty: 0,
        totalPrice: 0
    },
    reducers: {
        addItem(state, aksi){
            const belanjaanYangDitambah = aksi.payload;
            const belanjaanYangMauDimasukin = state.pesenan.find(barangDalamCart => barangDalamCart.idBarang === belanjaanYangDitambah.id);
            // akan return elemen (dalam hal ini adalah objek) yang punya properti id yang sama
            state.totalQty++;
            if (!belanjaanYangMauDimasukin){ 
                state.pesenan.push({ // kalau pake redux biasa.. GAK BOLEH mutasi state langsung gini! Tapi kalau pake toolkit, boleh.
                    idBarang: belanjaanYangDitambah.id,
                    namaBarang: belanjaanYangDitambah.nama,
                    hargaBarang: belanjaanYangDitambah.harga,
                    qtyBarang: 1,
                    hargaTotalBarang: belanjaanYangDitambah.harga,
                });
            } else {
                belanjaanYangMauDimasukin.qtyBarang++;
                belanjaanYangMauDimasukin.hargaTotalBarang = belanjaanYangMauDimasukin.hargaTotalBarang + belanjaanYangDitambah.harga
            }
        },
        removeItem(state, aksi) {
            const barangYangDikurangi = aksi.payload;
            const belanjaanYangMauDikurangi = state.pesenan.find(barangDalamCart => barangDalamCart.idBarang === barangYangDikurangi.id);
            state.totalQty--;
            if(belanjaanYangMauDikurangi.qtyBarang > 1) {
                belanjaanYangMauDikurangi.qtyBarang--;
                belanjaanYangMauDikurangi.hargaTotalBarang = belanjaanYangMauDikurangi.hargaTotalBarang - belanjaanYangMauDikurangi.hargaBarang;
            } else {
                state.pesenan = state.pesenan.filter(barang => barang.idBarang !== barangYangDikurangi.idBarang)
            };
        }
    }
});

export const aksiCart = cartSlice.actions;

export default cartSlice;