function calculatePayment (price, salesTax, discount) {

    salesTax = typeof salesTax === 'undefined' ? 0.047 : salesTax
    discount = typeof discount === 'undefined' ? 0 :  discount

    console.log(salesTax)
    console.log(discount)
}

function isRequired(name) {
    throw new Error(`${name} is required`)
}

function calculatePaymentES6 (price = isRequired('price'), salesTax = 0.047, discount = 0) {

    salesTax = typeof salesTax === 'undefined' ? 0.047 : salesTax
    discount = typeof discount === 'undefined' ? 0 :  discount

    console.log(salesTax)
    console.log(discount)
}



calculatePayment(100, .10, .25)
calculatePaymentES6(100, .075, .15)
calculatePaymentES6()

