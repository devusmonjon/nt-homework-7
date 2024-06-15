// Case1
function haftaKuniniAniqlash(kun) {
    switch (kun) {
        case 1:
            return "Dushanba";
        case 2:
            return "Seshanba";
        case 3:
            return "Chorshanba";
        case 4:
            return "Payshanba";
        case 5:
            return "Juma";
        case 6:
            return "Shanba";
        case 7:
            return "Yakshanba";
        default:
            return "Bunday hafta kuni mavjud emas";
    }
}

// Case2
function baho(k) {
    switch (k) {
        case 1:
            return "Yomon";
        case 2:
            return "qoniqarsiz";
        case 3:
            return "qoniqarli";
        case 4:
            return "Yaxshi";
        case 5:
            return "A'lo";
        default:
            return "Xato";
    }
}

// Case3
function faslAniqlash(oy) {
    switch (oy) {
        case 1:
        case 2:
        case 3:
            return "Qish";
        case 4:
        case 5:
        case 6:
            return "Bahor";
        case 7:
        case 8:
        case 9:
            return "Yoz";
        case 10:
        case 11:
        case 12:
            return "Qish";
        default:
            return "Bunday oy mavjud emas";
    }
}

// Case 4
function oyKuni(oy) {
    switch (oy) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 9:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
        default:
            return "Bunday oy mavjud emas";
    }
}

// Case5
function amalBajarish(a, b, amal) {
    switch (amal) {
        case 1:
            return a + b;
        case 2:
            return a - b;
        case 3:
            return a / b;
        case 4:
            return a * b;
        default:
            return "Bunday amal mavjud emas";
    }
}

// Case6
function kesmaUzunligi(birlik, uzunlik) {
    switch (birlik) {
        case 1:
            return uzunlik / 10;
        case 2:
            return uzunlik * 1000;
        case 3:
            return uzunlik;
        case 4:
            return uzunlik / 1000;
        case 5:
            return uzunlik / 100;
        default:
            return "Bunday birlik mavjud emas";
    }
}

// Case7
function ogirlikniKilogramdaAniqlash(birlik, ogirlik) {
    switch (birlik) {
        case 1:
            return ogirlik / 1000;
        case 2:
            return ogirlik / 100;
        case 3:
            return ogirlik;
        case 4:
            return ogirlik * 1000;
        case 5:
            return ogirlik * 100;
        default:
            return "Bunday birlik mavjud emas";
    }
}

// Case8
function sananiOfodalash(day, month) {
    switch (month) {
        case 1:
            return day;
        case 2:
            return 31 + day;
        case 3:
            return 31 + 28 + day;
        case 4:
            return 31 + 28 + 31 + day;
        case 5:
            return 31 + 28 + 31 + 30 + day;
        case 6:
            return 31 + 28 + 31 + 30 + 31 + day;
        case 7:
            return 31 + 28 + 31 + 30 + 31 + 30 + day;
        case 8:
            return 31 + 28 + 31 + 30 + 31 + 30 + 31 + day;
        case 9:
            return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + day;
        case 10:
            return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day;
        case 11:
            return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day;
        case 12:
            return 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day;
        default:
            return "bunday oy mavjud emas";
    }
}

// Case9
function keyingiKun(day, month) {
    let nextDay = day + 1;
    let nextMonth = month;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (nextDay > 31) {
                nextDay = 1;
                nextMonth++;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (nextDay > 30) {
                nextDay = 1;
                nextMonth++;
            }
            break;
        case 2:
            if (nextDay > 28) {
                nextDay = 1;
                nextMonth++;
            }
            break;
        case 12:
            if (nextDay > 31) {
                nextDay = 1;
                nextMonth = 1;
            }
            break;
        default:
            day = "Noto'g'ri oy kiritilgi";
            month = "Noto'g'ri oy kiritilgi";
    }

    return { day: nextDay, month: nextMonth };
}

// Case10
function keyingiHolat(y, k) {
    switch (y) {
        case "s":
            switch (k) {
                case 0:
                    return "Robotning keyingi yo'nalishi: shimol";
                case 1:
                    return "Robotning keyingi yo'nalishi: g'arb";
                case 2:
                    return "Robotning keyingi yo'nalishi: sharq";
                default:
                    return "bunday buyruq mavjud emas";
            }
        case "j":
            switch (k) {
                case 0:
                    return "Robotning keyingi yo'nalishi: janub";
                case 1:
                    return "Robotning keyingi yo'nalishi: sharq";
                case 2:
                    return "Robotning keyingi yo'nalishi: g'arb";
                default:
                    return "bunday buyruq mavjud emas";
            }
        case "q":
            switch (k) {
                case 0:
                    return "Robotning keyingi yo'nalishi: sharq";
                case 1:
                    return "Robotning keyingi yo'nalishi: shimol";
                case 2:
                    return "Robotning keyingi yo'nalishi: janub";
                default:
                    return "bunday buyruq mavjud emas";
            }
        case "g":
            switch (k) {
                case 0:
                    return "Robotning keyingi yo'nalishi: sharq";
                case 1:
                    return "Robotning keyingi yo'nalishi: janub";
                case 2:
                    return "Robotning keyingi yo'nalishi: shimol";
                default:
                    return "bunday buyruq mavjud emas";
            }
        default:
            return "Bunday yo'nalish mavjud emas";
    }
}
