/*

function carSimulator(marka, model, kilometre, fiyat) {
    return {
      marka: marka,
      model: model,
      kilometre: kilometre,
      fiyat: fiyat,
      depo: 50,
  
      getPrice: function () {
        return 'Arabanın güncel piyasa değeri ' + this.fiyat + " TL'dir.";
      },
  
      refuel: function (yakitMiktari) {
        this.depo += yakitMiktari;
        if (this.depo > 100) {
          this.depo = 100;
        }
        return 'Depo %' + this.depo + ' doludur.';
      },
  
      drive: function (km) {
        this.kilometre += km;
        const yuzKmSayisi = km / 100;
        this.depo -= yuzKmSayisi * 5;
        this.fiyat -= yuzKmSayisi * 50;
  
        return "Araba'nın güncel kilometresi:" + this.kilometre;
      },
    };
  }
  
  const simulator = carSimulator('Toyota', 'Corolla', 40000, 1200000);
  
  simulator.getPrice();
  //"Arabanın güncel piyasa değeri 1200000 TL'dir." dönmeli
  
  simulator.refuel(20);
  //"Depo %70 doludur." dönmeli
  
  simulator.refuel(120);
  //"Depo %100 doludur." dönmeli
  
  simulator.drive(100);
  //"Araba'nın güncel kilometresi: 40100" dönmeli ve `simulator.fiyat` değeri 1199950 olmalı.
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = carSimulator;
  