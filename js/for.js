// For1
function kSoniniNmartaChiqarish(k, n) {
    if (n > 0)
        for (let i = 0; i < n; i++) {
            console.log(k);
        }
    else console.log("noto'g'ri son kiritildi");
    return "tugadi";
}

// For2
function sonlarniChiqarish(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
    return "tugadi";
}

// For3
function sonlarniTeskariChiqarish(a, b) {
    for (let i = b - 1; i > a; i--) {
        console.log(i);
    }
    return "tugadi";
}

// For4
function narxniChiqarish(narx) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} kg: ${i * narx}`);
    }
    return "tugadi";
}

// For5
function narxniChiqarish2(narx) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i / 10} kg: ${(i / 10) * narx}`);
    }
    return "Tugadi";
}

// For6
function printCandyPricesSpecific(narx) {
    for (let i = 12; i <= 20; i += 2) {
        console.log(`${i / 10} kg: ${(i / 10) * narx}`);
    }
    return "Tugadi";
}

// For7
function yigindiniChiqarish(a, b) {
    for (let i = a; i <= b; i++) {
        console.log((sum += i));
    }
    return "Tugadi";
}

// For8
function productIntegers(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
    return "Tugadi";
}

// For9
function kvadratniChiqarish(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i * i);
    }
    return "Tugadi";
}

// For10
function yigindiniHisoblash(n) {
    for (let i = 1; i <= n; i++) {
        console.log(1 / i);
    }
    return "Tugadi";
}
