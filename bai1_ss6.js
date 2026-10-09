
const prices = {
    SHAKER: 120000,
    GLOVES: 180000,
    STRAP: 150000
};

let choice;
let orderCode = "";
let isValid = false;

do {
    console.log("\n===== FITNESS GYM =====");
    console.log("1. Nhập mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");

    choice = prompt("Nhập lựa chọn:");

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng:").trim().toUpperCase();
            isValid = orderCode.length >= 8;

            if (isValid) {
                console.log("Mã đơn hàng hợp lệ:", orderCode);
            } else {
                console.log("Mã đơn hàng không hợp lệ");
            }
            break;

        case "2":
            if (!isValid) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước");
                break;
            }

            let items = prompt("Nhập sản phẩm, ví dụ SHAKER,GLOVES:")
                .trim()
                .toUpperCase()
                .split(",");

            let total = 0;
            let bill = [];

            for (let i = 0; i < items.length; i++) {
                let item = items[i].trim();

                if (prices[item] !== undefined) {
                    total += prices[item];
                    bill.push(item);
                }
            }

            if (bill.length === 0) {
                console.log("Không có sản phẩm hợp lệ");
                break;
            }

            let vip = prompt("Khách có thẻ VIP không? (C/K):")
                .trim()
                .toUpperCase();

            let discount = vip === "C" ? total * 0.1 : 0;
            let finalTotal = total - discount;

            console.log("-".repeat(40));
            console.log("           FITNESS GYM");
            console.log("-".repeat(40));
            console.log("Mã đơn hàng:", orderCode);
            console.log("Sản phẩm             Thành tiền");

            for (let i = 0; i < bill.length; i++) {
                console.log(
                    bill[i].padEnd(22) +
                    prices[bill[i]].toLocaleString("vi-VN").padStart(12) +
                    " VNĐ"
                );
            }

            console.log("-".repeat(40));
            console.log("Tổng tiền:", total.toLocaleString("vi-VN"), "VNĐ");
            console.log("Giảm giá:", discount.toLocaleString("vi-VN"), "VNĐ");
            console.log("Thanh toán:", finalTotal.toLocaleString("vi-VN"), "VNĐ");
            console.log("-".repeat(40));
            break;

        case "3":
            console.log("Đã thoát chương trình");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== "3");