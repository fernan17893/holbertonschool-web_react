interface MajorCredits {
    credits: number;
    brand: "major"
}

interface MinorCredits {
    credits: number;
    brand: "minor"
}

function sumMajorCredits(subject1:number, subject2:number) {
    return subject1 + subject2;
}


function sumMinorCredits(subject1:number, subject2:number) {
    return subject1 + subject2;
}