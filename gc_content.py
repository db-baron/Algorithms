from Bio.Seq import Seq

# with open("/Users/Megatron/Documents/Bioinformatics/BRCA1_test.fasta") as f:
with open("/Users/Megatron/Documents/Bioinformatics/poplar-primers_FAKE.fa") as f:
    f.readline() # skip the first line of metadata
    my_seq = f.read()
    str_seq = Seq(my_seq)
#Print out some details about it
# print ('seq is ' % (str_seq))
# print ('seq %s is %i bases long' % (my_seq, len(my_seq)))
# print ('reverse complement is %s' % str_seq.reverse_complement())
# print ('protein translation is %s' % str_seq.translate())


# Parsing multiple sequences in a fasta file
from Bio.SeqIO.FastaIO import FastaIterator
def mult_fasta_reader(filename):
    with open(filename) as handle:
        for record in FastaIterator(handle):
            # return record
            yield record

# print (mult_fasta_reader("/Users/Megatron/Documents/Bioinformatics/BRCA1_test.fasta_multsequences.fasta"))
