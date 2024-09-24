// Ödeme butonuna tıklama işlemini yakala
document.getElementById("pay-button").addEventListener("click", () => {
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber === "" || expiryDate === "" || cvv === "") {
        document.getElementById("payment-message").textContent = "Lütfen tüm alanları doldurun.";
        return;
    }

    // Ödeme işlemini gerçekleştir
    document.getElementById("payment-message").textContent = "Ödeme başarıyla gerçekleştirildi!";
});
