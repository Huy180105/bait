// Hàm tính diện tích hình chữ nhật
function calculateRectangleArea() {
    var dài = parseFloat(document.getElementById("dài").value);
    var rộng = parseFloat(document.getElementById("rộng").value);
    if (isNaN(dài) || isNaN(rộng) || dài <= 0 || rộng <= 0) {
        alert("Vui lòng nhập chiều dài và chiều rộng hợp lệ.");
        return;
    }
    var area = dài * rộng;
    document.getElementById("HCN").innerText = "Diện tích hình chữ nhật: " + area;
}

// Hàm tính diện tích hình tam giác
function calculateTriangleArea() {
    var base = parseFloat(document.getElementById("đáy").value);
    var height = parseFloat(document.getElementById("cao").value);
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Vui lòng nhập cạnh đáy và chiều cao hợp lệ.");
        return;
    }
    var area = (base * height) / 2;
    document.getElementById("HTG").innerText = "Diện tích hình tam giác: " + area;
}

// Hàm tính diện tích hình vuông
function calculateSquareArea() {
    var cạnh = parseFloat(document.getElementById("cạnh").value);
    if (isNaN(cạnh) || cạnh <= 0) {
        alert("Vui lòng nhập cạnh hợp lệ.");
        return;
    }
    var area = cạnh * cạnh;
    document.getElementById("HV").innerText = "Diện tích hình vuông: " + area;
}
