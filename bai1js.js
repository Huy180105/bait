function nhietdoFsangC() {
    // Lấy giá trị từ ô nhập liệu
    let C = document.getElementById("nhapdoC").value;
    // Chuyển giá trị C từ chuỗi thành số (nếu có nhập vào)
    C = parseFloat(C);
    // Công thức chuyển đổi từ C sang F
    let F = (C * 9 / 5) + 32;
    // Hiển thị kết quả
    document.getElementById("KQ").innerText = `${C} độ C = ${F.toFixed(2)} độ F`;
}
