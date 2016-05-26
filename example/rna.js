// http://www.codewars.com/kata/dna-to-rna-conversion/javascript


function DNAtoRNA(dna) {
  var pairs = {'A':'A','T':'U','G':'G','U':'T', 'C': 'C'};

  var rna = dna.split('').map(function(v){ return pairs[v] }).join('');

  return rna;
}