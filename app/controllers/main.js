$(document).ready(function() {
  var danhSachNguoiDung = new DanhSachNguoiDung();


  function themNguoiDung(){
    console.log("themNguoiDung");
  }

  getLocalStorage();

  /* Xử lý nút Thêm Người Dùng */
  $("#btnThemNguoiDung").click(function() {
    $(".modal-title").html("Thêm người dùng");

    var footer = `<button 
                    id='btnThem' 
                    class='btn btn-success'>Thêm</button>`;
    $(".modal-footer").html(footer);
  });

  /* Xử lý chức năng Thêm */
  $("body").delegate("#btnThem", "click", function() {
    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();

    var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT);

    danhSachNguoiDung.themNguoiDung(nguoiDung);
    taoBang();
    setLocalStorage();
  });

  function taoBang() {
    var content = "";
    danhSachNguoiDung.mangNguoiDung.map(function(item, index) {
      content += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>
                    <button class='btnSua btn btn-info' data-taikhoan="${
                      item.taiKhoan
                    }" data-toggle="modal" data-target="#myModal">Sửa</button>
                    <button class='btnXoa btn btn-danger' data-taikhoan="${
                      item.taiKhoan
                    }">Xóa</button>
                </td>
            </tr>
        `;
    });

    $("#tblDanhSachNguoiDung").html(content);
  }

  /* Chức năng xóa */
  $("body").delegate(".btnXoa", "click", function() {
    var taiKhoan = $(this).data("taikhoan") + "";
    danhSachNguoiDung.xoaNguoiDung(taiKhoan);
    taoBang();
    setLocalStorage();
  });

  /* Chức năng sửa */
  $("body").delegate(".btnSua", "click", function() {
    $("..modal-title").html("Sửa người dùng");
    var footer = `<button 
                    id='btnCapNhat' 
                    class='btn btn-success'>Cập nhật</button>`;
    $(".modal-footer").html(footer);

    var taiKhoan = $(this).data("taikhoan") + "";
    var nguoiDung = danhSachNguoiDung.layThongTinNguoiDung(taiKhoan);

    console.log(nguoiDung);
  });

  /* Tim Kiem */
  $("#txtSearch").keyup(function() {
    console.log(21321);
  });

  function setLocalStorage() {
    localStorage.setItem(
      "DanhSachNguoiDung",
      JSON.stringify(danhSachNguoiDung.mangNguoiDung)
    );
  }

  function getLocalStorage() {
    if (localStorage.getItem("DanhSachNguoiDung")) {
      danhSachNguoiDung.mangNguoiDung = JSON.parse(
        localStorage.getItem("DanhSachNguoiDung")
      );
      taoBang();
    }
  }
});
