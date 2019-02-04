/*
* 2. Given a DNA strand, return its RNA complement (per RNA transcription).
     Both DNA and RNA strands are a sequence of nucleotides.

     The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
     The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
     Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

     G -> C
     C -> G
     T -> A
     A -> U
*/

dna1 = "GATGCCGAT";
dna2 = "CGTAATAGGT";

function dnaToRna(dna) {
    let rna = "";
    for (let i = 0; i < dna.length; i++)  {
        if (dna[i] === "G") {
            rna += "C";
        } else if (dna[i] === "C") {
            rna += "G";
        } else if (dna[i] === "T") {
            rna += "A";
        } else if (dna[i] === "A") {
            rna += "U";
        } else {
            rna += dna[i]
        }
    }
    return rna;
}

rna1 = dnaToRna(dna1);
rna2 = dnaToRna(dna2);

console.log(rna1);
console.log(rna2);