interface MajorCredits {
    _brandMajor: 'MajorCredits';
    credits: number;
}
interface MinorCredits {
    _brandMinor: 'MinorCredits';
    credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { _brandMajor: 'MajorCredits', credits: subject1.credits + subject2.credits };

}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { _brandMinor: 'MinorCredits', credits: subject1.credits + subject2.credits };
}

/*
// Example usage
const majorSubject1: MajorCredits = { _brandMajor: 'MajorCredits', credits: 3 };
const majorSubject2: MajorCredits = { _brandMajor: 'MajorCredits', credits: 4 };

const minorSubject1: MinorCredits = { _brandMinor: 'MinorCredits', credits: 2 };
const minorSubject2: MinorCredits = { _brandMinor: 'MinorCredits', credits: 1 };

const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log(resultMajor); // Output: { _brandMajor: 'MajorCredits', credits: 7 }
console.log(resultMinor); // Output: { _brandMinor: 'MinorCredits', credits: 3 }
*/