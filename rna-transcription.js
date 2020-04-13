//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  return dna.replace(validLettersRegex, (nuc) => nucleotideComplements[nuc]);
};

const nucleotideComplements = {"G": "C", "C": "G", "T": "A", "A": "U"};
const validLettersRegex = /[GCTA]/g;
