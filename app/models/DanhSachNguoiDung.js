function DanhSachNguoiDung() {
  this.mangNguoiDung = [];

  this.themNguoiDung = function(nguoiDung) {
    this.mangNguoiDung.push(nguoiDung);
  };

  this.layThongTinNguoiDung = function(taiKhoan) {
    var viTri = this.timViTri(taiKhoan);

    return this.mangNguoiDung[viTri];
  };

  this.xoaNguoiDung = function(taiKhoan) {
    var viTri = this.timViTri(taiKhoan);

    this.mangNguoiDung.splice(viTri, 1);
  };

  this.timViTri = function(taiKhoan) {
    //Cách 1 sử dụng Map()

    // var viTri;

    // this.mangNguoiDung.map(function(item, index) {
    //   if (item.taiKhoan === taiKhoan) {
    //     viTri = index;
    //   }
    // });

    // return viTri;

    //Cách 1 sử dụng findIndex()
    return this.mangNguoiDung.findIndex(function(item) {
      return item.taiKhoan === taiKhoan;
    });
  };
}
